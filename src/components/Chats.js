import React, { useRef, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { ChatEngine } from 'react-chat-engine';
import { auth } from '../firebase';

import { useAuth } from '../contexts/AuthContext';
import axios from 'axios';

const Chats = () => {

    const history = useHistory();
    const { user } = useAuth();
    const [loading, setLoading] = useState(true);

    // console.log(user);

    const handleLogout = async () => {
        await auth.signOut();

        history.push('/');
    }

    const getFile = async (url) => {
        const response = await fetch(url);
        const data = await response.blob();

        return new File([data], "userPhoto.jpg", { type: 'image/jpeg' });
    }
    useEffect(() => {
        if (!user) {
            history.push('/');

            return;
        }
        axios.get('https://api.chatengine.io/users/me', {
            headers: {
                "project-id": "25d80d28-8c93-4c31-af08-34563786f7bc",
                "user-name": user.email,
                "user-secret": user.uid,
            }
        })
            .then(() => {
                setLoading(false);
            })
            .catch(() => {
                let formdata = new FormData();
                formdata.append('email', user.email);
                formdata.append('username', user.email);
                formdata.append('secret', user.uid);

                getFile(user.photoURL)
                    .then((avatar) => {
                        formdata.append('avatar', avatar, avatar.name);

                        axios.post('https://api.chatengine.io/users/',
                            formdata,
                            { headers: { "private-key": "b02156c1-8975-4b9c-aae0-8eaca980588e" } }
                        )
                            .then(() => setLoading(false))
                            .catch((error) => console.log(error))
                    })
            })
    }, [user, history]);

    if (!user || loading) return 'Loading...';

    return (
        <div className="chats-page">
            <div className="nav-bar">
                <div className="logo-tab">
                    Talk&Chat
                </div>
                <div onClick={handleLogout} className="logout-tab">
                    Logout
                </div>
            </div>

            <ChatEngine
                height="clac(100vh - 66px)"
                projectID="25d80d28-8c93-4c31-af08-34563786f7bc"
                userName={user.email}
                userSecret={user.uid}
            />
        </div>
    );
}

export default Chats;