abcd = "c#d#f#"
console.log(splitnotes(abcd));

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


const Ckey = ["c", "c#", "d", "d#", "e", "f", "f#", "g", "g#", "a", "a#", "b", "-"];
const Nepnotes = ["सा", "रेे।", "रे", "ग|", "ग", "म", "म।", "प", "ध।", "ध", "नि।", "नि", "-"];
const Nepkey = ["सा", "रेे।", "रे", "ग|", "ग", "म", "म।", "प", "ध।", "ध", "नि।", "नि", "-"];
const Newanotes = ["न", "माे।", "माे", "बा।", "बा।", "गे", "म।", "साे", "ध।", "रा", "नि।", "क", "-"];
const solfege = ["do", "re।", "re", "mi।", "mi", "fa", "so।", "so", "la।", "la", "ti।", "ti", "-"];
const Cskey = ["c#", "d", "d#", "e", "f", "f#", "g", "g#", "a", "a#", "b", "c", "-"];
const Dkey = ["d", "d#", "e", "f", "f#", "g", "g#", "a", "a#", "b", "c", "c#", "-"];
const Dskey = ["d#", "e", "f", "f#", "g", "g#", "a", "a#", "b", "c", "c#", "d", "-"];
const Ekey = ["e", "f", "f#", "g", "g#", "a", "a#", "b", "c", "c#", "d", "d#", "-"];
const Fkey = ["f", "f#", "g", "g#", "a", "a#", "b", "c", "c#", "d", "d#", "e", "-"];
const Fskey = ["f#", "g", "g#", "a", "a#", "b", "c", "c#", "d", "d#", "e", "f", "-"];
const Gkey = ["g", "g#", "a", "a#", "b", "c", "c#", "d", "d#", "e", "f", "f#", "-"];
const Gskey = ["g#", "a", "a#", "b", "c", "c#", "d", "d#", "e", "f", "f#", "g", "-"];
const Akey = ["a", "a#", "b", "c", "c#", "d", "d#", "e", "f", "f#", "g", "g#", "-"];
const Askey = ["a#", "b", "c", "c#", "d", "d#", "e", "f", "f#", "g", "g#", "a", "-"];
const Bkey = ["b", "c", "c#", "d", "d#", "e", "f", "f#", "g", "g#", "a", "a#", "-"];

songs = document.querySelector("#songs");
songstwoli = document.querySelectorAll("#songstwo li");
songkey = document.querySelector("#songkey");
translate = document.querySelector("#translate");
// Ckey.map(key => console.log(`${key} is the natural key`))
var cursongtwo = "";
var notesearched;
var inNepali=false;
translate.addEventListener("click", () => {
  console.log("totbeat"+totbeat)
  try{
    if(inNepali==false){
      transpose(totranspose, eval("Nepnotes"), totbeat)
      inNepali=true;
    }
    else{
      transpose(eval(`notex.${notesearched}.note`), eval("Ckey"), totbeat)
      inNepali=false;
    }
  }
  catch(e){
    console.log(e)
  }    });
songstwoli.forEach(songl => {
  songl.addEventListener("click", (e) => {
    songlid = songl.id
    songlid2 = songlid
    document.querySelector("#notesKey").innerText =eval(songlid2.replace(".note",".key"))
    document.querySelector("#titlename").innerHTML =songlid2.replace("notex.", "").replace(".note","")
    document.querySelector("#notesearch").value=songlid2.replace("notex.", "").replace(".note","")
    songlid.replace("note.", "")
    notesearched=document.querySelector("#notesearch").value
    if (cursongtwo == "") {
      cursongtwo = songlid;
    } else {
      document.getElementById(cursongtwo).className = "";
      cursongtwo = songlid;
    }
    songl.className = "active"
  try{
    transpose(eval(songlid), eval(songkey.value + "key"), eval(songlid.replace(".note", ".beat")))
  }
  catch(e){
    console.log(e)
  }
  });
})

function supriseme(){
  notexkey=Object.keys(notex);
  var surprise=Math.random() * notexkey.length
  songstwo.childNodes[parseInt(surprise)].click()
}


document.querySelector(".fa-gift").addEventListener("click", ()=>{supriseme()});
document.querySelector("#notesearch").addEventListener("keyup", (e) => {
  if (e.keyCode == 13) {
    noteserchval = document.querySelector("#notesearch").value;
    notesearched = noteserchval.replaceAll(" ", "")
    songstwoli.forEach(songl => {
    songl.className="";
    });
    document.getElementById(`notex.${notesearched}.note`).className ="active"

    document.querySelector("#notesKey").innerText =eval(`notex.${notesearched}.key`)
    document.querySelector("#titlename").innerHTML = eval(`notex.${notesearched}.title`) || notesearched
if(eval(`notex.${notesearched}.title`)==""){
  document.querySelector("#titlename").innerHTML +=
  `<div class="spinner-border text-primary" role="status">
  <span class="sr-only">Loading...</span>
</div>`
}
    // document.querySelector(".notename").innerHTML = eval(`notex.${notesearched}.title`) || notesearched


    transpose(eval("notex." + notesearched + ".note"), eval(songkey.value + "key"), eval("notex." +
      notesearched +
      ".beat"))
  
      // document.querySelector(".noteInfo").innerHTML+=makeCard(notesearched ), (eval("notex." + notesearched + ".beat")+ eval("notex." + notesearched ))
      document.querySelector(".noteInfo").innerHTML+=makeCard(notesearched,eval("notex." + notesearched ))
  }
})

function makeCard(title,myBody){
if(typeof myBody == "object"){
  let abcd=myBody;
  myBody=makeList(Object.values(abcd))

}
  let myCard=`<div class="card" style="width: 100%;"><div class="card-body"><h5 class="card-title">${title}</h5><p class="card-text">${myBody}</p><a href="#" class="btn btn-primary">Go somewhere</a></div></div>`
return myCard;
}

function makeList(myArray){
let myListItem ="";
for(i=1;i<myArray.length;i++){
  myListItem+=`  <li class="list-group-item">${myArray[i]}</li>`    
}
  let myList=`<ul class="list-group">
  ${myListItem}
  </ul>`

  return myList;
}
songs.addEventListener("change", () => {
  // a = song.value;
  document.querySelector("#titlename").innerHTML = (songs.value).replace(".note", "")
  // songkey.value=""
  transpose(eval(songs.value), eval(songkey.value + "key"), eval((songs.value).replace(".note", ".beat")))
});
songkey.addEventListener("change", () => {
  document.querySelector("#titlename").innerHTML = songs.value
  transpose(eval(songs.value), eval(songkey.value + "key"), eval((songs.value).replace(".note", ".beat")))
});

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
          if (notei[z].toLowerCase() == ckey) {
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
      newscale.push(key[Ckey.indexOf((note[i].toLowerCase()))]);

      // Nepnotes[Ckey.indexOf(note[i])]
/*           Ckey.forEach((ckey, index) => {
        if (note[i].toLowerCase() == ckey) {
          // console.log(note[i].toLowerCase(), i, Ckey[j], j)
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
  ifrdocument.querySelector("#givenote").innerText=totranspose
  return newscale;
}
/* 
blank=[" "," "," "," "," "," "," "," "]
notename="Tummile"
maketable(8)
tabledisplay(notex[notename].note2.dhuwa,8)
tabledisplay(blank,8)
tabledisplay(notex[notename].note2.music,8)
tabledisplay(blank,8)
tabledisplay(notex[notename].note2.antara,8)
*/
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
  table.id="capture"
  table.className = "table table-hover"
  thead = document.createElement('thead');
  thead.className = "thead table-dark text-light"
  trsname = document.createElement("tr");
  tdsname = document.createElement("td");
  tdsname.setAttribute("colspan","8")
  tdsname.className="table-dark text-info text-center notename"
  tdsname.innerHTML = `${notesearched}[${notex[notesearched].key}]` || "Music";
  trsname.append(tdsname)
  thead.append(trsname)
  table.append(thead)
  body.append(table)

  tbody = document.createElement('tbody');
  tbody.className = "tbody bg-light"
  theadtr = document.createElement('tr');
  var tds = [];

  for (var i = 0; i < numoftab; i++) {
    tds[i] = document.createElement("td");
    tds[i].innerHTML = i + 1;
  }
  table.append(tbody)
  for (var i = 0; i <= (numoftab - 1); i++) {
    theadtr.append(tds[i])
  }
  thead.append(theadtr)
  table.append(thead)
  body.append(table)
}

function hearme() {
  navigator.mediaDevices.getUserMedia({
      audio: true
    }).then(function (localStream) {
      var audioContext = new(window.AudioContext || window.webkitAudioContext)();

      var input = audioContext.createMediaStreamSource(localStream);
      var analyser = audioContext.createAnalyser();
      var scriptProcessor = audioContext.createScriptProcessor();
      // Some analyser setup
      analyser.smoothingTimeConstant = 0;
      analyser.fftSize = 64;

      input.connect(analyser);
      analyser.connect(scriptProcessor);
      scriptProcessor.connect(audioContext.destination);
      var getAverageVolume = function (array) {
        var length = array.length;
        var values = 0;
        var i = 0;
        for (; i < length; i++) {
          values += array[i];
        }
        return values / length;
      };
      var onAudio = function () {
        var tempArray = new window.Uint8Array(analyser.frequencyBinCount);
        analyser.getByteFrequencyData(tempArray);
        // console.log(tempArray)
        var latestFrequency = (getAverageVolume(tempArray));
        //use latestFrequency
        // console.log(latestFrequency)
      };
      scriptProcessor.onaudioprocess = onAudio;
    })
    .catch(function () {
      //Handle error
    });
}
