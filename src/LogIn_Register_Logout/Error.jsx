import React from 'react'
import img from '../Assets/img.PNG';
import {Link } from "react-router-dom";


const Error = () => {
  return (
    <div className=" container mt-3 d-flex justify-content-center align-items-center" >
    <div className="row p-3" style={{border:"0.2px solid grey"}}>
   
    <div className=" col-sm-12 col-lg-6 d-flex justify-content-center text-center">
   <img src={img} className="img-fluid" alt="Loading..."/>
    </div>
   
    <div className="mt-4 col-sm-12 col-lg-6  justify-content-center text-center pb-2" >
       <h3 className="text-center">404 Page Not Found...</h3>
           </div>
   
           <div className="col-lg-12 col-sm-4 d-flex mt-3 justify-content-around">
             
          
              <Link to="/"> <button  type="btn" className="text-white bg-primary btn">
               Home
              </button></Link>
               
            
              
           </div>
        
   
    </div>
    </div>
   
          )
}

export default Error