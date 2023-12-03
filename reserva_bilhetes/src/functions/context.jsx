import { createContext, useEffect, useState } from "react";
import { api } from "./../services/server";
import { useNavigate } from "react-router-dom";

import { parseCookies,setCookie, destroyCookie } from "nookies";



export const AuthContext = createContext({});

export function AuthContextProvider({children}){
    const [user,setUser]=useState();

    const [rotas,setRotas]=useState([])
    const [horario,setHorario]=useState([])
    const [userList,setUserList]=useState([])
    const navigate = useNavigate()



    /*---------------------CRDU USUARIO----------------------------*/

    useEffect(()=>{
            async function getAllUser(){
                await api.post("user/findAll")
                .then((response)=>{
                    console.log(response)
                }).catch((err)=>{
                    console.log(err)
                })
            }

            getAllUser();
    },[])


    async function login(email,password){

    
        await api.post("/login",{email,password})
        .then((response)=>{
            const {access_token,user}=response.data
            setUser(response.data)
            navigate("/admin")

            console.log(response.data)

            localStorage.setItem("user", JSON.stringify(user));
            setUser(user);
    
            setCookie(undefined, "token.bilhetes", access_token, {
              maxAge: 60 * 60 * 24,
              path: "/",
            });
    
         


            api.defaults.headers.common["Authorization"] = `Bearer ${access_token}`;


        }).catch((err)=>console.log(err))
    }

    async function userCreate(name,email,password){
            api.post("user/create",{name,email,password})
            .then((response)=>{
                console.log(response)
            }).catch((err)=>{
                alert(err)
            })
    }


    

    async function logout(){
        api.post("/logout")
        .then((response)=>{

            destroyCookie(undefined, "token.Onschool");
            setUser(null);
            destroyCookie(null, "token.Onschool");
             localStorage.clear();
             navigate("/");

            

        }).catch((err)=>{
            alert("Erro ao sair")
        })
    }


    /*---------- CRUD ROTAS ------------------------*/

    async function createRotas(data){
        api.post("rotas/create",data)
        .then((response)=>{
            console.log(response.data)
        }).catch((err)=>{
            alert("Erro ao cadastrar rota")
        })
    }


    /*-----------HORARIO */

        async function createHorario(data){
            api.post("horario/create",data)
            .then((response)=>{
                console.log(response)
            }).catch((err)=>{
                alert(err)
            })
        }



    return(
        <AuthContext.Provider value={{login,user,userCreate,userList,createRotas,rotas,createHorario,horario,logout}}>
            {children}
        </AuthContext.Provider>
    )

}