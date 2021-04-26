import audio from './audio.mp3';
import audio2 from './audio2.mp3';
import audio3 from './audio3.mp3';
import audio4 from './audio4.mp3';
import audio5 from './audio5.mp3';
import audio6 from './audio6.mp3';
import audio7 from './audio7.mp3';
import audio8 from './audio8.mp3';
import audio9 from './audio9.mp3';
import { useState } from 'react';
import Buttons from './Buttons'
import './style.css';
import './style2.css';

export default function DrumMachine(){
   const [name, setName] = useState('');
   const [volumen, setVolumen] = useState('');
   const [nameVolumen, setNameVolumen] = useState('');
   const [interruptor, setInterruptor] = useState(true);
   const [bank, setBank] = useState(true);
   /*Actualizar state name para imprimirlo en #display y... 
   actualizar state nameVolumen para decidir que state se muestra en #display 
   name o volumen*/
    function handleName (texto){
        setName(texto)
        setNameVolumen(texto)
    }
    /*Actualizar volumen para mostrarlo en #display cuando corresponda*/
    const handleVolumen = (e)=>{
        setVolumen(e.target.value)
        setNameVolumen(e.target.value)
        
    }
    
    return(
        <div id="drum-machine">
            <div className='drum-button' >
            <Buttons interruptor={interruptor} sonido={audio} name={'Q'} onName={handleName} volumen={volumen}/>
                <Buttons interruptor={interruptor} sonido={audio2} name={'W'}onName={handleName} volumen={volumen}/> 
                <Buttons interruptor={interruptor} sonido={audio3} name={'E'}onName={handleName} volumen={volumen}/>  
                <Buttons interruptor={interruptor} sonido={audio4} name={'A'}onName={handleName} volumen={volumen}/>
                <Buttons interruptor={interruptor} sonido={audio5} name={'S'}onName={handleName} volumen={volumen}/> 
                <Buttons interruptor={interruptor} sonido={audio6} name={'D'}onName={handleName} volumen={volumen}/> 
                <Buttons interruptor={interruptor} sonido={audio7} name={'Z'}onName={handleName} volumen={volumen}/>
                <Buttons interruptor={interruptor} sonido={audio8} name={'X'}onName={handleName} volumen={volumen}/> 
                <Buttons interruptor={interruptor} sonido={audio9} name={'C'}onName={handleName} volumen={volumen}/>
            </div>
            <div className='caja2' >
                <div className={/*Condición ternaria para cambiar className y darle
                diferentes estilos.*/
                    interruptor ? 'Power' : 'Power2'} onClick={()=>setInterruptor(!interruptor)}>
                    <div className={interruptor ? 'interruptor' : 'interruptorOff'}><p>{interruptor ? 'On' : 'Off'}</p></div>
                </div>
                
                <div id="display" >
                    <p>{/*Condición ternaria que decide si se muestra name o volumen.*/
                    nameVolumen === name ? name : `Volumen ${volumen}`}</p>
                </div> 
                <div className={/*Condición ternaria para cambiar className y darle
                diferentes estilos.*/
                    bank ? 'Bank' : 'Bank2'} onClick={()=>setBank(!bank)}>
                    <div className={bank ? 'bank' : 'bankOff'}><p>Bank</p></div>
                </div>  
                <div className='volumen'>
                    <label for="volumen"></label> <br/>
                        <input type="range" min="0" max="1" step="0.1" value={volumen} onChange={handleVolumen}></input>
                </div>
            </div>   
        </div>
    )
}