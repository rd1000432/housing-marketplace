import {useEffect, useState, useRef} from 'react';
import {getAuth, onAuthStateChanged} from 'firebase/auth'

export const useAuthStatus = () => {

    const [loggedIn, setLoggedIn] = useState(false) 
    // check to see if we are logged then set status to false and loggedIn to true
    const [checkingStatus, setCheckingStatus] = useState(true)
    const isMounted = useRef(true)

    useEffect(() => {
        if (isMounted) {
            const auth = getAuth()
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    setLoggedIn(true)
                }
                setCheckingStatus(false)
            })
        }
        return () => {
            isMounted.current = false
        }
    }, [isMounted])

    return { loggedIn, checkingStatus }
}
