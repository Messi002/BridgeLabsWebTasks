import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import img from "../Assets/img.PNG";
import { Spinner } from "react-bootstrap";
import { GoogleLogin } from "react-google-login";
const client_id = process.env.REACT_APP_CLIENT_ID;

const Login = ({token}) => {
  let navigate = useNavigate;
  const [isShowing, setIsShowing] = useState(false);
  const [msg, setMsg] = useState("");
  useEffect(() => {
    if (token && token !== "") {
      window.location.pathname = "/";
    }
  }, [token]);

  const [loginData, SetLoginData]=useState({
    email:"",
    password:"",
  });
  const {email,password}=loginData;
  const onChange =(e) =>{
    SetLoginData({...loginData,[e.target.name]:e.target.value });
    console.log(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsShowing(true);

    const response = await fetch("https://simplor.herokuapp.com/api/user/login",{
      method:"POST",
      headers:{
        Accept: "application/json",
        "Content-Type":"application/json"
      },
      body: JSON.stringify({email,password})
    })

    if(response.status === 200){
      let result = await response.json();
      console.log(result);
      localStorage.setItem("token",result.access)
      navigate("/operations")
    }else{
      if (
        email === '' ||
        password === '' ) {
          setMsg("Please fill out all fiedls!");

                  return;
      }  
      setMsg("Error");

      setIsShowing(false);
    }

  };


  //google auth
  const onSuccess = (res) => {
    console.log(`[LOGIN SUCCESSFUL], current User: ${res}`);
    fetch("https://www.googleapis.com/auth/userinfo.profile", {
      mode: "no-cors",
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization:
          "Bearer ya29.A0ARrdaM9C0Q2nVMrrRB4I-GKTE7aHOPW34K7ij8vybr4Alak7y31-PnEJamN-GDapwHd1cTUA6sXBfVyLL_FVSdLPvQCFrj8pWqmFLr97wwqYsA2ZMo-ktd-4KMRPwHKSBDGQGTSV1NUiwX3Zs2cJ_L9cEUas",
      },
    })
      .then((response) => {
        console.log(response.json());
        response.json().then((data) => {
          console.log(data);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onFail = (res) => {
    console.log(`[Failed to login], ${res}`);
  };


  return (
    <div className=" container mt-3 d-flex justify-content-center align-items-center">
      <div className="row p-3" style={{ border: "0.2px solid grey" }}>
        <div className=" col-sm-12 col-lg-6 d-flex justify-content-center text-center">
          <img src={img} className="img-fluid" alt="Loading..." />
        </div>

        <div className="mt-4 col-sm-12 col-lg-6  justify-content-center text-center pb-2">
          <h3 className="text-start">LogIn</h3>

          <div>
            <GoogleLogin
              clientId={client_id}
              buttonText="Login With Google"
              cookiePolicy="single_host_origin"
              style={{ marginTop: "10px", width: "100%" }}
              onSuccess={onSuccess}
              onFailure={onFail}
            />
          </div>
          <div className="my-3">
            <h3
              style={{ fontWeight: "600", }}
              className="text-center"
            >
              OR
            </h3>
          </div>

          <form class="row" noValidate onSubmit={handleSubmit} method="POST">
          {msg && <h4 className="text-danger">{msg}</h4>}

            <div className="col-lg-12 col-sm-4 text-start">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input type="email" className="form-control" name="email" onChange={onChange} value={email}/>
            </div>

            <div className="col-lg-12 col-sm-4 text-start">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input type="password" className="form-control" name="password" onChange={onChange} value={password}/>
            </div>

            <div className="col-lg-12 col-sm-4 d-flex mt-3 justify-content-around">
              {/* <button type="btn" className="text-white bg-primary btn" onClick={()=> navigate("/register")}>
            Login
           </button> */}
              <Link to="/register">
                {" "}
                <button type="btn" className="text-white bg-primary btn">
                  Register
                </button>
              </Link>

              {isShowing ? (
                <button
                  type="submit"
                  disabled
                  className="text-white bg-primary btn"
                >
                  <Spinner
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                  />
                  Loading...
                </button>
              ) : (
                <button type="submit" className="text-white bg-primary btn">
                  LogIn
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
