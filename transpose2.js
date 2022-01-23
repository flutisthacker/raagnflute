// abcd = "c#d#f#"
// console.log(splitnotes(abcd));
function splitnotes(abcd) {
  defg = [];
  bcde = abcd.split("")
  bcde.forEach((cdef, index) => {
    if (cdef.includes("#")) {
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
    bcde.splice(defg[i] - w, 1)
    w++;
  }
  return bcde.join().split(",");
  // return bcde.join().split(", ,");
}

const keey = ["c", "c#", "d", "d#", "e", "f", "f#", "g", "g#", "a", "a#", "b", "-"];
const Ckey = ["C", "c", "D", "d", "E", "F", "f", "G", "g", "A", "a", "B", "-"];
const Nepnotes = ["सा", "रेे।", "रे", "ग|", "ग", "म", "म।", "प", "ध।", "ध", "नि।", "नि", "-"];
const Newanotes = ["न", "माे।", "माे", "बा।", "बा।", "गे", "म।", "साे", "ध।", "रा", "नि।", "क", "-"];
const solfege = ["do", "re।", "re", "mi।", "mi", "fa", "so।", "so", "la।", "la", "ti।", "ti", "-"];
const Cskey = ["c", "D", "d", "E", "F", "f", "G", "g", "A", "a", "B", "C", "-"];
const Dkey = ["D", "d", "E", "F", "f", "G", "g", "A", "a", "B", "C", "c", "-"];
const Dskey = ["d", "E", "F", "f", "G", "g", "A", "a", "B", "C", "c", "D", "-"];
const Ekey = ["E", "F", "f", "G", "g", "A", "a", "B", "C", "c", "D", "d", "-"];
const Fkey = ["F", "f", "G", "g", "A", "a", "B", "C", "c", "D", "d", "E", "-"];
const Fskey = ["f", "G", "g", "A", "a", "B", "C", "c", "D", "d", "E", "F", "-"];
const Gkey = ["G", "g", "A", "a", "B", "C", "c", "D", "d", "E", "F", "f", "-"];
const Gskey = ["g", "A", "a", "B", "C", "c", "D", "d", "E", "F", "f", "G", "-"];
const Akey = ["A", "a", "B", "C", "c", "D", "d", "E", "F", "f", "G", "g", "-"];
const Askey = ["a", "B", "C", "c", "D", "d", "E", "F", "f", "G", "g", "A", "-"];
const Bkey = ["B", "C", "c", "D", "d", "E", "F", "f", "G", "g", "A", "a", "-"];

songs = document.querySelector("#songs");
songstwoli = document.querySelectorAll("#songstwo li");
songkey = document.querySelector("#songkey");
translate = document.querySelector("#translate");
// Ckey.map(key => console.log(`${key} is the natural key`))
var cursongtwo = "";

var totranspose = [];
var totbeat ;

function transpose(note, key, beat) {
  // console.log("html", note, key)

  newscale = [];
  //       if(cd="A"){
  // nepali ma add+
  // }
  for (i = 0; i < note.length; i++) {
    if (note[i].length >= 2 && note[i].length < 9) {
      // if (note[i].length == 2 || note[i].length == 3 || note[i].length == 4 || note[i].length == 5) {
        notej = [];
        let notei;
        if (note[i].includes("#")) {
        notei = splitnotes(note[i])
      } else {
        notei = note[i].split("")
      }
      // console.log("notei:" + notei, note[i])
      for (z = 0; z < notei.length; z++) {
        // notei = breakdown of "cdef" to "c","d"

        Ckey.forEach((ckey, index) => {
          //def=> converted to d#ff# if key cskey
          if (notei[z] == ckey) {
            // console.log(Ckey[x], notei[z], key[x])
            notej.push(key[index])
          }
        })
      }
      // console.log("my length" + note[i].length, note[i]);
      // console.log(notej + "conjoined piece")
      const searchRegExp = /,/g;
      const replaceWith = '';
      const result = notej.join().replace(searchRegExp, replaceWith);
      // console.log("result"+result)
      newscale.push(result);

    } else {
      // onee transpose C=>D
      newscale.push(key[Ckey.indexOf((note[i]))]);

      // Nepnotes[Ckey.indexOf(note[i])]
/*           Ckey.forEach((ckey, index) => {
        if (note[i] == ckey) {
          // console.log(note[i], i, Ckey[j], j)
          // console.log(key[j], newscale)
          newscale.push(key[index]);
        }
      }) */


    }
  }
  totranspose = newscale;
  totbeat=beat
  maketable(beat);
  tabledisplay(newscale, beat);
  // ifrdocument.querySelector("#givenote").innerText=totranspose
  return newscale;
}

function tabledisplay(na, beat) {
  // console.log("html");

  // maketable();
  count = 0;
  tbody = document.querySelector('.tbody');
  let tr;
  for (i = 0; i < na.length; i++) {
    if (i % beat == 0) {
      tr = document.createElement('tr');
    }
    let td = document.createElement('td');
    td.innerHTML = na[i];
    tr.appendChild(td);
    tbody.appendChild(tr);
  }
}


function maketable(numoftab) {
  // console.log("html", numoftab)

  body = document.querySelector('.list');
  body.innerHTML = ""
  table = document.createElement('table');
  table.className = "table table-hover"
  thead = document.createElement('thead');
  thead.className = "thead bg-dark text-light"
  tbody = document.createElement('tbody');
  tbody.className = "tbody"
  theadtr = document.createElement('tr');
  var tds = [];
  
  for (var i = 0; i < numoftab; i++) {
    tds[i] = document.createElement("td");
    tds[i].innerHTML = i + 1;
  }

  table.prepend(tbody)
  for (var i = (numoftab - 1); i >= 0; i--) {
    theadtr.prepend(tds[i])
  }
  thead.prepend(theadtr)
  table.prepend(thead)
  body.prepend(table)
}

// export default splitnotes;