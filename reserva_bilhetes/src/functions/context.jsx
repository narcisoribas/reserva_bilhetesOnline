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

    const [embargue,setEmbargue]=useState([]);
    const navigate = useNavigate()



    /*---------------------CRDU USUARIO----------------------------*/

    useEffect(()=>{
            async function getAllUser(){
                await api.get("user/findAll")
                .then((response)=>{
                    setUserList(response.data)
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
                setUserList([...userList,response.data])
                alert("Usuario Criado com sucesso")
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

    useEffect(()=>{

            async function getRoutes(){
                await api.get("rotas/all")
                .then((response)=>{
                    setRotas(response.data)
                }).catch((err)=>{
                    console.log(err)
                })
            }

            getRoutes();
    },[])

    async function createRotas(data){
        api.post("rotas/create",data)
        .then((response)=>{
            setRotas([...rotas,response.data])
            alert("Rota criada com sucesso")
        }).catch((err)=>{
            alert("Erro ao criar rota")
        })
    }



    /*-----------HORARIO */

        useEffect(()=>{

                async function getHorario(){
                    await api.get("horario/findAll")
                    .then((response)=>{
                        setHorario(response.data)
                    }).catch((err)=>{
                        console.log(err)
                    })
                }

                getHorario();


        },[])

        async function createHorario(data){
            api.post("horario/create",data)
            .then((response)=>{
                console.log(response)
            }).catch((err)=>{
                alert(err)
            })
        }



   /*---------- crud local de embargue ---------------*/

   useEffect(()=>{

        async function getEmbargue(){
            await api.get("embarque/findAll")
            .then((response)=>{
                
                setEmbargue(response.data)
            }).catch((err)=>{
                console.log(err)
            })
        }

        getEmbargue();

   },[])


   async function createLocalEmbargue(data){

        await api.post("/embarque/create",data)
        .then((response)=>{
            setEmbargue([...embargue,response.data])
            alert("Sucesso")
        }).catch((err)=>{
            alert("Erro ao cadastrar local de embarque")
        })
   }


   async function deleteLocalDeEmbarque(id){
        
            api.delete("embarque/delete",Number(id))
            .then((response)=>{
                alert("Sucesso")
            }).catch((err)=>{
                alert("erro ao apagar")
            })
   }

    return(
        <AuthContext.Provider value={{
                
                            login,
                            user,
                            userCreate,
                            userList,
                            createRotas,
                            rotas,
                            createHorario,
                            horario,
                            logout,
                            embargue,
                            createLocalEmbargue,
                            deleteLocalDeEmbarque
                            }}>
            {children}
        </AuthContext.Provider>
    )

}