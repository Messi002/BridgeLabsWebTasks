import { useState, useEffect } from "react";
import img from '../Assets/img.PNG';
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
    const [formData, setFormData] = useState({
      firstName: '',
      last_name: '',
      email: '',
      contact: '',
      password: '',
      avatar: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
    });

    const {
      firstName,
      last_name,
      email,
      contact,
      password,
      avatar,
    } = formData;

    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
      console.log(e.target.value);

    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      // if (
      //   email === '' ||
      //   password === '' ||
      //   first_name === '' ||
      //   last_name === '' ) {
      //     toast.error("Please fill out all fiedls!", {
      //       position: "bottom-right",
      //     });
      //             return;
      // }  

      // if (first_name.length < 2 || last_name.length < 2) {
      //   toast.error("Name length too short!", {
      //     position: "bottom-right",
      //   });
      //   return;
      // }
      // if (password.length < 6) {
      //   toast.error("Password: enter atleast 6 characters.", {
      //     position: "bottom-right",
      //   });
      //   return;
      // }
      setIsShowing(true);
      await fetch("https://simplor.herokuapp.com/api/user/register",{
      method:"POST",
      headers:{
        Accept: "application/json",
        "Content-Type":"application/json"
      },
      body: JSON.stringify({ email,
        firstName,
        last_name,
        contact,
        password,
        avatar,})
    }).then((res)=>{
      res.json().then((data)=>{
        if(data.detail){
          toast.error(data.detail,{
            position: "bottom-right",

          })
        }
        console.log(data);
        toast.success("Registration successful",{
          position: "bottom-right",

        })

      }).catch((err)=>{
        console.log('res.json error',err);
        setIsShowing(false);
      });
      setIsShowing(false);

    }).catch((error)=>{
      console.log(error);
      setIsShowing(false);
    })

    // if(response.status === 200){
    //   let result = await response.json();
    //   setIsShowing(true);

    //   console.log(result);
    //   localStorage.setItem("token",result.access)
    //   navigate("/operations")
    // }else{
    //   setIsShowing(false);
    // }

      





    }



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
            <label for="firstName" className="form-label">First Name</label>
            <input type="text" className="form-control" name="firstName" onChange={handleChange} value={firstName}/>
            {/* <input type="text" class="form-control" name="inputFName" onChanged={handleChange} value={first_name} /> */}
        </div>

        <div className="col-lg-12 col-sm-4 text-start">
            <label for="inputLName" className="form-label">Last Name</label>
            <input type="text" class="form-control" name="inputLName" required onChanged={handleChange} value={last_name}/>
        </div>

        <div className="col-lg-12 col-sm-4 text-start">
            <label for="phoneNum" className="form-label">Phone</label>
            <input type="text" class="form-control" name="phoneNum" required onChanged={handleChange} value={contact}/>
        </div>

        <div className="col-lg-12 col-sm-4 text-start">
            <label for="email" className="form-label">Email</label>
            <input type="email" class="form-control" name="email" required onChanged={handleChange} value={email}/>
        </div>

        <div className="col-lg-12 col-sm-4 text-start">
            <label for="password" className="form-label">Password</label>
            <input type="password" class="form-control" name="password" required onChanged={handleChange} value={password}/>
        </div>

        <div className="col-lg-12 col-sm-4 d-flex mt-3 justify-content-around">
          
        <button  className="text-white bg-primary btn" onClick={()=> navigate("/")}>
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