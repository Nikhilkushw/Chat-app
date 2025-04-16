import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useGetConversation = () => {
    const [loading, setLoading] = useState(false);
    const [conversaton, setConversation] = useState([]);

    useEffect(() => {
        const getCoversation = async () => {
            setLoading(true);
            try {
                const res = await axios.get('/api/users');
                const data = await res.data;
                if(data.error){
                    throw new Error(data.error);
                }
                setConversation(data);
            } catch (error) {
                toast.error(error.message);
            }finally{
                setLoading(false);
            }
        }
        getCoversation();
    },[])
    return {loading, conversaton};
}

export default useGetConversation;