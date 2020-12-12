import { useEffect, useRef, useState } from 'react';
import { MonoSynth, start, Synth } from 'tone';
import { Tone } from 'tone/build/esm/core/Tone';
import StartAudioContext from 'startaudiocontext';
import Key from './components/Key';
import './App.css';

function App() {
  
  const [isLoaded, setLoaded] = useState(false);
  const [sequence, setSequence] = useState([]);
  const synth = useRef(null);
  const [notes, setNotes] = useState([
    "C4",
    "D4",
    "E4",
    "F4",
    "G4",
    "A4",
    "B4",
    "C5"
  ])

useEffect(() => {
  synth.current = new MonoSynth(
    {
      onload: () => {
        setLoaded(true);
      }
    }
  ).toDestination();
}, []);

window.AudioContext = window.AudioContext || window.webkitAudioContext
	const audioContext = new AudioContext()

	//set the context
  const startAudio = (event) => {
    StartAudioContext(audioContext);
  }
  

const handleKeydown = (event) => {
  StartAudioContext(audioContext);
  if(event.which === 65) {
    synth.current.triggerAttackRelease(notes[0], "8n");
  }
  if(event.which === 83) {
    synth.current.triggerAttackRelease(notes[1], "8n");
  }
  if(event.which === 68) {
    synth.current.triggerAttackRelease(notes[2], "8n");
  }
  if(event.which === 70) {
    synth.current.triggerAttackRelease(notes[3], "8n");
  }
  if(event.which === 71) {
    synth.current.triggerAttackRelease(notes[4], "8n");
  }
  if(event.which === 72) {
    synth.current.triggerAttackRelease(notes[5], "8n");
  }
  if(event.which === 74) {
    synth.current.triggerAttackRelease(notes[6], "8n");
  }
  if(event.which === 75) {
    synth.current.triggerAttackRelease(notes[7], "8n");
  }
}

  return (
    <>
      <h1>Heading test</h1>
      {/* <button className="starterButton" onClick={startAudio}>Click to start</button> */}
      <button onKeyDown={handleKeydown}>Start to play</button>
      <ul>
      <Key ></Key>
      <Key ></Key>
      <Key ></Key>
      <Key ></Key>
      </ul>
    </>
  );
}

export default App;