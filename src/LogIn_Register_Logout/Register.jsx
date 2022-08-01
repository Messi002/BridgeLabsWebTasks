import { useState } from "react";
import img from '../Assets/img.PNG';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Register = () => {
  return (
    <div className="Contaier d-flex justify-content-center align-items-center" style={{width:"100vw", height:"100vh"}}>
 <div className="row p-2" style={{border:"0.2px solid grey"}}>
 <div className="bg-danger col-sm-12 col-lg-6  justify-content-center text-center">
<img src={img} className="img-fluid w-100 h-100" alt="Image Here"/>
 </div>
 <div className="bg-warning col-sm-12 col-lg-6  justify-content-center text-center">2</div>
 </div>
      
    </div>
  )
}

export default Register