const keys = ["c", "c#", "d", "d#", "e", "f", "f#", "g", "g#", "a", "a#", "b", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B", "-"];
const keyBN = ["c/4", "c#/4", "d/4", "d#/4", "e/4", "f/4", "f#/4", "g/3", "g#/3", "a/3", "a#/3", "b/3", "C/5", "C#/5", "D/5", "D#/5", "E/5", "F/5", "F#/5", "G/4", "G#/4", "A/4", "A#/4", "B/4", "-"];
// from midi notes

function addbadnotes(mynotes) {
  let div = document.getElementById("staffnotation")
  let renderer2 = new VF.Renderer(div, VF.Renderer.Backends.SVG);

  renderer2.resize(800, 150);
  let context = renderer2.getContext();
  context.setFont("Arial", 20, "").setBackgroundFillStyle("#aaa");

  // Create a stave at position 10, 40 of width 400 on the canvas.
  let stave = new VF.Stave(10, 40, 750);
  stave.addClef("treble").addTimeSignature("8/8");

  stave.setContext(context).draw();

    let mmidi=[];
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
      mmidi.push([ksy,onebeat])
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
            mmidi.push([msdn,onebeat*mysplitednotes.length])
          }
          else {
            mmidi.push([msdn,onebeat])
          }
        })
  
      }
        // oscillator.stop()
      });
      console.log(mmidi);
      addStaffNote(mmidi)
    }
    
    // [71,4]
    var notes = [];
    var quasinote = [];
    
    
      convertTOMidi(mynotes);
  
      function addStaffNote(midi){
        midi.forEach(md=>{
          quackd={
            clef: "treble",
            keys:  [`${md[0]}/4`],
            duration: `${md[1]}`
          }
          if(md[0].includes("#")){
            quack = [new VF.StaveNote(quackd).addAccidental(0, new VF.Accidental("#"))]
          }else{
            quack = [new VF.StaveNote(quackd)]
          }
          console.log(quack[0])
          notes.push(quack[0])
        })
      }
  console.log(notes)
  var beams = VF.Beam.generateBeams(notes);
  Vex.Flow.Formatter.FormatAndDraw(context, stave, notes);
  beams.forEach(function (b) {
    b.setContext(context).draw()
  })

}

function isUpper(character) {
  if (character == character.toUpperCase()) {
    return true;
  }
  if (character == character.toLowerCase()) {
    return false;
  }
}

function NoteOctave(character) {
  let returnchar;
  keys.forEach((kkeeyy, index) => {
    if (kkeeyy == character) {
      returnchar = keyBN[index];
    }
  })
  return returnchar
}
