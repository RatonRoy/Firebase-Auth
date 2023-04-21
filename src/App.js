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
