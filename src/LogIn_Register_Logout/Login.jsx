import React,{useState} from 'react'
import { useNavigate } from "react-router";
import img from '../Assets/img.PNG'
import axios from 'axios';
import {  Spinner} from "react-bootstrap";

const Login = () => {
 let navigate = useNavigate;
 const [isShowing, setIsShowing]=useState(false);
 const [msg, setSMsg]=useState([]);

    const handleSubmit= async (e) =>{
        e.preventDefault();
        var {email,password} = e.target;
        setIsShowing(true);
        
        const res = await fetch(
            "https://simplor.herokuapp.com/api/user/login",
            {
              body: JSON.stringify({
                email: email.value,
                password: password.value,
              }),
              headers: {
                Accept: "*/*",
                "Content-Type": "application/json",
              },
              method: "POST",
            }
          );

          console.log(res.status);

        
    //    let json=JSON.stringify({   email : email.value,password: password.value })
    //     axios.post(`https://simplor.herokuapp.com/api/user/login`,json,{headers:{
    //         'Content-Type':'application/json',
    //         Accept: "*/*"
    //     }}).then(res => {
    //         console.log(res.status);
    //     })

    }
  return (
    <div className=" container mt-3 d-flex justify-content-center align-items-center" >
    <div className="row p-3" style={{border:"0.2px solid grey"}}>
   
    <div className=" col-sm-12 col-lg-6 d-flex justify-content-center text-center">
   <img src={img} className="img-fluid" alt="Loading..."/>
    </div>
   
    <div className="mt-4 col-sm-12 col-lg-6  justify-content-center text-center pb-2" >
       <h3 className="text-start">LogIn</h3>
    <form class="row">
         
   
         
          
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
   
       </div>  )
}

export default Login