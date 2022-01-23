
<!-- const ordered = Object.keys(notex).sort().reduce(
  (obj, key) => {
    obj[key] = notex[key];
    return obj;
  },
  {}
); -->


  <!-- <script>
    const Ckey = ["c", "c#", "d", "d#", "e", "f", "f#", "g", "g#", "a", "a#", "b", "-"];
    const Nepnotes = ["सा", "रेे।", "रे", "ग|", "ग", "म", "म।", "प", "ध।", "ध", "नि।", "नि", "-"];
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
    translate.addEventListener("click", () => {
      // translates(eval(songs.value))
      // translates(totranspose, 8)
      console.log("totbeat"+totbeat)
      try{
        transpose(totranspose, eval("Nepnotes"), totbeat)
      }
      catch(e){
        console.log(e)
      }    });
    songstwoli.forEach(songl => {
      songl.addEventListener("click", (e) => {
        songlid = songl.id
        songlid2 = songlid
        document.querySelector("#titlename").innerHTML =songlid2.replace("notex.", "").replace(".note","")
        document.querySelector("#notesearch").value=songlid2.replace("notex.", "").replace(".note","")
        songlid.replace("note.", "")
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
    document.querySelector("#notesearch").addEventListener("keyup", (e) => {
      if (e.keyCode == 13) {
        noteserchval = document.querySelector("#notesearch").value;
        notesearched = noteserchval.replaceAll(" ", "")
        songstwoli.forEach(songl => {
        songl.className="";
        });
        document.getElementById(`notex.${notesearched}.note`).className ="active"
        transpose(eval("notex." + notesearched + ".note"), eval(songkey.value + "key"), eval("notex." +
          notesearched +
          ".beat"))
      }
    })
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
      console.log("html", note, key)

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
          console.log("notei:" + notei, note[i])
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
          // console.log(result)
          newscale.push(result);

        } else {
          // onee transpose C=>D
          newscale.push(key[Ckey.indexOf(note[i])]);

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
      return newscale;
    }

    function tabledisplay(na, beat) {
      console.log("html");

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

    function maketable(numoftab) {
      console.log("html", numoftab)

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
  </script> -->