const notesA = ["b","c", "c#", "d", "d#", "e", "f", "f#", "g", "g#", "a", "a#", "B","C","C#","D","D#", "E", "F", "F#", "G", "G#", "A", "A#","-"];
const notesB = ["b","C", "c", "D", "d", "E", "F", "f", "G", "g", "A", "a", "B","C","-"];
//for notesc recorder
const notesC = ["b","C4", "C#4", "D4", "D#4", "E4", "F4", "F#4", "G4", "G#4", "A4", "A#4", "B4","C5","C#5","D5","D#5", "E5", "F5", "F#5", "G5", "G#5", "A5", "A#5","-"];
/* 

 311.1, 329.6, 349.2, 370.0, 392.0, 415.3, 440, 466.2
*/
let noteFrequency = [246.95,
  261.6, 277.2, 293.7, 311.1, 329.6, 349.2, 370.0, 392.0, 415.3, 440, 466.2,
   493.9,523.2
   ,554.4,587.4,622.2, 659.2, 698.4, 740, 784, 830.6, 880, 932.4
];
// var mynoted=["a", "a", "B", "-", "a", "a", "B", "-",
//  "a", "B", "C", "B", "a","Ba", "f", "-",
//   "e", "c", "e", "f", "e", "ec", "B", "-", "a", "a", "B", "-", "a", "a", "B", "-", "e", "f",
// "B",
// "a", "f", "e", "-", "-"]

var mynoted=["G", "GB", "B", "B", "G", "GB", "B", "B", "A", "B", "C", "C", "B", "BA", "G"]

const sarang=["d", "g", "f", "d", "-", "c", "b", "c", "d", "f", "g", "f", "g", "a#", "g", "f",
"g", "C", "B", "C", "-", "a#", "g", "f", "g", "B", "C", "D", "-", "C", "a#", "g",
"g", "D", "C", "D", "B", "C", "g", "a#", "f", "g", "d", "f", "d", "c", "b", "c",
"f", "f", "f", "g", "-", "g", "B", "B", "C", "-", "C", "C", "D", "B", "C", "-",
"B", "C", "D", "F", "D", "C", "-", "D", "B", "C", "-", "D", "C", "a#", "g", "-",
"C", "B", "C", "a#", "a#", "g", "a#", "g", "g", "f", "g", "f", "d", "c", "b", "c"]
let frequency = 0;



const addBtn = document.querySelector(".add")
const typeSelect = document.querySelector("#typeSelect")
const taskField = document.querySelector(".taskInput")
const list = document.querySelector(".list")
let transposeBy = 0;
let otype = "sine";
let octave = 4;
let quasiOctave = 0;


// addBtn.addEventListener("click", startOccilation())
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
  g.gain.exponentialRampToValueAtTime(0.00001, context.currentTime + 4)
  // setTimeout(o.stop(), 2000);
}



/* function startOccilator(myId, otype) {
  let context = new AudioContext();
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
  o.frequency.setValueAtTime(frequency, context.currentTime);
  let g = context.createGain();
  o.type = otype;
  o.connect(g)
  g.connect(context.destination)
  o.start();
  g.gain.exponentialRampToValueAtTime(0.00001, context.currentTime + 4)
  // setTimeout(o.stop(), 2000);

}
 */