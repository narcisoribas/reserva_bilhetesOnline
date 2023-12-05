import React, { useContext, useEffect, useState } from 'react'
import QRCode from "react-qr-code";
import QRcodeLink from "qrcode"

import "./../lib/owlcarousel/assets/owl.carousel.min.css"
import "./../lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css"
import "./../css/style.css"
import "./../css/style.min.css"
import NavBar from '../NavBar'
import { AuthContext } from 'functions/context';

function QRCodeView() {
     const { viagemReservada}=useContext(AuthContext)
    const [linkQRcode,setLinkQRcode] = useState()


  function handleGenerateLink(link){
    QRcodeLink.toDataURL(link,{
        with:600,
        margin:3,

      },function(err,url){
        setLinkQRcode(url)
      })
  }

  useEffect(()=>{
    handleGenerateLink(viagemReservada!==null?viagemReservada:"")
  },[])
 
  return (
    <>
      <NavBar/>
    <div className='container ' style={{width: '256px',height: '256px',flexShrink:0,marginTop:"10rem"}}>
    <QRCode
      value={viagemReservada!==null?viagemReservada:""}
    />
<br/>
<br/>
<br/>
<br/>
<a  style={{marginTop:"15rem",cursor:"pointer"}} className='mt-5' href={linkQRcode} download="qrCode.pdf">Baixar QRCODE</a>
    </div>

    
    </>
  )
}

export default QRCodeView
