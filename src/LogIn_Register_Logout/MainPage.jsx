import React from 'react';
import { Link } from 'react-router-dom';
import img from '../Assets/img.PNG';
import './main.css'


const MainPage = () => {
  return (
    <div className=" container mt-3 d-flex justify-content-center align-item-center">
      <div className="row align" >
        {/* Navigation bar here */}


        {/* section                   1 */}
        <div className=" col-lg-6 col-sm-12 ">

      
          <h2>
               Artificial Intelligence Driving Results For The Travel Industry.
             </h2>
             <h3>Welcome back! Please log into your account.</h3>
             <div className="search">
               <input type="search" placeholder="Search Services..." />
             </div>
             <div className="btn-group">
               <Link to="/about-us">
                 <button >About Us</button>
               </Link>
               <Link to="/login">
                 <button >Login</button>

               </Link>
             </div>
       
        </div>

{/* Image section */}
        <div className="mt-4 col-lg-6 col-sm-12 pb-2 illustratn" style={{backgroundImage:`url(${img})`}}>
        {/* <img src={img} className="img-fluid" alt="Loading..." /> */}

      </div>
      </div>
    </div>
  )
}

export default MainPage


// <div className="landing">
//         <div className=" default-container flex a-j-center" style={{ fontSize: "40px",fontWeight: "800",
//     marginBottom: "1rem"}}>
//           <div className="content flex-half">
//             <h2>
//               Artificial Intelligence Driving Results For The Travel Industry.
//             </h2>
//             <h3>Welcome back! Please log into your account.</h3>
//             <div className="search">
//               <input type="search" placeholder="Search Services..." />
//             </div>
//             <div className="btn-group">
//               <Link to="/about-us">
//                 <button >About Us</button>
//               </Link>
//               <Link to="/login">
//                 <button >Login</button>

//               </Link>
//             </div>
//           </div>
//           <div className="illustration flex-one">
//             <img width="100%" height="100%" src={img} alt="Loading..." />
//           </div>
//         </div>
//       </div>