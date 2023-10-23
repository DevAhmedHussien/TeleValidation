    import * as React from 'react';
    
    import Drawer from '@mui/material/Drawer';
    import Button from '@mui/material/Button';

    import imageee from './images/Frame 7.png'
    export default function TemporaryDrawer({ state , setState}) {
    let startVerf = ()=>{
        setState(false)
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
                <video style={{height:'100vh',background:"white", opacity :'0.9', width:'100%'}} id="background-video" loop autoPlay muted>
                    <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                </video>
                <img style={{
                    position: 'absolute', 
                    width: '251px',
                    right: "10px",
                    bottom: "53px",
                    height:'357px',
                    padding:"30px 10px 10px 10px",
                    gap: "20px"
            }} src={imageee} alt=""
            onClick={startVerf}/>
            </Drawer>
            </React.Fragment>
        ))}
        </div>
    );
    }
