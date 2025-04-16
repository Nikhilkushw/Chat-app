import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const login = async (username, password) => {
    const success = handleInputErrors({
      username,
      password,
    });
    if (!success) return;
    setLoading(true);
    try {
      const res = await axios.post("/api/auth/login", {
        username,
        password,
      });
      const data = await res.data;
      if (data.error) {
        throw new Error(data.error);
      }
      localStorage.setItem("chart-user", JSON.stringify(data));
      setAuthUser(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { login, loading };
};

export default useLogin;

function handleInputErrors({

  username,
  password,
}) {
  if (!username || !password) {
    toast.error("Please fill in all fields");
    return false;
  } 

  return true;
}
