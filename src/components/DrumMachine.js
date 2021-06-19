import React,{ useState } from 'react';
import Buttons from './Buttons'
import './style.css'
import Song from './song/Song'

const DrumMachine = () => {
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
        <div id="drum-machine" className='d-flex'>
            <div className='row h-75 border d-flex justify-content-center justify-self-center align-self-center'>
                <div className='drum-button col-12 col-md-6 p-0 m-0' >
                    <div className='container h-100 p-0'>
                        <div className='row h-100 w-100 m-0 p-2'>
                            <div className="col-4 p-0 " >
                                <Buttons interruptor={interruptor} sonido={Song.Q} name={'Q'} onName={handleName} volumen={volumen}/>
                            </div>
                            <div className="col-4 p-0">
                                <Buttons interruptor={interruptor} sonido={Song.W} name={'W'} onName={handleName} volumen={volumen}/> 
                            </div>
                            <div className="col-4 p-0">
                                <Buttons interruptor={interruptor} sonido={Song.E} name={'E'} onName={handleName} volumen={volumen}/>  
                            </div>
                            <div className="col-4 p-0">
                                <Buttons interruptor={interruptor} sonido={Song.A} name={'A'} onName={handleName} volumen={volumen}/>
                            </div>
                            <div className="col-4 p-0">
                                <Buttons interruptor={interruptor} sonido={Song.S} name={'S'} onName={handleName} volumen={volumen}/> 
                            </div>
                            <div className="col-4 p-0">
                                <Buttons interruptor={interruptor} sonido={Song.D} name={'D'} onName={handleName} volumen={volumen}/> 
                            </div>
                            <div className="col-4 p-0">
                                <Buttons interruptor={interruptor} sonido={Song.Z} name={'Z'} onName={handleName} volumen={volumen}/>
                            </div>
                            <div className="col-4 p-0">
                                <Buttons interruptor={interruptor} sonido={Song.X} name={'X'} onName={handleName} volumen={volumen}/> 
                            </div>
                            <div className="col-4 m-0 p-0">
                                <Buttons interruptor={interruptor} sonido={Song.C} name={'C'} onName={handleName} volumen={volumen}/>
                            </div>
                        </div>
                    </div>
                    
                </div>

                <div className='col-12 col-md-6 d-flex flex-column align-self-center' >
                    <div className={`my-3 text-center border ${interruptor ? 'Power' : 'Power2'}`} onClick={()=>setInterruptor(!interruptor)} >
                        <div className={interruptor ? 'interruptor' : 'interruptorOff'}><p>{interruptor ? 'ON' : 'OFF'}</p></div>
                    </div>
                    
                    <div id="display" className='bg-dark align-self-center rounded text-center text-white font-weight-bold'>
                        {/*Condición ternaria que decide si se muestra name o volumen.*/
                        nameVolumen === name ? name : `Volumen ${volumen}`}
                    </div> 

                    <div className={`my-3 text-center border ${bank ? 'Bank' : 'Bank2'}`} onClick={()=>setBank(!bank)}>
                        <div className={bank ? 'bank' : 'bankOff'}><p>BANK</p></div>
                    </div>  
                    <div className='volumen'>
                        <label for="volumen"></label> <br/>
                            <input type="range" min="0" max="1" step="0.1" value={volumen} onChange={handleVolumen}></input>
                    </div>
                </div>
            </div>   
        </div>
    )
}
export default DrumMachine;