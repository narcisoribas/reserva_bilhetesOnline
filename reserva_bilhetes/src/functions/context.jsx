import { createContext, useEffect, useState } from "react";
import { api } from "./../services/server";
import { useNavigate } from "react-router-dom";

import { parseCookies,setCookie, destroyCookie } from "nookies";
import { operationHasBenSucceded, operationHasFailed } from "./sweet";



export const AuthContext = createContext({});

export function AuthContextProvider({children}){
    const [user,setUser]=useState(JSON.parse(localStorage.getItem("user") || "null"));

    const [rotas,setRotas]=useState([])
    const [horario,setHorario]=useState([])
    const [userList,setUserList]=useState([])
    const [viagem,setViagem]=useState([])

    const [viagemReservada,setViagemRervada] = useState()

    const [embargue,setEmbargue]=useState([]);
    const [isComingFromReserve,setIsComingFromReserve]=useState(JSON.parse(localStorage.getItem("isComingFromReserve") || "false"))
    const [anteriorLocation,setAnteriorLocation]=useState(JSON.parse(localStorage.getItem("anteriorLocation") || "null"))
    const navigate = useNavigate()

    const isAuthenticate =!!user;



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

            if(isComingFromReserve){
                navigate(anteriorLocation)
                setAnteriorLocation("")
            }else{
                navigate("/admin")
            }
        


            localStorage.setItem("user", JSON.stringify(user));
            setUser(user);
    
            setCookie(undefined, "token.bilhetes", access_token, {
              maxAge: 60 * 60 * 24,
              path: "/",
            });
    
         


            api.defaults.headers.common["Authorization"] = `Bearer ${access_token}`;


        }).catch((err)=>{
            operationHasFailed("ERRO ao fazer login, email ou senha invalidos")
        })
    }

    async function userCreate(name,email,password){
            api.post("user/create",{name,email,password})
            .then((response)=>{
                
                if(isComingFromReserve){
                    setUserList([...userList,response.data])
                    operationHasBenSucceded("Sucecsso")
                    navigate(anteriorLocation)
                }else{
                    setUserList([...userList,response.data])

                    if(response.status===200){
                        operationHasBenSucceded("Usuario Criado com sucesso")
                    }else if(response.status===500){
                        operationHasFailed("Erro ao comunicar-se com o servidor")
                    }else{
                        operationHasFailed("Erro ao cadastar-se")
                    }
                  
                }
            }).catch((err)=>{
                operationHasFailed("Erro ao cadastrar")
            })
    }


    

    async function logout(){
        api.post("/logout")
        .then((response)=>{

            destroyCookie(undefined, "token.Onschool");
            setUser(null);
            destroyCookie(null, "token.Onschool");
             localStorage.clear();
             operationHasBenSucceded("Sessao terminada")
             navigate("/");

            

        }).catch((err)=>{
            operationHasFailed("Erro ao terminar sessao")
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
            operationHasBenSucceded("Rota criada com sucesso")
        }).catch((err)=>{
            operationHasFailed("Erro ao criar rota")
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
            operationHasBenSucceded("Sucesso")
        }).catch((err)=>{
            operationHasFailed("Erro ao cadastrar local de embarque")
        })
   }


   async function deleteLocalDeEmbarque(id){
        
            api.delete("embarque/delete",Number(id))
            .then((response)=>{
                operationHasBenSucceded("Sucesso")
            }).catch((err)=>{
                operationHasFailed("erro ao apagar")
            })
   }

   /**   viagem reservada **/


   useEffect(()=>{
    if(localStorage.getItem("viagemReservada")){
        setViagemRervada(localStorage.getItem("viagemReservada"))
    }
   },[])


   async function reservarViagem(data){

            if(isAuthenticate){
                setViagemRervada(data)
                localStorage.setItem("viagemReservada", JSON.stringify(viagemReservada));
                operationHasBenSucceded("Reservado!")
            }else{
                setAnteriorLocation(window.location.pathname)

                setIsComingFromReserve(true)
                localStorage.setItem("isComingFromReserve", JSON.stringify(isComingFromReserve));
                localStorage.setItem("anteriorLocation", JSON.stringify(anteriorLocation));
                navigate("/auth/login")
            }
          

            
   }


   /**     viagem crud*/


   useEffect(()=>{
    api.get("viagem/findAll")
    .then((response=>{
        setViagem(response.data)
        console.log(response.data)
    })).catch((err)=>{
        console.log(err)
    })
   },[])

   async function createViagem(data){
    const {referencia} =data
    const {rota_id:id}=viagemReservada
    const n_assento=null
    n_bilhete= null
    const desconto =0;
    const Total =0;
    const observacao ="nenhuma"
   const estado="disponivel"

    await api.post("viagem/create",{desconto,observacao,estado,referencia,n_assento,n_bilhete,user_id:user.id,passageiro_id:user.id})


    .then((response)=>{
        console.log(response.data)
        setViagem([...viagem,response.data])
        operationHasBenSucceded("Sucesso!")
    }).catch((err)=>{

    })
   }

    return(
        <AuthContext.Provider value={{
                            viagem,setViagem,
                            createViagem,
                            isAuthenticate,
                            isComingFromReserve,
                            setIsComingFromReserve,
                            reservarViagem,
                            viagemReservada,
                            setViagemRervada,
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