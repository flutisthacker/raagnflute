var notes = ["c", "c#", "d", "d#", "e", "f", "f#", "g", "g#", "a", "a#", "b"];
let noteFrequency = [261.6, 277.2, 293.7, 311.1, 329.6, 349.2, 370.0, 392.0, 415.3, 440, 466.2, 493.9];
let frequency = 0;

const addBtn = document.querySelector(".add")
const typeSelect = document.querySelector("#typeSelect")
const taskField = document.querySelector(".taskInput")
const list = document.querySelector(".list")
let transposeBy = 0;
let otype = "sine";
let octave = 4;
let quasiOctave = 0;

addBtn.addEventListener("click", startOccilation())
typeSelect.addEventListener("change", function () {
  otype = typeSelect.value;
});

// function octaveChange() {
//   for (i = octave; i <= quasiOctave; i++) {
//     debugger
//     for (let i = 0; i <= noteFrequency.length; i++) {
//       noteFrequency[i] *= 2;
//     }
//   }
// }


function startOccilation(context, myId) {

  // let context = new AudioContext()
  /*
    let o = context.createOscillator()
    o.type = "sine"
    o.connect(context.destination)
    o.start();
    setTimeout(o.stop(), 2000);
    */
  /*
    {
      channelCount: number,
      context: AudioContext,
      detune: AudioParam,
      type: 'sine' | 'sawtooth' | 'triangle' | 'square'
      frequency: AudioParam,
      numberOfInputs: number,
      numberOfOutputs: number,
      onended: function
      ...
    }
  */
  let o = context.createOscillator()
  for (let index = 0; index < notes.length; index++) {
    if (notes[index] == myId) {
      if (octave == 6) {
        frequency = noteFrequency[index] * 4;
      }
      if (octave == 5) {
        frequency = noteFrequency[index] * 2;
      }
      if (octave == 4) {
        frequency = noteFrequency[index];
      }
      if (octave == 3) {
        frequency = noteFrequency[index] / 2;
      }
    }
  }
  // let frequency = 261.6s
  // o.frequency.value = frequency
  o.frequency.setValueAtTime(frequency, context.currentTime);
  let g = context.createGain();
  o.type = otype;
  // console.log(o.frequency);
  // console.log(o);

  o.connect(g)
  g.connect(context.destination)
  o.start();
  g.gain.exponentialRampToValueAtTime(0.00001, context.currentTime + 2)
  // setTimeout(o.stop(), 2000);
}


// function startOccilator(myId, otype) {
//   let context = new AudioContext();
//   let o = context.createOscillator()
//   for (let index = 0; index < notes.length; index++) {
//     if (notes[index] == myId) {
//       if (octave == 6) {
//         frequency = noteFrequency[index] * 4;
//       }
//       if (octave == 5) {
//         frequency = noteFrequency[index] * 2;
//       }
//       if (octave == 4) {
//         frequency = noteFrequency[index];
//       }
//       if (octave == 3) {
//         frequency = noteFrequency[index] / 2;
//       }
//     }
//   }
//   o.frequency.setValueAtTime(frequency, context.currentTime);
//   let g = context.createGain();
//   o.type = otype;
//   o.connect(g)
//   g.connect(context.destination)
//   o.start();
//   g.gain.exponentialRampToValueAtTime(0.00001, context.currentTime + 4)
//   // setTimeout(o.stop(), 2000);

// }
