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
      avatar: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
    });

    const {
      firstName,
      lastName,
      email,
      contact,
      password,
      avatar,
    } = Data;

    const handleChange = (e) => {
      setFormData({ ...Data, [e.target.name]: e.target.value });
      console.log(e.target.value);

    };

    const handleSubmit =   async ()=>{
      setIsShowing(true);
  
      const config={
        headers:{
          "Content-Type":"multipart/form-data",
        }
      };
  
      try {
        const formData = new FormData();
        formData.append("firstName", Data.firstName);
        formData.append("lastName", Data.lastName);
        formData.append("contact", Data.contact);
        formData.append("email", Data.email);
        formData.append("password", Data.password);
        formData.append("avatar", Data.avatar);
        const res = await axios.post("https://simplor.herokuapp.com/api/user/register",formData,config);
        console.log(res);
        if(res.status ===200){
          toast.success("registration successful",{position:"bottom-right"})
          return;
        }
        navigate(()=> ("/login"));
      } catch (err) {
        toast.error(err,{osition:"bottom-right" });
        console.log(err);
        setIsShowing(false);
    }
  }

    // const sendRequest = async () =>{
    //   setIsShowing(true);
    //   const res = await axios.post("https://simplor.herokuapp.com/api/user/register",{
    //     firstName: formData.firstName,
    //   lastName: formData.lastName,
    //   email: formData.email,
    //   contact: formData.contact,
    //   password: formData.password,
    //   avatar: formData.avatar,
    //   headers:{
    //       "Content-Type":"application/json",
    //       "Accept":"*/*"
    //     }
    //   }).catch((err)=> console.log(err));
    //   setIsShowing(false);

    //   const data = await res.data;
    //   return data;

    // }

    // const handleSubmit=(e)=>{
    //   e.preventDefault();
    //   console.log(formData);
    //   sendRequest().then(()=> navigate("/login"))
    // }




    // const handleSubmit = async (e) => {
    //   const form = e.currentTarget;
    //   if (form.checkValidity() === false) {
    //     e.preventDefault();
    //     e.stopPropagation();
    //   } else {
    //     e.preventDefault();
  
    //     setIsShowing(true);
    //     fetch("https://simplor.herokuapp.com/api/user/register", {
    //       method: "POST",
    //       headers: { "Content-Type": "application/json" },
    //       body: JSON.stringify({ email,
    //             firstName,
    //              lastName,
    //             contact,
    //             password,
    //             avatar,}),
    //     })
    //       .then((response) => {
    //         if (response.status === 200) {
    //           toast.success("Data Added Successfuly", {
    //             position: "bottom-right",
    //           });
    //         } else {
    //           toast.error(response.statusText + "(" + response.status + ")", {
    //             position: "bottom-right",
    //           });
    //         }
  
            // setValidated(false);
          //   setIsShowing(false);
          // })
          // .catch((err) => {
          //   console.log(err);
          //   setIsShowing(false);
          // });
      // }
      // setValidated(true);
    // };
  
  return (
    <div className=" container mt-3 d-flex justify-content-center align-items-center" >
 <div className="row p-3" style={{border:"0.2px solid grey"}}>

 <div className=" col-sm-12 col-lg-6 d-flex justify-content-center text-center">
<img src={img} className="img-fluid" alt="Loading..."/>
 </div>

 <div className="mt-4 col-sm-12 col-lg-6  justify-content-center text-center pb-2" >
    <h3 className="text-start">Registration</h3>

    {/* form begins here */}
 <form class="row" onSubmit={handleSubmit} >
        <div className="col-lg-12 col-sm-4 text-start" >
            <label htmlFor="firstName" className="form-label">First Name</label>
            <input type="text" className="form-control" name="firstName" required onChange={handleChange} value={firstName}/>
        </div>

        <div className="col-lg-12 col-sm-4 text-start">
            <label htmlFor="lastName" className="form-label">Last Name</label>
            <input type="text" className="form-control" name="lastName" required onChange={handleChange} value={lastName}/>
        </div>

        <div className="col-lg-12 col-sm-4 text-start">
            <label htmlFor="contact" className="form-label">Phone</label>
            <input type="text" className="form-control" name="contact" required onChange={handleChange} value={contact}/>
        </div>

        <div className="col-lg-12 col-sm-4 text-start">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" name="email" required onChange={handleChange} value={email}/>
        </div>

        <div className="col-lg-12 col-sm-4 text-start">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" name="password" required onChange={handleChange} value={password}/>
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