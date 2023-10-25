
import './App.css';
import Main from './Main';
import { Route,Routes,Link } from 'react-router-dom';
import  Button from '@mui/material/Button';

import  GitHubIcon from '@mui/icons-material/GitHub';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import AboutMe from './AboutMe';
import PersonIcon from '@mui/icons-material/Person';
// import ButtonPanel from'./Try'

function App() {
  return (
    <div className="App">


        <div style={{width:'100%',height:'100%', background:"#8b4513a3" , display:'flex', justifyContent:"center",alignItems:"center", padding:"10px 0 10px" , gap:20}}>
              <Link to='/main'>
              <Button title="Project" sx={{width:'50px' , height:'50px' ,borderRadius:'25px',background:'black' }} 
              target='_blank' variant="contained"><AccountTreeIcon sx={{ width:'100%', height:'100%',fontSize:20 , color:'#784e00'}}/></Button>
              </Link>
              <Button title="Git hub" sx={{width:'50px' , height:'50px' ,borderRadius:'25px' ,background:'black' }}  href="https://github.com/DevAhmedHussien/TeleValidation" 
              target='_blank' variant="contained"><GitHubIcon sx={{ width:'100%', height:'100%',fontSize:20 , color:'#784e00'}}/></Button>
              <Link to='/WhoIam'>
              <Button title="Profile" sx={{width:'50px' , height:'50px' ,borderRadius:'25px',background:'black' }} 
              target='_blank' variant="contained"><PersonIcon sx={{ width:'100%', height:'100%',fontSize:20 , color:'#784e00'}}/></Button>
              </Link>

            </div>
            <Routes>
              <Route path='main' element = {<Main/>} />
              <Route path='WhoIam' element = {<AboutMe/>} />
            </Routes>
    </div>
  );
}

export default App;
