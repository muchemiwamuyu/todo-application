import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import React from 'react'


export const AuthenticationVerification = async (email, password) => {
    try {
        const auth = getAuth();
        const createUser = await createUserWithEmailAndPassword(auth, email, password);
        const user = createUser.user;

        // return user or put it in a state later
        return user
    } catch (error) {
        console.error('error creating user', error.message);
        throw error;
    }
}

export const signNewUsers = async (email, password) => {
    try {
        const auth = getAuth()
        const signedUer = signInWithEmailAndPassword(auth, email, password);
        const user = signedUer.user;
        return user;
    } catch (error) {
        console.error("error signing in user", error.message);
        throw error;
    }
}






