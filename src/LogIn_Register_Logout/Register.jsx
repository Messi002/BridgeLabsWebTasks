import { useState } from "react";
import img from '../Assets/img.PNG';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Register = () => {
  return (
    <div className="Contaier d-flex justify-content-center align-items-center" style={{width:"100vw", height:"100vh"}}>
 <div className="row p-2" style={{border:"0.2px solid grey"}}>

 <div className="bg-danger col-sm-12 col-lg-6  justify-content-center text-center">
<img src={img} className="img-fluid w-100 h-100" alt="Loading..."/>
 </div>

 <div className="bg-warning col-sm-12 col-lg-6  justify-content-center text-center">
 <form class="row g-3">
        <div className="col-lg-12 col-sm-4 text-start">
            <label for="inputFName" className="form-label">First Name</label>
            <input type="text" class="form-control" name="inputFName"/>
        </div>

      </form>
 </div>
 </div>
     
    </div>
  )
}

export default Register