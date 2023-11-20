import { createContext, useState } from "react";
import { api } from "./../services/server";



export const AuthContext = createContext({});






export function AuthContextProvider({children}){
    const [user,setUser]=useState();


    /*---------------------CRDU USUARIO----------------------------*/

    async function login(email,password){

        alert("ola")
        await api.post("/login",{email,password})
        .then((response)=>{
            console.log(response.data)
        }).catch((err)=>console.log(err))
    }

    return(
        <AuthContext.Provider value={{login}}>
            {children}
        </AuthContext.Provider>
    )

}