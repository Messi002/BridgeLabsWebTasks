import { useState } from "react";
import img from '../Assets/img.PNG';
import {Spinner} from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Register = () => {
    const [isShowing, setIsShowing] = useState(false);
  return (
    <div className=" container mt-3 d-flex justify-content-center align-items-center" >
 <div className="row p-3" style={{border:"0.2px solid grey"}}>

 <div className="bg-danger col-sm-12 col-lg-6 d-flex justify-content-center text-center">
<img src={img} className="img-fluid" alt="Loading..."/>
 </div>

 <div className="bg-warning col-sm-12 col-lg-6  justify-content-center text-center pb-2" >
    <h3 className="text-start">Registration</h3>
 <form class="row">
        <div className="col-lg-12 col-sm-4 text-start" >
            <label for="inputFName" className="form-label">First Name</label>
            <input type="text" class="form-control" name="inputFName"/>
        </div>

        <div className="col-lg-12 col-sm-4 text-start">
            <label for="inputLName" className="form-label">Last Name</label>
            <input type="text" class="form-control" name="inputLName"/>
        </div>

        <div className="col-lg-12 col-sm-4 text-start">
            <label for="phoneNum" className="form-label">Phone</label>
            <input type="number" class="form-control" name="phoneNum"/>
        </div>

        <div className="col-lg-12 col-sm-4 text-start">
            <label for="email" className="form-label">Email</label>
            <input type="email" class="form-control" name="email"/>
        </div>

        <div className="col-lg-12 col-sm-4 text-start">
            <label for="password" className="form-label">Password</label>
            <input type="password" class="form-control" name="password"/>
        </div>

        <div className="col-lg-12 col-sm-4 d-flex mt-3 justify-content-around">
          
        <button type="submit" className="text-white bg-primary btn">
            Login
           </button>
            
           {isShowing?(
            <button type="submit" className="text-white bg-primary btn">
                <Spinner
                              animation="border"
                              size="sm"
                              role="status"
                              aria-hidden="true"
                            />
            Loading...
           </button>
        ):(
            <button type="submit" className="text-white bg-primary btn">
            Sign UP
           </button>
        )}
           
        </div>
     

      </form>
 </div>
 </div>
 <ToastContainer autoClose={2000} />

    </div>
  )
}

export default Register