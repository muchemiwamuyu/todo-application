import { signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { auth } from '../components/FirebaseInit'

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')

    const handleLogin = async (e) => {
        e.preventDefault()

        try {
            await signInWithEmailAndPassword(auth, email, password);
            setMessage('Login successfull')
        } catch (error) {
            setMessage('Error while logging in', error.message)
        }
    }


  return (
    <div>
        <h1>Login for users</h1>
        <form onSubmit={handleLogin}>
            <label>Email:</label>
            <input type="email" onChange={(e) => setEmail(e.target.value)}/>
            <label>Password:</label>
            <input type="password" onChange={(e) => setPassword(e.target.value)} />
            <button type='submit'>Submit</button>
            <p>{message}</p>
        </form>
    </div>
  )
}

export default Login