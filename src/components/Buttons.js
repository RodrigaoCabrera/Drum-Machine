import React,{ Fragment } from 'react';
import './style2.css'
import { useState } from 'react'

export default function Buttons({ name, sonido, onName, volumen, interruptor }){
   
    // pass the event to the handler
    const handlePlay = e =>{
        if(interruptor){
        // get all audio elements and stop them all
        const allAudios = document.querySelectorAll('audio');
        allAudios.forEach(audioEl => {
            audioEl.pause()
            audioEl.currentTime=0;
            
        })

        // get the clicked audio element and play
        const thisAudio = e.target.querySelector('audio');
        thisAudio.play()

        // get all audio elements and add volumen
        const temas = document.querySelectorAll('audio');
        temas.forEach(tema => {
            tema.volumen = 0.1;
        })
        
        
        onName(e.target.id)}
        else{
            const allAudios = document.querySelectorAll('audio');
        allAudios.forEach(audioEl => {
            audioEl.pause()
            audioEl.currentTime=0;
            
            console.log(audioEl.volumen)
        })
        }
        
    }
    
    const handlePress = (e) =>{
        const allAudios = document.querySelectorAll('audio');
        allAudios.forEach(audioEl => {
            audioEl.pause()
            audioEl.currentTime=0;
            
        })
        switch (e.key) {
            case 'q':
                const audio = document.getElementById('Q');
                audio.play()
                break;
            case 'w':
                const audio2 = document.getElementById('W');
                audio2.play()
                break;
            case 'e':
                const audio3 = document.getElementById('E');
                audio3.play()
                break;
            case 'a':
                const audio4 = document.getElementById('A');
                audio4.play()
                break;
            case 's':
                const audio5 = document.getElementById('S');
                audio5.play()
                break;
            case 'd':
                const audio6 = document.getElementById('D');
                audio6.play()
                break;
            case 'z':
                const audio7 = document.getElementById('Z');
                audio7.play()
                break;
            case 'x':
                const audio8 = document.getElementById('X');
                audio8.play()
                break;
            case 'c':
                const audio9 = document.getElementById('C');
                audio9.play()
                break;
        
            default:
                break;
        }
    }


    return (
        <Fragment >
            <button 
                className='drum-pad w-100 h-100 btn-lg' 
                onClick={handlePlay} onKeyDown={handlePress}
            >{name}
                <audio src={sonido} id={name}/>
            </button>
        </Fragment>
    )
}