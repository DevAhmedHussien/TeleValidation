import React, { useState,useEffect} from 'react';
import backgroundPhoto from './images/main.png'
import TemporaryDrawer from './Drawer';
import axios from 'axios';

export default function Main (){

    let string = "+7(___)___-__-__"
    const apiKey = '3b2d112bc362f0d189685515dfbf097e';
    const russianPhoneRegex = /^(\+7|8)[ -]?\(?\d{3}\)?[ -]?\d{3}[ -]?\d{2}[ -]?\d{2}$/;
    let f = '_' ||  null ;

    const [input, setInput] = useState(string)//phone  input 
    const [correct,setCorrect] = useState(true) // validatation of correction number or not 
    const [check,setCheck] = useState(false)
    const [state, setState] = useState({top: true});// bannner
    const [validationResult, setValidationResult] = useState(null);// axios validation 
    const [valid , setValid] = useState(false)//validatncya number 
    const [countdown, setCountdown] = useState(10); // Initial countdown value in seconds

    const handleKeyPress = (newValue) => {
        if(input.length === 0){
            setInput(string)
        }
        if (newValue === 'backspace') {
        // setInput(input.slice(0, -1));
        setInput(string)
        if(input.length === 0){
            setInput(string)
        }
        } else {
            const updatedString = input.replace(f, newValue);
            setInput(updatedString);
            if(input.length < 16){
                setInput(input + newValue);
            }
            if(input.length === 0 ){
                setInput(string)
            }
        }
    };

    const handleChange = (e)=>{ 
        setInput(e.target.value)
    }

    const validatePhoneNumber = async () => {
        if(russianPhoneRegex.test(input) && check === true){
            console.log("okeeey" , input)
            setCorrect(true)
            try {
                const response = await axios.get(`http://apilayer.net/api/validate?access_key=${apiKey}&number=${input}`);
                console.log(response.data)
                setValidationResult(response.data);
                setValid(response.data.valid)
                console.log('validate', validationResult)
                // setTimeout(() => {
                //     setValid(false)
                // }, 6000);
                } catch (error) {
                console.error('Error validating phone number:', error);
                }
        }
        else{
            console.log("offfffffffffff" , input)
            setCorrect(false)
            setTimeout(()=>{
                setCorrect(true)
                setInput(string)
            },3000)
        }
    };

    useEffect(()=>{
            const handleKeyPress=(event) =>{
                if (event.key >= '0' && event.key <= '9') {
                    const updatedString = input.replace(f, event.key);
                    setInput(updatedString);
                    if(input.length < 16){
                        // setInput("+7")
                        setInput(input + event.key);
                    }
            }else if (event.key === 'Backspace') {
                        setInput(input.slice(0, -1));
                        if(input.length === 0){
                            setInput(string)
                        }
            } 
            // else if (event.key === 'Enter'){
            //             setCheck(true)
            //             }
            }
            document.addEventListener("keydown", handleKeyPress );
            return () => {
                    document.removeEventListener('keydown', handleKeyPress);
                    };   
    },[input])

    useEffect(()=>{
    let inactivityTimer;
    let countdownTimer;
    const resetTimers = () => {
        clearTimeout(inactivityTimer);
        clearInterval(countdownTimer);
        setCountdown(10)
        inactivityTimer = setTimeout(() =>{
            setState({top:true});
        }, 10000); // 10 seconds
        countdownTimer = setInterval(() => {
            // if(state.top === true){
                // setCountdown(10)
                setCountdown((prevCountdown) => prevCountdown - 1);
                
            // }
        }, 1000); // Update the countdown every second
    };

    // Initialize the timers
    resetTimers();

    // Add event listeners to reset the timers when there's user activity
    window.addEventListener('mousemove', resetTimers);
    
    window.addEventListener('keydown', resetTimers);

    // Clean up event listeners and timers when the component unmounts
    return () => {
        window.removeEventListener('mousemove', resetTimers);
        window.removeEventListener('keydown', resetTimers);
        clearTimeout(inactivityTimer);
        clearInterval(countdownTimer);
    };
    }, []);


    return(
        <>
        {/* <div className='count'> {countdown}</div> */}
        {!state.top 
            ?
        <div className='Project' 
        style={{
        margin:'0 auto',
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        backgroundImage: `url(${backgroundPhoto})`,
        backgroundSize: "contain",
        backgroundRepeat:"no-repeat",
        width: '1280px',
        height: "720px",
        top:"-170px"
        }}>
            { valid ? 
            <div className='box-logic'>
                <div className='trueAccess'>
                    <h1 className='z'>ЗАЯВКА ПРИНЯТА</h1>
                    <p className='zp'>Держите телефон под рукой. Скоро c Вами свяжется наш менеджер. </p>
                </div>
            </div>
        :  <div className='box-logic'>
            <h1 className='Header'> Введите ваш номермобильного телефона</h1>
            <input type='tel' value={input} placeholder={string} 
            readOnly
            // onClick={()=>{
            //     setInput('+7_')
            // }} 
            style={{color: correct? '#000000' :'#EA0000'}}
            onChange={handleChange}/>
            <p className='subText' >и с Вами свяжется наш менеждер для дальнейшей консультации</p>
            <div className='numFrame'>
                <div className='rowOne'>
                    <button value='1' key='2' onChange={(e)=>{
                        // console.log(e.target.key)
                    // setInput(e.target.value)
                }
                }
                    onClick={(e) => handleKeyPress(e.target.value)}
                    >1</button>
                    <button value='2' onClick={(e) => handleKeyPress(e.target.value)} >2</button>
                    <button value='3' onClick={(e) => handleKeyPress(e.target.value)}>3</button>
                </div>
                <div className='rowTwo'>
                    <button value='4'   onClick={(e) => handleKeyPress(e.target.value)} >4</button>
                    <button value='5'   onClick={(e) => handleKeyPress(e.target.value)} >5</button>
                    <button value='6'   onClick={(e) => handleKeyPress(e.target.value)} >6</button>
                </div>
                <div className='rowThree'>
                    <button value='7'   onClick={(e) => handleKeyPress(e.target.value)} >7</button>
                    <button value='8'   onClick={(e) => handleKeyPress(e.target.value)} >8</button>
                    <button value='9'  onClick={(e) => handleKeyPress(e.target.value)} >9</button>
                </div>
                <div className='rowFour'>
                    <button className='delete' value='backspace' 
                    onClick={(e) => handleKeyPress(e.target.value)} 
                    >Стереть</button>
                    <button value='0' onClick={(e) => handleKeyPress(e.target.value)} >0</button>
                </div>
                {/* <p>{valid? 'ok' :'no valid'}</p> */}
            </div>
            {correct?<div className='selectedDiv'>
                <div className='scalesDiv'   
                >
                <input type="checkbox" className='scales' value={check}
                onChange={(e)=>{
                    setCheck(e.target.checked)
                    // console.log(check)
                }}  />
                </div>
                <p className='label'>Согласие на обработку персональных данных </p>
            </div> : <p id='unCorrect'>Неверно введён номер</p>}
            
            <button className='ok'   onClick={validatePhoneNumber} //ref={confirmButtonRef}
            >Подтвердить номер</button>
        </div> }
        <div><div className='count'> {countdown}</div></div>
        <div className='secondPart'>
        <div className='close' style={{background:valid?"black":'white'}}>
            <p className='closeElement' style={{color :valid?"white":'black'}}>
                +  
            </p>
            <TemporaryDrawer state={state} setState={setState} setCountdown={setCountdown}/>   
        </div>
        </div>
    </div>  
            : <TemporaryDrawer state={state} setState={setState}  setCountdown={setCountdown}/>   
    }
        
    </>
    )

}