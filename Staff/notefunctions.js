function addlines(a, b, c, d) {
    var div = document.getElementById("staffnotation")
    var renderer2 = new VF.Renderer(div, VF.Renderer.Backends.SVG);
  
    renderer2.resize(500, 200);
    var context2 = renderer2.getContext();
    context2.setFont("Arial", 10, "").setBackgroundFillStyle("#1d1d1d");
  
    // Create a stave at position 10, 40 of width 400 on the canvas.
    var stave2 = new VF.Stave(10, 40, window.innerWidth);
    stave2.addClef("treble").addTimeSignature("8/8");
    let dn = "q";
    let cf = "treble";
    let ckf = {
      "0": {
        "clef": cf,
        "keys": [a + "/4"],
        "duration": dn
      },
      "1": {
        "clef": cf,
        "keys": [b + "/4"],
        "duration": dn
      },
      "2": {
        "clef": cf,
        "keys": [c + "/4"],
        "duration": dn
      },
      "3": {
        "clef": cf,
        "keys": [d + "/4"],
        "duration": dn
      }
    };
    if (a == "-") {
      ckf["0"]["duration"] = dn + "r"
      ckf["0"]["keys"] = ["c/4"]
    }
    if (b == "-") {
      ckf["1"]["duration"] = dn + "r"
      ckf["1"]["keys"] = [a + "/4"]
    }
    if (c == "-") {
      ckf["2"]["duration"] = dn + "r"
      ckf["2"]["keys"] = [b + "/4"]
    }
    if (d == "-") {
      ckf["3"]["duration"] = dn + "r"
      ckf["3"]["keys"] = [c + "/4"]
    }
    console.debug(ckf)
    stave2.setContext(context2).draw();
    var notes = [
      // A quarter-note C.
      new VF.StaveNote(ckf["0"]),
  
      // A quarter-note D.
      new VF.StaveNote(ckf["1"]),
      // A quarter-note rest. Note that the key (b/4) specifies the vertical
      // position of the rest.
      new VF.StaveNote(ckf["2"]),
      // A C-Major chord.
      new VF.StaveNote(ckf["3"])
    ];
    debugger
    console.debug("to check #" + notes[0]["keys"][0].includes("#"))
    console.debug("to check #" + notes)
    if (notes[0]["keys"][0].includes("#")) {
      notes[0].addAccidental(0, new VF.Accidental("#"))
    }
    if (notes[1]["keys"][0].includes("#")) {
      notes[1].addAccidental(0, new VF.Accidental("#"))
    }
    if (notes[2]["keys"][0].includes("#")) {
      notes[2].addAccidental(0, new VF.Accidental("#"))
    }
    if (notes[3]["keys"][0].includes("#")) {
      notes[3].addAccidental(0, new VF.Accidental("#"))
    }
    // keys: ["c/4", "e/4", "g/4"],
    // Create a voice in 4/4 and add the notes from above
    var voice = new VF.Voice({
      num_beats: 4,
      beat_value: 4
    });
    voice.addTickables(notes);
  
    // Format and justify the notes to 400 pixels.
    var formatter = new VF.Formatter().joinVoices([voice]).format([voice], 400);
  
    // Render voice
    voice.draw(context2, stave2);
  
  
  
  
  }
  
  // =============================================
  function addtwonotes([a], [b], [c], [d]) {
    var div = document.getElementById("staffnotation")
    var renderer2 = new VF.Renderer(div, VF.Renderer.Backends.SVG);
  
    renderer2.resize(500, 200);
    var context = renderer2.getContext();
    context.setFont("Arial", 20, "").setBackgroundFillStyle("#aaa");
  
    // Create a stave at position 10, 40 of width 400 on the canvas.
    var stave = new VF.Stave(10, 40, 400);
  
    stave.setContext(context).draw();
  
  
    let dn = "8d";
    let cf = "treble";
    if (a.length == 2) {
      var notes = [
        new VF.StaveNote({
          clef: cf,
          keys: [a[0] +
            "#/5"
          ],
          duration: dn
        }).
        addAccidental(0, new VF.Accidental("#")),
        new VF.StaveNote({
          clef: cf,
          keys: [a[1] + "/4"],
          duration: "16"
        })
  
      ];
    }
    if (b.length == 2) {
      var notes1 = [
        new VF.StaveNote({
          clef: cf,
          keys: [b[0] +
            "#/5"
          ],
          duration: dn
        }).
        addAccidental(0, new VF.Accidental("#")),
        new VF.StaveNote({
          clef: cf,
          keys: [b[1] + "/4"],
          duration: "16"
        })
  
      ];
    }
  
    if (c.length == 2) {
      var notes2 = [
        new VF.StaveNote({
          clef: cf,
          keys: [c[0] +
            "#/5"
          ],
          duration: dn
        }).
        addAccidental(0, new VF.Accidental("#")),
        new VF.StaveNote({
          clef: cf,
          keys: [c[1] + "/4"],
          duration: dn
        })
  
      ];
    }
    if (d.length == 2) {
      var notes3 = [
        new VF.StaveNote({
          clef: cf,
          keys: [d[0] +
            "#/5"
          ],
          duration: dn
        }).
        addAccidental(0, new VF.Accidental("#")),
        new VF.StaveNote({
          clef: cf,
          keys: [d[1] + "/4"],
          duration: dn
        })
  
      ];
    }
    if (a.length == 3) {
      var notes = [
        new VF.StaveNote({
          clef: cf,
          keys: [a[0] +
            "#/5"
          ],
          duration: dn
        }).
        addAccidental(0, new VF.Accidental("#")),
        new VF.StaveNote({
          clef: cf,
          keys: [a[1] + "/5"],
          duration: dn
        }),
        new VF.StaveNote({
          clef: cf,
          keys: [a[2] + "/5"],
          duration: dn
        })
      ];
    }
    if (b.length == 3) {
      var notes1 = [
        new VF.StaveNote({
          clef: cf,
          keys: [b[0] +
            "#/5"
          ],
          duration: dn
        }).
        addAccidental(0, new VF.Accidental("#")),
        new VF.StaveNote({
          clef: cf,
          keys: [b[1] + "/4"],
          duration: dn
        }),
        new VF.StaveNote({
          clef: cf,
          keys: [b[2] + "/5"],
          duration: dn
        })
  
      ];
    }
  
    if (c.length == 3) {
      var notes2 = [
        new VF.StaveNote({
          clef: cf,
          keys: [c[0] +
            "#/5"
          ],
          duration: dn
        }).
        addAccidental(0, new VF.Accidental("#")),
        new VF.StaveNote({
          clef: cf,
          keys: [c[1] + "/4"],
          duration: dn
        }),
        new VF.StaveNote({
          clef: cf,
          keys: [c[2] + "/5"],
          duration: dn
        })
  
  
      ];
    }
    if (d.length == 3) {
      var notes3 = [
        new VF.StaveNote({
          clef: cf,
          keys: [d[0] +
            "#/5"
          ],
          duration: dn
        }).
        addAccidental(0, new VF.Accidental("#")),
        new VF.StaveNote({
          clef: cf,
          keys: [d[1] + "/4"],
          duration: dn
        }),
        new VF.StaveNote({
          clef: cf,
          keys: [d[2] + "/5"],
          duration: dn
        })
  
      ];
    }
    /*   if (notes[0]["keys"][0].includes("#")) {
        notes[0].addAccidental(0, new VF.Accidental("#"))
      }
      if (notes[1]["keys"][0].includes("#")) {
        notes[1].addAccidental(0, new VF.Accidental("#"))
      }
      if (notes[2]["keys"][0].includes("#")) {
        notes[2].addAccidental(0, new VF.Accidental("#"))
      }
      if (notes[3]["keys"][0].includes("#")) {
        notes[3].addAccidental(0, new VF.Accidental("#"))
      } */
  
  
    // Create a beam for each group of notes
    debugger
    beams = [
      new VF.Beam(notes),
      new VF.Beam(notes1),
      new VF.Beam(notes2),
      new VF.Beam(notes3)
    ]
  
    // Render the notes followed by the beams
    var all_notes = notes.concat(notes1).concat(notes2).concat(notes3);
    Vex.Flow.Formatter.FormatAndDraw(context, stave, all_notes);
    beams.forEach(function (b) {
      b.setContext(context).draw()
    })
  }
  