import React, { createContext, useEffect, useState } from 'react'
import auth from '../../firebase.config'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth'

export let DataInfo = createContext(null)

export default function DataProvider({ children }) {
    let [user, setUser] = useState(null);
    let [detalsLoaction, setDetalsLoaction] = useState(null)


    // sign in emali password provider 

    let emailPassSignIn = (email, pass) => {
        return signInWithEmailAndPassword(auth, email, pass)

    }

    // create new user with email password 

    let newUserWithEmailPass = (email, pass) => {
        return createUserWithEmailAndPassword(auth, email, pass)
    }

    // get users 

    useEffect(() => {
        let unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })
        return () => {
            unSubscribe()
        }
    }, [])

    // log out 

    let logOut = () => {
        return signOut(auth)
    }

    // update user 

    let updateUser = (updateInfo) => {
        return updateProfile(auth.currentUser, updateInfo)
    }



    // data provider 

    let informations = {
        emailPassSignIn,
        newUserWithEmailPass,
        user,
        logOut,
        setDetalsLoaction,
        detalsLoaction,
        setUser,
        updateUser
    }
    console.log(user)
    return (
        <DataInfo.Provider value={informations} >
            {
                children
            }
        </DataInfo.Provider>
    )
}
