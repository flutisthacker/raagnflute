
var reader; //GLOBAL File Reader object for demo purpose only

/**
 * Check for the various File API support.
 */
function checkFileAPI() {
    if (window.File && window.FileReader && window.FileList && window.Blob) {
        reader = new FileReader();
        return true; 
    } else {
        alert('The File APIs are not fully supported by your browser. Fallback required.');
        return false;
    }
}

/**
 * read text input
 */
function readText(filePath) {
    var output = ""; //placeholder for text output
    if(filePath.files && filePath.files[0]) {           
        reader.onload = function (e) {
            output = e.target.result;
            displayContents(output);
        };//end onload()
        reader.readAsText(filePath.files[0]);
    }//end if html5 filelist support
    else if(ActiveXObject && filePath) { //fallback to IE 6-8 support via ActiveX
        try {
            reader = new ActiveXObject("Scripting.FileSystemObject");
            var file = reader.OpenTextFile(filePath, 1); //ActiveX File Object
            output = file.ReadAll(); //text contents of file
            file.Close(); //close file "input stream"
            displayContents(output);
        } catch (e) {
            if (e.number == -2146827859) {
                alert('Unable to access local files due to browser security settings. ' + 
                 'To overcome this, go to Tools->Internet Options->Security->Custom Level. ' + 
                 'Find the setting for "Initialize and script ActiveX controls not marked as safe" and change it to "Enable" or "Prompt"'); 
            }
        }       
    }
    else { //this is where you could fallback to Java Applet, Flash or similar
        return false;
    }       
    return true;
}   

/**
 * display content using a basic HTML replacement
 */
function displayContents(txt) {
    var el = document.getElementById('main'); 
    // debugger
    txtJSON=JSON.parse(txt)
    maketable(8)
    tabledisplay(txtJSON.note,8)
  
    el.innerHTML = "my notes"; //display output in DOM
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
    table.id="capture"
    table.className = "table table-hover"
    thead = document.createElement('thead');
    thead.className = "thead table-dark text-light"
    trsname = document.createElement("tr");
    tdsname = document.createElement("td");
    tdsname.setAttribute("colspan","8")
    tdsname.className="table-dark text-info text-center notename"
  //   tdsname.innerHTML = `${notesearched}[${notex[notesearched].key}]`;
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
