<!-- # Unichat Application

![Chat Application](https://i.ibb.co/GJwyy9m/Bv9-Js3-QLOLY-HD.jpg)

## Introduction

This is a code repository for the corresponding video tutorial. In this video, we create a full Realtime Chat Application with Social Auth and dedicated chat APIs/sockets.

You will learn how to build a react chat app using [https://chatengine.io](https://chatengine.io)

Firebase and Chat Engine are greats tools to setup apps fast and easily - great to learn with!

### Bonus - E-mail notifications

If you want to upgrade this chat application even further than what is shown in the video, you can add e-mail notifications. More info on https://chatengine.io/docs/email_notifications. -->

# React project - Web Messenger


## Used skills
- Languages:
    - React
    - JavaScript 
- Database 
    - Firebase
- Chat Engine


## What I learn from this project
- Learn how to use [Firebase](https://firebase.google.com/) and [Chat Engine](https://chatengine.io/), and how they work.
- Building basic knowledge about React.
- How to use Google account and Facebook acount to log in to the app with Firebase.
- How to deploy the app and distribute.


## Demo

Link: https://talk-and-chat-mastery.netlify.app/

- If the user is loged in, a green light is on. If not, you will see a red light.


<img src="/assets/message-on.png" width="30%" height="30%"/><img src="/assets/message-off.png" width="30%" height="30%"/>

- Demo

    - Send a message

    ![message-sayhi](/assets/message-sayhi.gif)
    
    - Send an image file
    
    ![message-send-img](/assets/message-send-img.gif)
    
    - Delete a chat room

    ![message-delete-chat](/assets/message-delete-chat.gif)
    
    - Start a new chat

    ![message-new-chat](/assets/message-new-chat.gif)


## Features

- Authentication with Firebase
    - Login
    ```javascript
    <div
        className="login-button google"
        onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}
    >
        <GoogleOutlined /> Sign In with Google
    </div>
    ```

- Managing user's data
    - Used React Hook as a session
    ```javascript
    const AuthContext = React.createContext();

    export const useAuth = () => useContext(AuthContext);
    
    export const AuthProvider = ({ children }) => { 
        // code
        // Set the values for loading, user and history(path)
        // code for AuthProvider
        
        // return loading and chidren with the value of the user
    }
    ```
    
- Return the main page to display
    - Used Router and AuthProvider
    ```javascript
    <Router>
      <AuthProvider>
        <Switch>
          <Route path="/chats" component={Chats} />
          <Route path="/" component={Login} />
        </Switch>
      </AuthProvider>
    </Router>
    ```
    
    
