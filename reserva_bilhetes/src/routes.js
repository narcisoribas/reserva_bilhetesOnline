import Home from "views/cliente/Home";
import Index from "views/Index.js";
import Profile from "views/examples/Profile.js";
import Maps from "views/examples/Maps.js";
import Register from "views/examples/Register.js";
import Login from "views/examples/Login.js";
import PontoDeEmbargue from "views/pontodeEmbargue/PontoDeEmbarque";
import RotasDeServico from "views/rotas/RotasDeServico";
import Classes from "views/classes/Classe";
import Usuario from "views/usuarios/Usuario";
import AddUsuario from "views/usuarios/UsuarioCreate";
import AddRota from "views/rotas/Rotacreate";
import ClasseCreate from "views/classes/ClasseCreate";
import Pagamentos from "views/Pagamento/Pagamento";


var routes = [
  {
    path: "/home",
    component: <Home/>,   
    
  },
  
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: <Index />,
    layout: "/admin",
  },

  {
    path: "/pontosDeEmbargue",
    name: "Pontos de embargue",
    icon: "ni ni-planet text-blue",
    component: <PontoDeEmbargue/>,
    layout: "/admin",
  },
  {
    path: "/rotasDeServico",
    name: "Rotas",
    icon: "ni ni-pin-3 text-orange",
    component: <RotasDeServico />,
    layout: "/admin",
  },
  ,
  {
    path: "/addRotas",
    name: "Rotas",
    icon: "ni ni-pin-3 text-orange",
    component: <AddRota/>,
    name:"hidden",
    layout: "/admin",
  },
  {
    path:"/users",
    name:"Usuarios",
    icon: "ni ni-single-02 text-yellow",
    component:<Usuario/>,
    layout:"/admin"
  },
  {
    path:"/userCreate",
    icon: "ni ni-single-02 text-yellow",
    component:<AddUsuario/>,
    name:"hidden",
    layout:"/admin"
  },
  {
    path: "/user-profile",
    component: <Profile />,
    name:"hidden",
    layout: "/admin",
  },
  {
    path: "/tables",
    name: "Pagamentos",
    icon: "ni ni-bullet-list-67 text-red",
    component: <Pagamentos />,
    layout: "/admin",
  },
  ,
  {
    path: "/classes",
    name: "Classes",
    icon: "ni ni-bullet-list-67 text-red",
    component: <Classes/>,
    layout: "/admin",
  },
  ,
  {
    path: "/addclasses",
    name: "hidden",
    icon: "ni ni-bullet-list-67 text-red",
    component: <ClasseCreate/>,
    layout: "/admin",
  },  
  {
    path: "/recibos",
    name: "Recibos",
    icon: "ni ni-bullet-list-67 text-red",
    component: <h1>Recibos</h1>,
    layout: "/admin",
  },
  ,
  {
    path: "/clientes",
    name: "Clientes",
    icon: "ni ni-bullet-list-67 text-red",
    component: <h1>Clientes</h1>,
    layout: "/admin",
  },  
  {
    path: "/login",
    name:"hidden",
    icon: "ni ni-key-25 text-info",
    component: <Login />,
    layout: "/auth",
  },
  {
    path: "/register",
    name:"hidden",
    icon: "ni ni-circle-08 text-pink",
    component: <Register />,
    layout: "/auth",
  },
];
export default routes;
