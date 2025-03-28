const VF = Vex.Flow;
// Create an SVG renderer and attach it to the DIV element named "boo".
var div = document.getElementById("boo")
var renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);

// Size our SVG:
renderer.resize(500, 500);

// And get a drawing context:
var context = renderer.getContext();
context.setFont("Arial", 10, "").setBackgroundFillStyle("#aaa");

// Create a stave at position 10, 40 of width 400 on the canvas.
var stave = new VF.Stave(10, 40, 400);

// Add a clef and time signature.
stave.addClef("treble").addTimeSignature("4/4");
// stave.addClef("bass").addTimeSignature("4/4");

// Connect it to the rendering context and draw!
stave.setContext(context).draw();


function splitnotes(abcd) {
  defg = [];
  bcde = abcd.split("")
  bcde.forEach((cdef, index) => {
    if (cdef.includes("#")) {
      // console.debug(index)
      defg.push(index)

    }
  })

  for (j = 0; j < bcde.length; j++) {
    for (i = 0; i < defg.length; i++) {
      if (j == defg[i]) {
        bcde[j - 1] = bcde[j - 1] + bcde[defg[i]]
      }
    }
  }

  w = 0;
  for (i = 0; i < defg.length; i++) {
    // console.debug(defg[i], w, bcde)
    bcde.splice(defg[i] - w, 1)
    // console.debug(defg[i], w, bcde)
    w++;
  }
  return bcde.join().split(",");
  // return bcde.join().split(", ,");
}


