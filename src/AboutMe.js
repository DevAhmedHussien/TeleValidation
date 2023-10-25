import DownloadIcon from '@mui/icons-material/Download';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import  Button from '@mui/material/Button';
import aa from './images/kk.png'
import cv from './images/ahmedresume .pdf'
export default function AboutMe(){
    return(
        <div className='Profile'>
        <h1>Ahmed Hussien</h1>
        <p>Junior Frontend Developer </p>
        <img  className='img' src={aa} alt='' />
        <div className='buttonProfile'>
        <Button title="telegram" sx={{width:'50px' , height:'50px' ,borderRadius:'25px' ,background:'black' }}  
            href="https://t.me/mango12198" 
            target='_blank' variant="contained"><TelegramIcon sx={{ width:'100%', height:'100%',fontSize:20 , color:'#784e00'}}/></Button>
        <Button title="Download Cv" sx={{width:'50px' , height:'50px' ,borderRadius:'25px' ,background:'black' }} 
            href={cv} 
            target='_blank' variant="contained"><DownloadIcon sx={{ width:'100%', height:'100%',fontSize:20 , color:'#784e00'}}/></Button>
        <Button title="vk" sx={{width:'50px' , height:'50px' ,borderRadius:'25px' ,background:'black' }}  
            href="https://vk.com/hussien2021" 
            target='_blank' variant="contained"><InstagramIcon sx={{ width:'100%', height:'100%',fontSize:20 , color:'#784e00'}}/></Button>
        </div>
        
      </div>
    )
}