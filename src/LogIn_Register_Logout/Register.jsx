import { useState, useEffect } from "react";
import img from '../Assets/img.PNG';
import {Spinner} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Register = ({token}) => {
    let navigate =useNavigate();
    useEffect(() => {
      if (token && token !== '') {
        window.location.pathname = '/';
      }
    }, [token]);
    const [isShowing, setIsShowing] = useState(false);
    const [validated, setValidated] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState({
      first_name: '',
      last_name: '',
      email: '',
      contact: '',
      password: '',
      avatar: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
    });

    const {
      first_name,
      last_name,
      email,
      contact,
      password,
      avatar,
    } = formData;

    const onChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
      setMsg('');
    };

    const handleSubmit = async (e) => {
        const form = e.currentTarget;
        if(form.checkValidity()=== false){
            e.preventDefault();
            e.stopPropagation();
        }else{
            e.preventDefault();
            setIsShowing(true);
            fetch("https://simplor.herokuapp.com/api/user/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(user),
              })
                .then((response) => {
                  if (response.status === 200) {
                    toast.success("Successfully registered. Please login.", {
                      position: "bottom-right",
                    });
                  } else {
                    toast.error(response.statusText + "(" + response.status + ")", {
                      position: "bottom-right",
                    });
                  }
        
                  setValidated(false);
                  setIsShowing(false);
                })
                .catch((err) => {
                  console.log(err);
                  setIsShowing(false);
                });

        }

        setValidated(true);
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
 <form class="row" onSubmit={handleSubmit}  method="POST" validated={validated} noValidate>
        <div className="col-lg-12 col-sm-4 text-start" >
            <label for="inputFName" className="form-label">First Name</label>
            <input type="text" class="form-control" name="inputFName" required onChanged={onChange} value={first_name}/>
        </div>

        <div className="col-lg-12 col-sm-4 text-start">
            <label for="inputLName" className="form-label">Last Name</label>
            <input type="text" class="form-control" name="inputLName" required onChanged={onChange} value={last_name}/>
        </div>

        <div className="col-lg-12 col-sm-4 text-start">
            <label for="phoneNum" className="form-label">Phone</label>
            <input type="text" class="form-control" name="phoneNum" required onChanged={onChange} value={contact}/>
        </div>

        <div className="col-lg-12 col-sm-4 text-start">
            <label for="email" className="form-label">Email</label>
            <input type="email" class="form-control" name="email" required onChanged={onChange} value={email}/>
        </div>

        <div className="col-lg-12 col-sm-4 text-start">
            <label for="password" className="form-label">Password</label>
            <input type="password" class="form-control" name="password" required onChanged={onChange} value={password}/>
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