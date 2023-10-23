import React, { useState } from 'react';
import backgroundPhoto from './images/main.png'
import TemporaryDrawer from './Drawer';
import axios from 'axios';

export default function Main (){
    let string = "+7(___)___-__-__"
    let stringtry = '+79821313577';
    console.log(string.length,stringtry.length)

    const russianPhoneRegex = /^(\+7|8)[ -]?\(?\d{3}\)?[ -]?\d{3}[ -]?\d{2}[ -]?\d{2}$/;

    let f = '_' || ' ' || null;

    const [input, setInput] = useState(string)
    const [correct,setCorrect] = useState(true)
    const [check,setCheck] = useState(false)
    const [state, setState] = useState({top: true});
    const [validationResult, setValidationResult] = useState(null);
    const [valid , setValid] = useState(false)

    const handleKeyPress = (newValue) => {
        if(input.length === 0){
            setInput(string)
        }
        if (newValue === 'backspace') {
        setInput(input.slice(0, -1));
        // setInput(input.replace(/^[0-9]$/g , '_'));
        setInput(string)  
        if(input.length === 0){
            setInput(string)
        }
        } else {
            const updatedString = input.replace(f, newValue);
            setInput(updatedString);
            if(input.length === 0){
                setInput(string)
            }
        }
    };
    const handleChange = (e)=>{
        setInput(e.target.value)
    }
    
    const apiKey = '3b2d112bc362f0d189685515dfbf097e';
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
                } catch (error) {
                console.error('Error validating phone number:', error);
                }
        }
        else{
            console.log("offfffffffffff" , input)
            setCorrect(false)
            setTimeout(()=>{
                setCorrect(true)
            },3000)
        }
    };
    // const Ok = ()=>{
    //     if(russianPhoneRegex.test(input) && check == true){
    //         console.log("okeeey" , input)
    //         setCorrect(true)
    //     }
    //     else{
    //         console.log("offfffffffffff" , input)
    //         setCorrect(false)
    //         setTimeout(()=>{
    //             setCorrect(true)
    //         },3000)
    //     }
        
    // }

    //     const [remainingTime, setRemainingTime] = useState(10); // Initial time in seconds
    //     const [timerIsActive, setTimerIsActive] = useState(true);
    
    //     // Function to update the timer and handle closing the microsite
    //     const updateTimer = () => {
    //     setRemainingTime((prevTime) => prevTime - 1);
    //     if (remainingTime === 0) {
    //         closeMicrosite();
    //     }
    //     };
    
    //     // Function to close the microsite
    //     const closeMicrosite = () => {
    //     // Perform actions to close the microsite (e.g., navigate to promo video)
    //     alert('Microsite is closing due to inactivity. Redirecting to promo video with a banner.');
    //     };
    
    //     // Function to reset the timer
    //     const resetTimer = () => {
    //     if (!timerIsActive) {
    //         setRemainingTime(10);
    //         setTimerIsActive(true);
    //     }
    //     };
    
    //     // Effect to update the timer every second
    //     useEffect(() => {
    //     if (timerIsActive) {
    //         const timerInterval = setInterval(updateTimer, 1000);
    //         return () => clearInterval(timerInterval);
    //     }
    //     }, [timerIsActive]);
    
    //     // Effect to add event listeners for user interaction
    //     useEffect(() => {
    //     const handleMouseActivity = () => resetTimer();
    //     const handleKeyboardActivity = () => resetTimer();
    
    //     window.addEventListener('mousemove', handleMouseActivity);
    //     window.addEventListener('keydown', handleKeyboardActivity);
    
    //     return () => {
    //         window.removeEventListener('mousemove', handleMouseActivity);
    //         window.removeEventListener('keydown', handleKeyboardActivity);
    //     };
    // }, []);

    return(
        <div className='Project' 
            style={{
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
                style={{color: correct? '#000000' :'#EA0000'}}
                onChange={handleChange}/>
                <p className='subText' >и с Вами свяжется наш менеждер для дальнейшей консультации</p>
                <div className='numFrame'>
                    <div className='rowOne'>
                        <button value='1' key='2' onChange={(e)=>{
                            console.log(e.target.key)
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
                    <div className='scalesDiv'>
                    <input type="checkbox" className='scales' value={check} onChange={(e)=>{
                        setCheck(e.target.checked)
                        console.log(check)
                    }}  />
                    </div>
                    <p className='label'>Согласие на обработку персональных данных </p>
                </div> : <p id='unCorrect'>Неверно введён номер</p>}
                
                <button className='ok' onClick={validatePhoneNumber}>Подтвердить номер</button>
            </div> }
            <div className='secondPart'>
            <div className='close' style={{background:valid?"black":'white'}}>
                <p className='closeElement' style={{color :valid?"white":'black'}}>
                    +  
                </p>
                <TemporaryDrawer state={state} setState={setState}/>   
            </div>
            </div>
        </div>
        
    )

}