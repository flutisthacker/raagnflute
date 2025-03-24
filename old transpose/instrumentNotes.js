
var notesX={"g" : "घुँ","n" : "ना","N" : "न्","r" : "रा","k" : "खाे","t" : "ता","d" : "ध्याँ",
    "c" : "चा","-" : "-"}
    var notesChanges={
      notekeya:["g","n","N","r","k","t","d","c","-"],
        notekeyb:["3'","gf","G","/f","vf]","tf","WofF","rf","-"],
        notekeyc:["घुँ","ना","न्","रा","खाे","ता","ध्याँ","चा","-"]
    }
    
    var blankfour=["","","",""]
    var blanknhya=["","Nhya","",""]
    var noted={"choose":[],
      "note":[["kk-k","tkt","dgn","d","tggn","tggn","tggn","d","kk-k","tkt","gnng","d","gnt","gnngn","gnng","d"],blankfour,
      ["kk","k","tg","gn","k","-","tg","d","kk","k","tg","gt","gn","ng","nn","gn","tt","k","ktk","tt","kk","tk","tk","tt","kt","tk","tt","k","g","g","t","g","t","g","gn","t","-","t","-","tg","gn","kt","t","gn","n","gn","nn","gn","n","gn","nn","gn","gn","gn","gn","gn","ng","tt","kt","d","-","-","t","k","-","-","-"]],
      "note1":[["dtk","ktk","tktk","ktk","d-t","d-t","d","k"]  ,blankfour,
      ["dt","gnng","k","tgd","dt","gnng","k-t","gnng","dd","tgd","kttg","d","kttg","ntkt","kttk","d","dtk","tktt","dd","t","kkk","tktt","tk-d","ddkk","tgd","k","-tg","gn","-"]],
    "own":[["g","g","g","ttk","ttk","g","g","g","g","g","ttk","ttk","g","tg","g","-","tt","gn","kk","tk","gk","tg","g","-","d","ttkt","t","ttkt","d","ttkt","t","ttkt","tg","t","tt","k","tk","t","tt","k","k","kkk","tktk","t","gnNc","gg","tgtg","t","k","kkk","tktk","t","tggg","tgg","tgtg","t","k","kkk","tktk","t","t-tt","gt","gt","t","dd","ttkt","dd","ttkt","dd","ttkt","d","-","dd","ttkt","dd","ttkt","dt","dt-d","d","-"],blankfour,
    ["d","-t","d","d","kt","tk","t","-","tt","kt","tk","tt","kt","tk","t","-","tk","d","d","tt","kt","d","d","t","k","tk","tt","kt","kt","tk","t","-","t","kt","tg","gn","tg","gn","tg","gn","d-t","d-t","d","d","-","tg","gn","t","-","ttk","ttk","k-t","kt","tk","kt","tk","t","kttk","tk","t","tt","t-tt","kttk","t","-","k-k","tk","tk","tt","ktt","kttk","t","-"]],
            "dyalhya1":["gn","tg","gn","nNt","ttkt","tgnr","kttk","tg","gnkt","tgnr","kttk","ntt","ktg","tgnr","ktg","tgnr","g-nr","k-t","ttkt","tgnr","gn"],
            "dyalhya2":["gk","tg","gk","nt","ttkt","tgnr","kttk","tg","gnkt","tgnr","kttk","ntt","ktg","tgnr","ktg","tgnr","g-nr","k-t","ttkt","tgnr","gn"],
            "dyalhya3":["gnkt","tg","gnkt","nt","ttkt","tgnr","kttk","tg","gnkt","tgnr","kttk","ntt","ktg","tgnr","ktg","tgnr","g-nr","k-t","ttkt","tgnr","gn"],
            "dyalhya4":["gn","gn","gn","gn","gn","ng","n","d","tt","kt","tg","nr","kt","tk","t","d","gnkt","tgnr","kttk","ntt","ktg","tgnr","ktg","tgnr","g-nr","k-t","ttkt","tgnr","gn"],
            "dyalhya5":["tkt","tkt","t-tt","kt","tg","tg","kt","gg","gnr","kttg","t-tt","kt","tkt","tkt","t-tt","kt","tg","tg","kt","gg","gnr","kttg","gnr","kttg","gg","tgnr","g","gngn","gnkt","gktg","g","n-t"],
            "nhya1":[["t","kt","d","d","tt","kt","d","d","t-kt","t-kt","t-kt","dd","d-kt","t-kt","t-kt","dd","ttkt","tgnr","kttk","gnd","ttkt","tgnr","kt-t","-"],blankfour,["t","d","nd","k","-","t","tk","t","d","n","d","t","d","tt","kt","d","gn","tg","gn","tk","t","tk","t","k","tt","kt","kt","tk","tt","kt","kt","tk","t","tk","t","tk","t","gn","kt","d","g","-","-"]],
    "nhya2":[["-","-","-","t","t","g","gn","ng","d","g","-","t","t","kt","gn","kt","d","g","-","t","t","kt","gn","kt","d","g","-","t","t","g","gn","ng","d","g","t","t","tt","kt","gn","kt","d","g","t","t"],
    blankfour,
    ["tt","kt","gn","kt","k","-","tg","d","tt","kt","gn","kt","gn","kt","g","n","gn","kt","g","n","gn","kt","g","n","g","nr","kt","tk","t","tt","kt","tk","tg","nr","kt","t","kt","tg","nr","kt","d","-","-","t","k","-","tg","d"]],
    "nhya3":[["d","d","-","d","d","tt","kt","tk","d","td","t","d","d","tt","kt","tk","tk","td","-t","d","tk","td","-t","d","tk","td","-n","d","d","tt","kt","tk","d","g","n","g","d","tt","kt","tk","n","d","n","d","d","tt","kt","tk"],
    blankfour,
    ["d","tt","k","t","k","-","tg","d","d","tt","k","t","tg","d","tg","d","tg","d","tt","kt","d","t","-","t","d","tt","kt","tk","d","tt","kt","tk","d","t","k","t","k","t","gn","kt","d","g","-","t","k","-","tg","d","gn","gn","gn","n","k","-","t","g","d","gn","gn","gn","n","tt","kt","kt","t","t","d","t","d","td","tt","kt","t","dd","tt","kt","d","t","t","d","tk","t","t"]
    ],
    "nhya4":[["g","ng","n","d","gn","ng","ng","d","tt","kt","d","d","t","k","t","t","t","kt","d","kt","d","kt","d","kt","tg","g","tg","nr","kt","kt","t","t"],blankfour,["kt","kt","tg","nr","k","-","tg","d","kt","kt","tg","nr","kt","kt","g","nr","kt","kt","tg","nr","kt","kt","-","t","gn","kt","kt","kt","kt","tg","nr","kt","d","-","-","t","k","-","t","d"]],
    "nhya5":[["g","gn","kt","g","gn","kt","g","n","tg","nr","kt","g","kt","kt","t","t","g","g","n","d","-","-","t","t","gn","ng","n","d","-","-","t","t","g","g","n","d","k","-","t","t","gn","ng","n","d","k","-","t","t","kt","gg","n","d","k","-","t","t","d","tk","d","n","kt","kt","kt","t","t-g","g","n","d","kt","kt","kt","t"],blankfour,["gnNc","gn","k","tgd","gnNc","gn","tgnr","gngn","gnNc","gn","tgnr","gngn","gnNc","gn","gnNc","gn","gnr","kttk","tNtt","ktt","kttg","nrkt","d","t-k","tgd"]],
    "nhya6":[["ktk","tt","ktk","tt","kttk","tt","kttk","tg","dg","tt","ktk","tt","ktk","tt","ktk","tt","kt","gn","gn","-t","gn","ng","nr","gn","ng","nr","-gn","-gn","-t"],blankfour,["gn","ng","n","-","k","tg","d","gn","ng","n","tg","t","tg","t","d","gn","ng","n","d","gn","ng","n","d","gn","kt","kt","kt","kt","tg","nr","kt","d","-","-t","k","-","tg","d"]],
    "nhya7":[["t","t","tg","nt","kt","tg","nt","kt","t","t","tg","nt","kt","tk","t","tt","kt","tk","g","tg","nt","kt","tg","tg","nt","kt","g","tg","nt","kt","t","-"],blankfour,
    ["t","tk","t","d","gn","d","k","-","t","tk","t","d","gn","d","n","d","gn","d","t","d","gn","d","gn","gn","d","tk","t","d","gn","d","gn","gn","d","t","d","gn","d","gn","gn","d","-","gn","gn","d","-","gn","gn","d","-","d","tt","kt","tk","t","tt","kt","tk","tg","nr","kt","tk","kt","tg","nt","kt","d","-","-","t","k","-","tg","d"]],
    "nhya8":[["d","kt","tg","d","kt","tk","d","tg","d","g","t","t","k","tk","t","t","d","nd","-n","d","nd","-n","d","tg","d","g","t","t","k","tk","t","t","dt","dt","d","-","dd","dg","tt","k","-","tk","t","t"],blankfour,["d","kt","tg","d","k","-","tg","d","d","kt","tg","d","kt","tg","d","tg","t","d","tt","kt","n","d","tt","kt","t","d","n","d","tg","gn","d","-","d","gn","tg","gn","tg","gn","d","-","d","td","-n","d","kt","tg","nr","kt","d","-","-","t","k","-","tg","d","dd","ttkt","dd","ttkt","dd","dt-d","t-d","d"]],
    "nhya9":[["tk","tgd","tk","tgd","tk","tgd","t","kttk","gn","d","t","t","tk","tgd","tk","tgd","tk","tgd","t","kttk","gn","d","t","t","dNtt","gnd","tgnr","gnd","kttk","gnd","t","t","dNtt","gnd","tgnr","gnd","kttk","gnd","t","t"],blankfour,["dkt","dd","kt","tkt","ttkt","tktt","kt","tkt","dkt","dd","kt","tkt","ttkt","tktt","kt","tkt","tkt","dd","tkt","dd","kttk","gnd","k","tgd"]],
    "dhyachahiliu":[["gnr","gnr","gn","tg","gnr","gnr","gn","tg","gnr","gn","tg","tgnr","gnr","kt","gn","tg","gn","ttk","t","ttt","kt","kttk","t","t","ttt","kt","kttk","ttkt","ktt","ktt","kt","tg"],blankfour,["gn","ng","nN","tt","kr","rk","rN","tt","gn","ng","tt","kt","tg","nr","gn","gn","gnNc","gg","tgnr","kk","gnNc","gg","tgnr","kk","gkt","gk","tgnr","gk","gkt","gk","tgnr","gk","gk","tg","kt","g","gn"]],
    "kwaweu":["t","tkt","tkt","g","n","-t","tkt","tkt","gn","-t","gnNc","gg","gn","-t","gnNc","gg","gn","gnr","ktr","kttk","tg","ttkt","tktt","kttk","tg","gnr","ktr","gnr","ktr","gg","tgnr","gn","-"],
    "thawoniu":["t","g","g","k","tg","g","g","k","t","g","g","k","t","-","t","-","t","tt","kt","t","kt","tk","t","tt","kt","tk","gn","kt","t","-","t","-","g","tg","nt","kt","tg","ng","ttkt","g","tg","nt","kt","t","t"]
    
    
    }
    