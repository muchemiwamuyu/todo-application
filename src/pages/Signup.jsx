import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { auth } from '../components/FirebaseInit';
import { useNavigate } from 'react-router-dom';

function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')
    const navigate = useNavigate()

    const handleSignup = async (e) => {
        e.preventDefault()

        if (!email || !password) {
            setMessage('please fill out the signup fields')
        }

        try {
            await createUserWithEmailAndPassword(auth, email, password);
            setMessage('Signup successfull');
            navigate('/');
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                setMessage('Email already exists')
                navigate('/login')
            } else {
                setMessage(error.message)
            }
        }
    }

  return (
    <div>
        <h1>Signup for users</h1>
        <form onSubmit={handleSignup}>
            <label>Email:</label>
            <input type="email" onChange={(e) => setEmail(e.target.value)}/>
            <label>Password</label>
            <input type="password" onChange={(e) => setPassword(e.target.value)} />
            <button type='submit'>submit</button>
            <p>{message}</p>
        </form>
    </div>
  )
}

export default Signup