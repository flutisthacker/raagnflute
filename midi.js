
var context = null;
var oscillator = null;
function getOrCreateContext() {
  if (!context) {
    context = new AudioContext();
    oscillator = context.createOscillator();
    oscillator.connect(context.destination);
  }
  return context;
  
}
const listt = document.getElementById('midi-list');
const debugEl = document.getElementById('debug');

let isStarted = false;

function changeType(type) {
  oscillator.type = type;
}

const length = 2;
const eps = 0.01;

// This is a tetris theme transposed from https://musescore.com/user/16693/scores/38133
 var tetris = [  [76, 4], [71, 8], [72, 8], [74, 4], [72, 8], [71, 8], [69, 4], [69, 8], [72, 8], [76, 4], [74, 8], [72, 8], [71, 4], [71, 8], [72, 8], [74, 4], [76, 4], [72, 4], [69, 4], [69, 4], [0,  4], [74, 3], [77, 8],[81, 4], [79, 8], [77, 8], [76, 3], [72, 8], [76, 4], [74, 8], [72, 8], [71, 4], [71, 8], [72, 8], [74, 4], [76, 4], [72, 4], [69, 4], [69, 4], [0, 4]]

/* var tetris = [
  [64, 8], [64, 8], [64, 4], [64, 8],
 [64, 8], [64, 4], [64, 8], [67, 8],
 [60, 8], [62, 8], [64, 2], [65, 8],
 [65, 8], [65, 4], [64, 8], [64, 8],
 [64, 4], [62, 8], [62, 8], [62, 8], [64, 8],
 [0,  4]

] */
function convertMe(){
  let mmidi=[];
document.querySelector("#type2").value=""
key=document.querySelector("#type1").value
keys=key.split(" ")
convertTOMidi(keys)
}
function convertTOMidi(keys){
  mmidi=[];
  var keyJSON={
    "c": 60,
    "c#": 61,
    "d": 62,
    "d#": 63,
    "e": 64,
    "f": 65,
    "f#": 66,
    "g": 67,
    "g#": 68,
    "a": 69,
    "a#": 69,
    "b": 71,
    "C": 72,
    "C#": 73,
    "D": 74,
    "D#": 75,
    "E": 76,
    "F": 77,
    "F#": 78,
    "G": 79,
    "G#": 80,
    "A": 81,
    "A#": 82,
    "B": 83
  }
  let onebeat=4 
  keys.forEach((ksy,val)=>{
  if(ksy== "-"){
    tosend=mmidi[mmidi.length-1][1]/2
        if(tosend==1){
          mmidi[mmidi.length-1][1] = mmidi[mmidi.length-1][1]*1
        }
        else{
          mmidi[mmidi.length-1][1] = tosend
        }
  }
  else if(ksy.length==1 && ksy!="-"){
  mmidi.push([keyJSON[ksy],onebeat])
  }
  else if(ksy.length>1){
    mysplitednotes=splitnotes(ksy)
    console.log(mysplitednotes)
    mysplitednotes.forEach(msdn=>{
      if(msdn== "-"){
        tosend=mmidi[mmidi.length-1][1]/2
        if(tosend==1){
          mmidi[mmidi.length-1][1] = mmidi[mmidi.length-1][1]*1
        }
        else{
          mmidi[mmidi.length-1][1] = tosend
        }
      }
      else if(msdn.length==1){
        mmidi.push([keyJSON[msdn],onebeat*mysplitednotes.length])
      }
      else {
        mmidi.push([keyJSON[msdn],onebeat])
      }
    })

  }
  if(val==keys.length-1){
    mmidi.push([0,4])}
    // oscillator.stop()
  })

  mmidi.forEach(m=>{ 
    document.querySelector("#type2").value += `[${m}], `
  })
  tetris=mmidi
}

/*
E bC D cb A# A#C
  [76, 4], [71, 8], [72, 8], [74, 4], [72, 8], [71, 8], [69, 4], [69, 8], [72, 8], [76, 4], [74, 8], [72, 8], [71, 4], [71, 8], [72, 8], [74, 4], [76, 4], [72, 4], [69, 4], [69, 4], [0,  4], [74, 3], [77, 8],[81, 4], [79, 8], [77, 8], [76, 3], [72, 8], [76, 4], [74, 8], [72, 8], [71, 4], [71, 8], [72, 8], [74, 4], [76, 4], [72, 4], [69, 4], [69, 4], [0, 4],
    "c": 60,
    "c#": 61,
    "d": 62,
    "d#": 63,
    "e": 64,
    "f": 65,
    "f#": 66,
    "g": 67,
    "g#": 68,
    "a": 69,
    "a#": 69,
    "b": 71,
    "C": 72,
    "C#": 73,
    "D": 74,
    "D#": 75,
    "E": 76,
    "F": 77,
    "F#": 78,
    "G": 79,
    "G#": 80,
    "A": 81,
    "A#": 82,
    "B": 83
*/

function playTetris() {
  getOrCreateContext();
  oscillator.start(0);
  var time = context.currentTime + eps;
  tetris.forEach(note => {
    const freq = Math.pow(2, (note[0]-69)/12)*440;
    // console.log(time);
    oscillator.frequency.setTargetAtTime(0, time - eps, 0.001);
    oscillator.frequency.setTargetAtTime(freq, time, 0.001);
    time += length / note[1];
  });
}

document.getElementById('typesine').addEventListener('click', changeType.bind(null, 'sine'));
document.getElementById('typesquare').addEventListener('click', changeType.bind(null, 'square'));
document.getElementById('typesaw').addEventListener('click', changeType.bind(null, 'sawtooth'));
document.getElementById('typetriangle').addEventListener('click', changeType.bind(null, 'triangle'));

document.getElementById('tetris').addEventListener('click', playTetris);
document.getElementById('convert').addEventListener('click', convertMe);

function noteOn(midiNote) {
  getOrCreateContext();
  const freq = Math.pow(2, (midiNote-69)/12)*440;
  oscillator.frequency.setTargetAtTime(freq, context.currentTime, 0);
  if (!isStarted) {
    oscillator.start(0);
    isStarted = true;
  } else {
    context.resume();
  }
}

function noteOff() {
  context.suspend();
}

function connectToDevice(device) {
  console.log('Connecting to device', device);
  device.onmidimessage = function(m) {
    const [command, key, velocity] = m.data;
    if (command === 145) {
      debugEl.innerText = 'KEY UP: ' + key;
      noteOn(key);
    } else if(command === 129) {
      debugEl.innerText = 'KEY DOWN';
      noteOff();
    }
  }
}

function replaceElements(inputs) {
  while(listt.firstChild) {
    listt.removeChild(listt.firstChild)
  }
  const elements = inputs.map(e => {
        console.log(e);
        const el = document.createElement('li')
        el.innerText = `${e.name} (${e.manufacturer})`;
        el.addEventListener('click', connectToDevice.bind(null, e));
        return el;
    });

    elements.forEach(e => listt.appendChild(e));
}

navigator.requestMIDIAccess()
    .then(function(access) {
      console.log('access', access);
      replaceElements(Array.from(access.inputs.values()));
      access.onstatechange = function(e) {
        replaceElements(Array.from(this.inputs.values()));
      }

    })


// Below is keyboard emulation for C4-C5 q-i keys
/* var emulatedKeys = {
  q: 60,
  w: 62,
  e: 64,
  r: 65,
  t: 67,
  y: 69,
  u: 71,
  i: 72,
}

document.addEventListener('keydown', function(e) {
  console.log(e);
  if (emulatedKeys.hasOwnProperty(e.key)) {
    noteOn(emulatedKeys[e.key]);
  }
});

document.addEventListener('keyup', function(e) {
  if (emulatedKeys.hasOwnProperty(e.key)) {
    noteOff();
  }
}); */
