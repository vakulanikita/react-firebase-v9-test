import React, { useContext, useState, useEffect } from "react"
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged
} from 'firebase/auth'
import { auth } from '../components/firebase-config'

const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [userData, setUserData] = useState({
    userProviderId: "",
    userId: "",
    userName: "",
    userEmail: "",
    userPhotoLink: "",
  })
  
  async function register(email, password) {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(user);
    } catch (error) {
      console.log(error.message)
    }
  }

  async function login(email, password) {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(user);
    } catch (error) {
      console.log(error.message)
    }
  }


  async function logout() {
    try {
      await auth.signOut()
      // router.replace('/login');
    } catch (error) {
      console.log(error);
      // setError('Failed to log out')
    }
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserData({
          userProviderId: user.providerData[0].providerId,
          userId: user.uid,
          userName: user.displayName,
          userEmail: user.email,
          userPhotoLink: user.photoURL,
        })
        setCurrentUser(user)
      } else {
        setCurrentUser(null)
      }
      setLoading(false)
    })
  }, [])

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        userData,
        login,
        register,
        logout
      }}>
      {!loading && children}
    </AuthContext.Provider>
  )
}