import { useEffect, useState } from "react"

const AuthToken = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    console.log(isLoggedIn);

    const storeToken = () => {
        setIsLoggedIn(true)
    }

    useEffect(() => {
        if (localStorage.getItem("idToken") !== null) {
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }
    }, [isLoggedIn])
    return {
        isLoggedIn,
        setIsLoggedIn,
        storeToken
    }
}
export default AuthToken