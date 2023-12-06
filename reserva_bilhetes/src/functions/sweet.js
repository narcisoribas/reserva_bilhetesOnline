import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css'



export function operationHasBenSucceded(message){
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: message,
      showConfirmButton: false,
      timer: 1500
    })
  }
  
  
  
  
  
  export function operationHasFailed(message){
    Swal.fire({
      icon: 'error',
      title: 'Erro',
      text: message,
    })
  }