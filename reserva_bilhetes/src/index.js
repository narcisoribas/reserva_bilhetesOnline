/*!

=========================================================
* Argon Dashboard React - v1.2.3
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import "assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/argon-dashboard-react.scss";

import AdminLayout from "layouts/Admin.js";
import AuthLayout from "layouts/Auth.js";

import Home from "views/cliente/Home";
import Reserva from "views/cliente/reserva/Reserva";
import ResumoDaViagem from "views/cliente/resumoViagem/ResumoDaViagem";
import QRCodeView from "views/cliente/perfil/QRCode";
import { AuthContextProvider } from "functions/context";


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
  <AuthContextProvider>
  

    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/reserva/origem/:origem/destino/:destino" element={<Reserva/>} />
      <Route path="/resumoViagem" element={<ResumoDaViagem/>}/>
      <Route path="/recibo" element={<QRCodeView/>}/>

      <Route path="/admin/*" element={<AdminLayout />} />
      <Route path="/auth/*" element={<AuthLayout />} />
      <Route path="*" element={<Home/>} />
      
    </Routes>
  
  </AuthContextProvider>
  </BrowserRouter>
);
