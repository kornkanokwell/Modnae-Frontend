import axios from "axios";

export const currentUser = async(authtoken)=>{
    return await axios.post("https://modnae-m7lm.onrender.com/api/current-user",
        {},
        {
            headers:{
                authtoken,
            }
        }
        
    )   
  
}

export const currentAdmin = async(authtoken)=>{
    return await axios.post("https://modnae-m7lm.onrender.com/api/current-admin",
        {},
        {
            headers:{
                authtoken,
            }
        }
    )    
}
