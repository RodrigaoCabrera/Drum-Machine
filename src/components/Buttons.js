import React,{ useState, Fragment } from 'react';
import './style2.css'
import sonidos from './song/audio.mp3'

const Buttons = ({ name, sonido, onName, interruptor }) => {
    
    // pass the event to the handler
    const handlePlay = (audio) => {
        onName(audio.id);
        console.log(audio.querySelector('audio'))
        if(interruptor){
            // get all audio elements and stop them all
            const allAudios = document.querySelectorAll('audio');
            allAudios.forEach(audioEl => {
                audioEl.pause()
                audioEl.currentTime=0;
                
            })

            // get the clicked audio element and play
            audio.querySelector('audio').play();

            // get all audio elements and add volumen
            const temas = document.querySelectorAll('audio');
            temas.forEach(tema => {
                tema.volumen = 0.1;
            })
        }

        else{
            const allAudios = document.querySelectorAll('audio');
        allAudios.forEach(audioEl => {
            audioEl.pause()
            audioEl.currentTime=0;
            
        })
        }
        
    }
    
    window.onkeydown = (e) =>{
        
        const allAudios = document.querySelectorAll('audio');
        allAudios.forEach(audioEl => {
            audioEl.pause()
            audioEl.currentTime=0;
            
        })
        switch (e.key) {
            case 'q':
                const audioQ = document.querySelector('.Q');
                handlePlay(audioQ)
                break;
            case 'w':
                const audioW = document.querySelector('.W');
                handlePlay(audioW)
                break;
            case 'e':
                const audioE = document.querySelector('.E');
                handlePlay(audioE)
                break;
            case 'a':
                const audioA = document.querySelector('.A');
                handlePlay(audioA)
                break;
            case 's':
                const audioS = document.querySelector('.S');
                handlePlay(audioS)
                break;
            case 'd':
                const audioD = document.querySelector('.D');
                handlePlay(audioD)               
                break;
            case 'z':
                const audioZ = document.querySelector('.Z');
                handlePlay(audioZ)
                break;
            case 'x':
                const audioX = document.querySelector('.X');
                handlePlay(audioX)
                break;
            case 'c':
                const audioC = document.querySelector('.C');
                handlePlay(audioC)
                break;
        
            default:
                break;
        }
    }
    


    return (
        <Fragment >
            <button 
                id={name}
                className={`drum-pad w-100 h-100 btn-lg ${name}`} 
                onClick={(e) => handlePlay(e.target)} 
            >{name}
                <audio className={`clip ${name}`} src={sonido} id={name} />
            </button>
        </Fragment>
    )
}
export default Buttons