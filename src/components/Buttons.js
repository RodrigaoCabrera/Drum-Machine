import './style.css';

export default function Buttons({ name, sonido, onName, volumen, interruptor }){
    // pass the event to the handler
    const handlePlay = e =>{
        if(interruptor){
        // get all audio elements and stop them all
        const allAudios = document.querySelectorAll('audio');
        allAudios.forEach(audioEl => {
            audioEl.pause()
            audioEl.currentTime=0;
            
            console.log(audioEl.volumen)
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
    

    return (
        <div className="boton">
            <button className='drum-pad' onClick={handlePlay} id={name}>{name}
                <audio src={sonido} />
            </button>
        </div>
    )
}