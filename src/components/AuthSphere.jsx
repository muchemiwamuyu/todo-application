import { onAuthStateChanged } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { auth } from './FirebaseInit'
import { useNavigate } from 'react-router-dom'

function AuthSphere() {
    const [loading, setIsLoading] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setIsLoading(true)
            } else {
                setIsLoading(false);
                navigate('/signup')
            }

            return () => unsubscribe()
        }, [navigate])
    })

    return (
        <>
            <div className="relative w-16 h-16 ml-[2%]">
            {/* Spinning ring */}
            <div
                className={`absolute inset-0 rounded-full border-4 
                    ${loading ? 'border-green-500' : 'border-red-500'} 
                    animate-spin`}
            />

            {/* Inner circle with text */}
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black font-bold text-xl absolute inset-2">
                E
            </div>
        </div>
        </>
    )
}

export default AuthSphere