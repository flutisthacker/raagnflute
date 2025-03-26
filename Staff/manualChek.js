
function singleAdd(mynotes) {
    const listOfstaves={
        "c": new VF.StaveNote({
            clef: "treble",
            keys:  ["c/4"],
            duration: "4"
          }),
        "c#": new VF.StaveNote({
            clef: "treble",
            keys:  ["c#/4"],
            duration: "4"
          }).addAccidental(0, new VF.Accidental("#")),
        "d": new VF.StaveNote({
            clef: "treble",
            keys:  ["d/4"],
            duration: "4"
          }),
        "d#": new VF.StaveNote({
            clef: "treble",
            keys:  ["d#/4"],
            duration: "4"
          }).addAccidental(0, new VF.Accidental("#")),
        "e": new VF.StaveNote({
            clef: "treble",
            keys:  ["e/4"],
            duration: "4"
          }),
        "f": new VF.StaveNote({
            clef: "treble",
            keys:  ["f/4"],
            duration: "4"
          }),
        "f#": new VF.StaveNote({
            clef: "treble",
            keys:  ["f#/4"],
            duration: "4"
          }).addAccidental(0, new VF.Accidental("#")),
        "g": new VF.StaveNote({
            clef: "treble",
            keys:  ["g/4"],
            duration: "4"
          }),
        "g#": new VF.StaveNote({
            clef: "treble",
            keys:  ["g#/4"],
            duration: "4"
          }).addAccidental(0, new VF.Accidental("#")),
        "a": new VF.StaveNote({
            clef: "treble",
            keys:  ["g/4"],
            duration: "4"
          }),
        "a#": new VF.StaveNote({
            clef: "treble",
            keys:  ["a#/4"],
            duration: "4"
          }).addAccidental(0, new VF.Accidental("#")),
        "b": new VF.StaveNote({
            clef: "treble",
            keys:  ["b/4"],
            duration: "4"
          }),
        "C": new VF.StaveNote({
            clef: "treble",
            keys:  ["C/5"],
            duration: "4"
          }),
        "C#": new VF.StaveNote({
            clef: "treble",
            keys:  ["C#/5"],
            duration: "4"
          }).addAccidental(0, new VF.Accidental("#")),
        "D": new VF.StaveNote({
            clef: "treble",
            keys:  ["D/5"],
            duration: "4"
          }),
        "D#": new VF.StaveNote({
            clef: "treble",
            keys:  ["D#/5"],
            duration: "4"
          }).addAccidental(0, new VF.Accidental("#")),
        "E": new VF.StaveNote({
            clef: "treble",
            keys:  ["E/5"],
            duration: "4"
          }),
        "F": new VF.StaveNote({
            clef: "treble",
            keys:  ["F/5"],
            duration: "4"
          }),
        "F#": new VF.StaveNote({
            clef: "treble",
            keys:  ["F#/5"],
            duration: "4"
          }).addAccidental(0, new VF.Accidental("#")),
        "G": new VF.StaveNote({
            clef: "treble",
            keys:  ["G/5"],
            duration: "4"
          }),
        "G#": new VF.StaveNote({
            clef: "treble",
            keys:  ["G#/5"],
            duration: "4"
          }).addAccidental(0, new VF.Accidental("#")),
        "A": new VF.StaveNote({
            clef: "treble",
            keys:  ["A/5"],
            duration: "4"
          }),
        "A#": new VF.StaveNote({
            clef: "treble",
            keys:  ["A#/5"],
            duration: "4"
          }).addAccidental(0, new VF.Accidental("#")),
        "B": new VF.StaveNote({
            clef: "treble",
            keys:  ["B/5"],
            duration: "4"
          }),
        "-": new VF.StaveNote({
            clef: "treble",
            keys:  ["C/4"],
            duration: "qr"
          }),
    }
    let div = document.getElementById("staffnotation")
    let renderer2 = new VF.Renderer(div, VF.Renderer.Backends.SVG);
  
    renderer2.resize(500, 200);
    let context = renderer2.getContext();
    context.setFont("Arial", 20, "").setBackgroundFillStyle("#aaa");
  
    // Create a stave at position 10, 40 of width 400 on the canvas.
    let stave = new VF.Stave(10, 40, 400);
  
    stave.setContext(context).draw();
  
      let listOfMIDI=[];
      function convertTOMidi(ListofKeysToConvert){
        listOfMIDI=[];
  
        let valuePerBeat=4 
        ListofKeysToConvert.forEach((individualKey,val)=>{
        if(individualKey== "-" && ListofKeysToConvert.length%4!=0 && ListofKeysToConvert.length>0){
          let tosend=listOfMIDI[listOfMIDI.length-1][1]/2
              if(tosend==1){
                listOfMIDI[listOfMIDI.length-1][1] = listOfMIDI[listOfMIDI.length-1][1]*1
              }
              else{
                listOfMIDI[listOfMIDI.length-1][1] = tosend
              }
        }
        else if(individualKey== "-"){
          console.log("aayo")
        listOfMIDI.push(["c",valuePerBeat])
        }
  
        else if(individualKey.length==1 && individualKey!="-"){
        listOfMIDI.push([listOfstaves[individualKey],valuePerBeat])
        }
        else if(individualKey.length>1){
          arrayOfSplitedNotes=splitnotes(individualKey)
          // console.log(arrayOfSplitedNotes)
          arrayOfSplitedNotes.forEach(individualNotefromSplitedNotes=>{
            if(individualNotefromSplitedNotes== "-"){
              let tosend=listOfMIDI[listOfMIDI.length-1][1]/2
              if(tosend==1){
                listOfMIDI[listOfMIDI.length-1][1] = listOfMIDI[listOfMIDI.length-1][1]*1
              }
              else{
                listOfMIDI[listOfMIDI.length-1][1] = tosend
              }
            }
            else if(individualNotefromSplitedNotes.length==1){
              listOfMIDI.push([listOfstaves[individualNotefromSplitedNotes],(valuePerBeat*arrayOfSplitedNotes.length)])
            }
            else {
              listOfMIDI.push([listOfstaves[individualNotefromSplitedNotes],valuePerBeat])
            }
          })
      
        }
        });
        if(valuePerBeat==ListofKeysToConvert.length-1){
            listOfMIDI.push([0,valuePerBeat])}
        
        console.log(listOfMIDI);
        addStaffNote(listOfMIDI)
      }
      
      // [71,4]
      var notes = [];
      var quasinote = [];
       
        convertTOMidi(mynotes);
    
        function addStaffNote(midi){
            let quack=[];
        midi.forEach(md=>{
            console.log(md,"md midi")
            // quackd={
            //   clef: "treble",
            //   keys:  [md[0]],
            //   duration: `${md[1]}`
            // }
            // if(md[0].includes("#")){
            //   quack = [new VF.StaveNote(quackd).addAccidental(0, new VF.Accidental("#"))]
            // console.log(quack,105)
            // }else if(md[0].includes("-")){
            //   quackd["duration"] = "qr"
            //   quack = [new VF.StaveNote(quackd)]
            // }else{
            //   quack = [new VF.StaveNote(quackd)]
            // }
            // console.log(quack[0],quackd,"toadd")
            md[0]["duration"] = `${md[1]}`;
            console.log(md[0]["duration"],"duration")
            notes.push(md[0])
            // notes.push(midi)
            // console.log(notes,md,"md")
          })
        }
console.log(notes)

    var beams = VF.Beam.generateBeams(notes);
    Vex.Flow.Formatter.FormatAndDraw(context, stave, notes);
    beams.forEach(function (b) {
      b.setContext(context).draw()
    })
  
  }