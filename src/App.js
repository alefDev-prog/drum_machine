import './App.css';
import { useState } from 'react';

function App() {
  const buttonToSound = {
    Q: "Heater1",
    W: "Heater2",
    E: "Heater3",
    A: "Heater4",
    S: "Clap",
    D: "Open-HH",
    Z: "Kick-n'-Hat",
    X: "Kick",
    C: "Closed-HH"

  }
  const [sound, setSound] = useState("");

  const keys = "QWEASDZXCqweasdzxc";
  function PlayAudio(id) {
    let aud = document.getElementById(id);
    aud.play();
    setSound(buttonToSound[id]);
    console.log(sound);
  }

  function PlayAudioOnKey(event) {
    if(keys.includes(event.key)) {
      let aud = document.getElementById(event.key);
      aud.play();
    }
  }

  document.addEventListener('keydown', PlayAudioOnKey)
  

  return (
    <div className="App" id="drum-machine">
      <div id="display">
        <div id="buttons">
          <div className='drum-pad' id="Heater1" onClick={() => PlayAudio("Q")}>Q <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" id="Q" className='clip'/></div>
          <div className='drum-pad' id="Heater2" onClick={() => PlayAudio("W")}>W <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" id="W" className='clip'/></div>
          <div className='drum-pad' id="Heater3" onClick={() => PlayAudio("E")}>E <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" id="E" className='clip'/></div>
          <div className='drum-pad' id="Heater4" onClick={() => PlayAudio("A")}>A <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" id="A" className='clip'/></div>
          <div className='drum-pad' id="Clap" onClick={() => PlayAudio("S")}>S <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" id="S" className='clip'/></div>
          <div className='drum-pad' id="Open-HH" onClick={() => PlayAudio("D")}>D <audio src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" id="D" className='clip'/></div>
          <div className='drum-pad' id="Kick-n'-Hat" onClick={() => PlayAudio("Z")}>Z <audio src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" id="Z" className='clip'/></div>
          <div className='drum-pad' id="Kick" onClick={() => PlayAudio("X")}>X <audio src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" id="X" className='clip'/></div>
          <div className='drum-pad' id="Closed-HH" onClick={() => PlayAudio("C")}>C <audio src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" id="C" className='clip'/></div>
        </div>

        <br></br>
        <div id="sound-wrapper">
          <div id="sound-box">{sound}</div>
        </div>
      </div>
      
    </div>
  );
}

export default App;
