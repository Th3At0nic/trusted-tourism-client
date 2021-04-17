import firebase from "firebase/app";
import "firebase/auth";
import { useContext, useState } from "react";
import { useHistory, useLocation } from "react-router";
import { UserContext } from "../../App";
import firebaseConfig from "../../configs/firebase.config";

// firebase.initializeApp(firebaseConfig);
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

function Login() {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const [newUser, setNewUser] = useState(0);
  const [user, setUser] = useState({
    isSignedIn: false,
    name: "",
    email: "",
    password: "",
    photo: "",
    error: "",
    success: false,
  });

  ////////////////////// Google auth provider
  const googleProvider = new firebase.auth.GoogleAuthProvider();

  ////////////////////////// Sign in with popup.
  const handleGoogleSignIn = () => {
    firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then((result) => {
        const { displayName, email, photoURL } = result.user;
        const signedInUser = {
          isSignedIn: true,
          name: displayName,
          email: email,
          photo: photoURL,
        };
        setUser(signedInUser);
        setLoggedInUser(signedInUser);
        history.replace(from);
      })
      .catch((err) => console.log(err.message));
  };

  ////////////////////////////////// sign out
  const handleGoogleSignOut = () => {
    firebase
      .auth()
      .signOut()
      .then((res) => {
        const userSignOut = {
          isSignedIn: false,
          name: "",
          email: "",
          photo: "",
        };
        setUser(userSignOut);
        setLoggedInUser(userSignOut);
      })
      .catch((error) => {});
  };

  return (
    <div className="App">
      {user.isSignedIn ? (
        <button
          className="btn btn-warning p-2 m-3"
          onClick={handleGoogleSignOut}
        >
          Sign Out
        </button>
      ) : (
        <button
          className="btn btn-warning p-2 m-3"
          onClick={handleGoogleSignIn}
        >
          Continue with Google
        </button>
      )}
      <br />

      {user.isSignedIn && (
        <div>
          <p>Welcome {user.name}</p>
          <p>Your email: {user.email}</p>
          <img src={user.photo} alt="" />
        </div>
      )}
    </div>
  );
}

export default Login;
