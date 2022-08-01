import Login from './LogIn_Register_Logout/Login';
import Register from './LogIn_Register_Logout/Register';
import {useNavigate} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import CRUD from './Crud_Operations/CRUD';


function App() {
  let navigate = useNavigate();
  let token = localStorage.getItem('token');
  if(token ===null || token ===""){
    navigate("/")
  }
  return (
    <div className="App ">
      <CRUD/>
    
    </div>
  );
}

export default App;
