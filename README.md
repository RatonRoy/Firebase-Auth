# Firebase Authentication

### Google Authentication Here 

* Register a project in the firebase using this website https://console.firebase.google.com/u/0/

* Install Node package manager here like this npm install firebase 
* Create a file like with the name of firebase.init.js and remains all of the information 


```js

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLvkDJoYN-qtCjtQwUAs9kuqEMBQJbCFs",
  authDomain: "simple-auth-1e73a.firebaseapp.com",
  projectId: "simple-auth-1e73a",
  storageBucket: "simple-auth-1e73a.appspot.com",
  messagingSenderId: "1053188989339",
  appId: "1:1053188989339:web:4044df2fd32a98fe10813e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app; 


```

* Create an another file where you want to login like this 

```js 
import {GoogleAuthProvider, getAuth, signInWithPopup} from 'firebase/auth'
import './App.css';
import app from './firebase/firebase.init';

const auth = getAuth(app);

function App() {
  const provider = new GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    // console.log("Google sign in button"); 
    signInWithPopup(auth, provider)
    .then((result) => {
    // The signed-in user info.
    const user = result.user;
    console.log(user)

  }).catch((error) => {
    console.error("error", error)
  });

  }
  return (
    <div className="App">
      <button
      onClick={handleGoogleSignIn}
      > Google Sign In  </button>
    </div>
  );
}

export default App;

```