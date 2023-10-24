import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import imageee from './images/Frame 7.png';
import { useState,useRef , useEffect } from 'react';

export default function TemporaryDrawer({ state , setState,  setCountdown  }) {
  const bannerRef = useRef(null);
  const videoRef = useRef(null);
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
        // Установите обработчик события, чтобы показать баннер через 5 секунд
        const timer = setTimeout(() => {
          setShowBanner(true);
        }, 5000);
    
        return () => {
          clearTimeout(timer);
        };
    }, []);
  
  const startVerf = ()=>{
    setState({top:false})
    handleCount()
  }
  const handleCount = ()=>{
    setCountdown(10)
  }
        
  const toggleDrawer = (anchor, open) => (event) => {
      if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
      }
      setState({ ...state, [anchor]: open });
  };
    
    return (
        <div>
        {['top'].map((anchor) => (
            <React.Fragment key={anchor}>
            <Button onClick={toggleDrawer(anchor, true)}>{}</Button>
            <Drawer
            sx={{height:'50vh',background:"white"}}
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
            >
              <video ref={videoRef} style={{margin:'0 auto' , background:"white", height:'721px', width:'1280px' // height:'100%',//width:'100vw'
              }}
                id="background-video" loop autoPlay muted>
                <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
              </video>
                {showBanner && (
                    <div ref={bannerRef} className="banner">
                    <img style={{
                        
                          display: 'flex',
                        position: 'absolute', 
                        width: '251px',
                        right: "0",
                        bottom: "53px",
                        height:'357px',
                        padding:"30px 10px 10px 10px",
                        gap: "20px"
                          }} 
                          src={imageee} alt="" onClick={startVerf}/>
                    </div>
      )}
              </Drawer>
            </React.Fragment>
        ))}
        </div>
    );
    }
