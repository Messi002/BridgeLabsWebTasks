import { useState, useEffect } from "react";
import img from '../Assets/img.PNG';
import axios from 'axios';
import {Spinner} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Register = () => {
    let navigate =useNavigate();
    // useEffect(() => {
    //   if (token && token !== '') {
    //     window.location.pathname = '/';
    //   }
    // }, [token]);
    const [isShowing, setIsShowing] = useState(false);
    const [Data, setFormData] = useState({
      firstName: '',
      lastName: '',
      email: '',
      contact: '',
      password: '',
      // avatar: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
    });


    const handleSubmit = async (e) => {
      e.preventDefault();
      const formData = new FormData(e.target);
      const inputObject = Object.fromEntries(formData);
      console.log(inputObject);

      setIsShowing(true);
      const res = await axios.post("https://simplor.herokuapp.com/api/user/register",{
      inputObject,
      headers:{
      "Content-Type":"multipart/form-data",
      "Accept":"application/json"
        }

      }).then(()=>{
        navigate("/login")
      }).catch((err)=> {
        console.log(err.response.status)
        console.log(err.response.data)
        console.log(err.request)
        console.log(err.message)
        setIsShowing(false);


      }
      );
      setIsShowing(false);

      const data = await res.data;
      console.log(res.message);
      return data;
    

    }
    

  
  return (
    <div className=" container mt-3 d-flex justify-content-center align-items-center" >
 <div className="row p-3" style={{border:"0.2px solid grey"}}>

 <div className=" col-sm-12 col-lg-6 d-flex justify-content-center text-center">
<img src={img} className="img-fluid" alt="Loading..."/>
 </div>

 <div className="mt-4 col-sm-12 col-lg-6  justify-content-center text-center pb-2" >
    <h3 className="text-start">Registration</h3>

 <form class="row" onSubmit={handleSubmit} >
        <div className="col-lg-12 col-sm-4 text-start" >
            <label htmlFor="firstName" className="form-label">First Name</label>
            <input type="text" className="form-control" name="firstName" required />
        </div>

        <div className="col-lg-12 col-sm-4 text-start">
            <label htmlFor="lastName" className="form-label">Last Name</label>
            <input type="text" className="form-control" name="lastName" required />
        </div>

        <div className="col-lg-12 col-sm-4 text-start">
            <label htmlFor="contact" className="form-label">Phone</label>
            <input type="text" className="form-control" name="contact" required />
        </div>

        <div className="col-lg-12 col-sm-4 text-start">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" name="email" required />
        </div>

        <div className="col-lg-12 col-sm-4 text-start">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" name="password" required />
        </div>

        <div className="col-lg-12 col-sm-4 d-flex mt-3 justify-content-around">
          
        <button  className="text-white bg-primary btn" onClick={()=> navigate("/login")}>
            Login
           </button>
            
           {isShowing?(
            <button type="submit" disabled className="text-white bg-primary btn">
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



