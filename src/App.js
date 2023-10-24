
import './App.css';
import Main from './Main';
import { Route,Routes,Link } from 'react-router-dom';
import  Button from '@mui/material/Button';
// import ButtonPanel from'./Try'

function App() {
  return (
    <div className="App">
     
       <div style={{width:'100%',height:'100%', background:"#8b4513a3" , display:'flex', justifyContent:"center",alignItems:"center", padding:"10px 0 10px" , gap:20}}>
              <Link to='/main'>
              <Button target='_blank' variant="contained"> Project</Button>
              </Link>
              <Button href="https://github.com/DevAhmedHussien/TeleValidation" target='_blank' variant="contained">Git Hub</Button>
            </div>
            <Routes>
              <Route path='main' element = {<Main/>} />
            </Routes>
    </div>
  );
}

export default App;
