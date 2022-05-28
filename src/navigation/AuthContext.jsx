import { createContext } from "react";
import useCustomAuthFunction from "./useAuthFunction";

export const AuthContext = createContext({})

const AuthProvider = ({ children }) => {
    const authValues = useCustomAuthFunction()
    // console.log(authValues)
    return <AuthContext.Provider value={authValues}>
        {children}
    </AuthContext.Provider>
}
export default AuthProvider