import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../Firebase/FirebaseAuth";

function AuthProvider({ children }) {
  const [user, SetUser] = useState(null);
  const [userLoder, setUserLoder] = useState(true);

  const createUser = (email, password) => {
    setUserLoder(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const singInUser = (email, password) => {
    setUserLoder(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOutUser = () => {
    setUserLoder(true);
    signOut(auth)
      .then((res) => {
        console.log(res);
        setUserLoder(true);
      })
      .then((error) => {
        console.log(error);
      });
  };
  // onAuthStateChanged(auth, (currentUser) => {
  //   if (currentUser) {
  //     console.log("user has stay", currentUser);
  //   } else {
  //     console.log("user nai");
  //   }
  // });
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currenUser) => {
      // console.log("curren user insite state", currenUser);
      SetUser(currenUser);
      setUserLoder(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);
  const userInfo = {
    user,
    userLoder,
    logOutUser,
    createUser,
    singInUser,
  };
  return <AuthContext value={userInfo}>{children}</AuthContext>;
}

export default AuthProvider;
