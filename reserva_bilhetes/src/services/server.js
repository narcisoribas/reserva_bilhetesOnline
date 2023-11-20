import axios, { AxiosError } from "axios";
import { parseCookies, setCookie } from "nookies"

let isRefreshing = false;//Para verificar se estou ou nao actualizando o  token.
let failedRequest /*: { refreshHasSucceded: (token) => void; refreshHasFaile: (error) => void; }[] */= [] //Armazena todas as requisicoes que falharam.


export const URL ="http://127.0.0.1:8000";

let cookies = parseCookies()
export const api = axios.create(
    {
        baseURL: URL+"/api",
        headers: {
            Authorization: `Bearer ${cookies['token.bilhetes']}`
        }
    }
)


api.interceptors.response.use(
    response => {
        return response;
    },

    (error) => {
      
     
        if (error.response?.status == 401) {
            //console.log(error.response.data?.status)
            
            if (error.response.data?.status === "Token is Expired"||error.response.data?.status=="Token is Invalid") {
               
                //fazendo refresh token
                cookies = parseCookies()
                //const { 'token.facturacao': refresh_token } = cookies
                const originalConfig = error.config

                if (!isRefreshing) {

                    isRefreshing = true;

                    api.post("/refresh")
                        .then((response) => {
                            const { access_token } = response.data
                            setCookie(undefined, 'token.bilhetes', access_token, { maxAge: 60 * 60 * 24, path: "/" })
                            api.defaults.headers.common['Authorization'] = `Bear ${access_token}`

                            failedRequest.forEach(request => request.refreshHasSucceded(access_token))
                            failedRequest = []
                        }).catch((err) => {
                           
                            failedRequest.forEach(request => request.refreshHasFaile(err))
                            failedRequest = []

                       
                        }).finally(() => {
                            isRefreshing = false;
                        })
                }

                return new Promise((resolve, reject) => {
                    failedRequest.push({
                        refreshHasSucceded: (token) => {
                            originalConfig.headers['Authorization'] = `Bearer ${token}`
                            resolve(api(originalConfig))
                        },
                        refreshHasFaile: (error) => {
                            reject(error)
                        },
                    })
                })

            } else {
                //deslogar usuario
               // api.post("/logout");
            }
        }
    }
)



