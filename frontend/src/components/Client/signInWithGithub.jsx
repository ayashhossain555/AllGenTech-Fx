import React from "react";
import { GithubAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, db } from "../firebase";
import { setDoc, doc } from "firebase/firestore";

function SignInWithGithub() {
  function githubLogin() {
    const provider = new GithubAuthProvider();
    signInWithPopup(auth, provider)
      .then(async (result) => {
        const user = result.user;
        if (user) {
          await setDoc(doc(db, "Users", user.uid), {
            email: user.email,
            name: user.displayName || "No Name Provided",
            photo: user.photoURL || "https://via.placeholder.com/150",
          });
          alert("User logged in successfully");
          window.location.href = "/profile";
        }
      })
      .catch((error) => {
        console.error("Error during GitHub sign-in", error);
        alert("GitHub login failed");
      });
  }

  return (
    <div>
      <div
        style={{ display: "flex", justifyContent: "center", cursor: "pointer" }}
        onClick={githubLogin}
      >
        <img
          alt="github-sign-in"
          src={require("../../assets/GithubLogin.png")}
          width={"60%"}
        />
      </div>
    </div>
  );
}

export default SignInWithGithub;
