import axios from "axios";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";
import { useState } from "react";


const useLogout = () => {
    const[loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext();

    const logout = async () => {
        setLoading(true);
        try {
            // ✅ Send request to server to log out user
            const res = await axios.post("/api/auth/logout");
            const data = await res.data;
            if(data.error) {
                throw new Error(data.error);
            }
            localStorage.removeItem("chat-user");
            setAuthUser(null);
            toast.success("Logout successful!");
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };
    return { loading, logout };

}

export default useLogout;