const keys = ["c", "c#", "d", "d#", "e", "f", "f#", "g", "g#", "a", "a#", "b", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B", "-"];
const keyBN = ["c/4", "c#/4", "d/4", "d#/4", "e/4", "f/4", "f#/4", "g/3", "g#/3", "a/3", "a#/3", "b/3", "C/5", "C#/5", "D/5", "D#/5", "E/5", "F/5", "F#/5", "G/4", "G#/4", "A/4", "A#/4", "B/4", "-"];

function addbadnotes(mynotes) {
  let div = document.getElementById("staffnotation")
  let renderer2 = new VF.Renderer(div, VF.Renderer.Backends.SVG);

  renderer2.resize(500, 200);
  let context = renderer2.getContext();
  context.setFont("Arial", 20, "").setBackgroundFillStyle("#aaa");

  // Create a stave at position 10, 40 of width 400 on the canvas.
  let stave = new VF.Stave(10, 40, 400);

  stave.setContext(context).draw();
  /*
    var notes = [
      new VF.StaveNote({
        clef: "treble",
        keys: [a[0] + "#/5"],
        duration: "8d"
      }).
      addAccidental(0, new VF.Accidental("##")).addDotToAll(),
      new VF.StaveNote({
        clef: "treble",
        keys: [a[1] + "/4"],
        duration: "16"
      }).
      addAccidental(0, new VF.Accidental("b")),
      new VF.StaveNote({
        clef: "treble",
        keys: [a[2] + "/4"],
        duration: "8"
      }),
      new VF.StaveNote({
        clef: "treble",
        keys: [a[3] + "/4"],
        duration: "16"
      }),
      new VF.StaveNote({
        clef: "treble",
        keys: ["e/4"],
        duration: "16"
      }).
      addAccidental(0, new VF.Accidental("b")),
      new VF.StaveNote({
        clef: "treble",
        keys: ["d/4"],
        duration: "16"
      }),
      new VF.StaveNote({
        clef: "treble",
        keys: ["e/4"],
        duration: "16"
      }).
      addAccidental(0, new VF.Accidental("#")),
      new VF.StaveNote({
        clef: "treble",
        keys: ["g/4"],
        duration: "32"
      }),
      new VF.StaveNote({
        clef: "treble",
        keys: ["a/4"],
        duration: "32"
      }),
      new VF.StaveNote({
        clef: "treble",
        keys: ["g/4"],
        duration: "16"
      }),
      new VF.StaveNote({
        clef: "treble",
        keys: ["d/4"],
        duration: "q"
      })
    ]; */

  var notes = [];
  var quasinote = [];
  for (let i = 0; i < mynotes.length; i++) {
    if (mynotes[i].length == 2 || mynotes[i].length == 3 || mynotes[i].length == 4) {
      let dn = 8;
      var keybyno = 4;
      if (mynotes[i].length == 3) {
        dn = 16;
      }
      if (mynotes[i].length == 4) {
        dn = 32;
      }
      if (mynotes[i].includes("#")) {
        notei = splitnotes(mynotes[i])
      } else {
        notei = mynotes[i].split("")
      }

      notei.forEach(notej => {
        if (notej.includes("#")) {

          if (notej.length == 2) {
            dn = "q"
          }
          quack = [eval(
            `new VF.StaveNote({
        clef: "treble",
        keys:  ["${notej}/4"],
        duration: "${dn}"
      }).addAccidental(0, new VF.Accidental("#"))`
          )]
        }
        if (notej == "-") {
          quack = [eval(
            `new VF.StaveNote({
        clef: "treble",
        keys:  ["c/4"],
        duration: "${dn}r"
      })`
          )]
        } else {
          quack = [eval(
            `new VF.StaveNote({
        clef: "treble",
        keys:  ["${NoteOctave(notej)}"],
        duration: "${dn}"
      })`
          )]
        }
        notes.push(quack[0]);
      })
    }
    if (mynotes[i].length == 1) {
      console.debug(notes[i])
      if (mynotes[i] == "-") {
        quack = [eval(
          `new VF.StaveNote({
  clef: "treble",
  keys:  ["c/4"],
  duration: "qr"
})`
        )]
      } else {
        quack = [eval(
          `new VF.StaveNote({
  clef: "treble",
  keys:  ["${NoteOctave(mynotes[i])}"],
  duration: "q"
})`
        )]
      }
      notes.push(quack[0]);

    }
  }
  console.debug(notes)
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
