const notes = ["c", "c#", "d", "d#", "e", "f", "f#", "g", "g#", "a", "a#", "b"];
let noteFrequency = [261.6, 277.2, 293.7, 311.1, 329.6, 349.2, 370.0, 392.0, 415.3, 440, 466.2, 493.9];
var frequency = 0;

// console.log("hello")

function sequencer() {
  const kick = new Tone.Player('./music1/kick-electro01.wav').toDestination();
  const snare = new Tone.Player('./music1/snare-lofi02.wav').toDestination();
  const hihat = new Tone.Player('./music1/hihat-plain.wav').toDestination();
  let index = 0; //sound to be play

  //dom
  // Tone.Transport.bpm.value = 80;
  // Tone.Transport.bpm(120,10) ramps the bpm to 120 over 10sec ;
  Tone.Transport.scheduleRepeat(repeat, '8n');
  Tone.Transport.start();

  function repeat() {
    let step = index % 8;
    // console.log(step);
    // it gors from 0-7 added 1 so goes from 1 to 8
    //  its gonna run soit is kept in const
    const kickInputs = document.querySelector(`.kick input:nth-child(${step+1})`);
    const snareInputs = document.querySelector(`.snare input:nth-child(${step+1})`);
    const hihatInputs = document.querySelector(`.hihat input:nth-child(${step+1})`);

    // console.log(kickInputs);
    if (kickInputs.checked) {
      kick.start();
    }
    if (hihatInputs.checked) {
      hihat.start();
    }
    if (snareInputs.checked) {
      snare.start();
    }
    index++;

  }
}

sequencer();
