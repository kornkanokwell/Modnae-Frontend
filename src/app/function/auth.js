import axios from "axios";
import api from "../../axiosInstance";

export const currentUser = async(authtoken)=>{
    return await api.post("/api/current-user",
        {},
        {
            headers:{
                authtoken,
            }
        }
        
    )   
  
}

export const currentAdmin = async(authtoken)=>{
    return await api.post("/api/current-admin",
        {},
        {
            headers:{
                authtoken,
            }
        }
    )    
}
