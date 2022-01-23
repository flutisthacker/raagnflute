  var canvas = document.querySelector("#canvas");
  mainLine();
  mainLine2();
  // mainCkey(40, "#000", 0);
  mainFkey(60, "#000");
  // doublefekey(20);

  // context.font = "30px Arial";
  // context.fillText("Hello World", 10, 50);
  // Create gradient
  var grd = context.createLinearGradient(0, 0, 200, 0);
  grd.addColorStop(0, "red");
  grd.addColorStop(1, "white");

  // Fill with gradient
  // context.fillStyle = grd;
  // context.fillRect(10, 10, 150, 80);
  // context.fillStyle = "#FF0000";
  // context.fillRect(0, 0, 150, 75);


  // Create gradient
  var grd = ctx.createRadialGradient(75, 50, 5, 90, 60, 100);
  grd.addColorStop(0, "red");
  grd.addColorStop(1, "white");

  // Fill with gradient
  ctx.fillStyle = grd;
  ctx.fillRect(10, 10, 150, 80);

  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  var img = document.getElementById("scream");
  ctx.drawImage(img, 10, 10);

  function mainLine() {
    let context = canvas.getContext("2d")
    context.moveTo(0, 20);
    context.lineTo(1024, 20);
    context.stroke();
    context.moveTo(0, 30);
    context.lineTo(1024, 30);
    context.stroke();
    context.moveTo(0, 40);
    context.lineTo(1024, 40);
    context.stroke();
    context.moveTo(0, 50);
    context.lineTo(1024, 50);
    context.stroke();
    context.moveTo(0, 60);
    context.lineTo(1024, 60);
    context.stroke();
  }

  function drawbar(num) {
    let context = canvas.getContext("2d")
    context.moveTo(num, 20);
    context.lineTo(num, 60);
    context.stroke();
  }

  function mainLine2() {
    let context = canvas.getContext("2d")
    context.moveTo(0, 80);
    context.lineTo(1024, 80);
    context.stroke();
    context.moveTo(0, 90);
    context.lineTo(1024, 90);
    context.stroke();
    context.moveTo(0, 100);
    context.lineTo(1024, 100);
    context.stroke();
    context.moveTo(0, 110);
    context.lineTo(1024, 110);
    context.stroke();
    context.moveTo(0, 120);
    context.lineTo(1024, 120);
    context.stroke();
  }

  function mainAskey(num, color, secondline) {
    let context = canvas.getContext("2d")
    context.moveTo(num, 35);
    context.lineTo(num, 55);
    context.stroke();
    context.stroke();
    context.stroke();
    context.beginPath();
    context.arc(num - 5, 55, 5, 0, 2 * Math.PI);
    // context.arc(x, y, 40, 0, 2 * Math.PI);
    context.stroke();
    context.stroke();
    context.font = "15px Arial";
    context.fillText("#", num + 5, 45);
  }

  // function mainCkey(num, nstyle,secondline) {
  //   let context = canvas.getContext("2d")
  //   context.moveTo(num, 14);  small lines key
  //   context.lineTo(num, 32);
  //   context.stroke();
  //   context.stroke();
  //   context.beginPath();
  //   context.arc(num - 3, 29.5, 2, 0, 2 * Math.PI);
  //   context.fillStyle = nstyle;
  //   context.fill()

  //   // context.arc(x, y, 40, 0, 2 * Math.PI);
  //   context.stroke();
  //   context.stroke();
  // }

  function mainCkey(num, nstyle, secondline) {
    let context = canvas.getContext("2d")
    context.moveTo(num, 15 + secondline);
    context.lineTo(num, 40 + secondline);
    context.stroke();
    context.stroke();
    context.beginPath();
    context.arc(num - 5, 35 + secondline, 5, 0, 2 * Math.PI);
    context.fillStyle = nstyle;
    context.fill()

    // context.arc(x, y, 40, 0, 2 * Math.PI);
    context.stroke();
    context.stroke();
  }

  /*   // function mainCkey(num, nstyle,secondline) {
    //   let context = canvas.getContext("2d")
    //   context.moveTo(num, 15 + 60);
    //   context.lineTo(num, 35 + 60);
    //   context.stroke();
    //   context.stroke();
    //   context.beginPath();
    //   context.arc(num - 5, 95, 5, 0, 2 * Math.PI);
    //   context.fillStyle = nstyle;
    //   context.fill()

    //   // context.arc(x, y, 40, 0, 2 * Math.PI);
    //   context.stroke();
    //   context.stroke();
    // }
   */
  function mainckey(num, nstyle, secondline) {
    let context = canvas.getContext("2d")
    context.moveTo(num - 10, 60 + secondline);
    context.lineTo(num - 10, 40 + secondline);
    context.stroke();
    context.stroke();
    context.beginPath();
    context.arc(num - 5, 35 + secondline, 5, 0, 2 * Math.PI);
    context.fillStyle = nstyle;
    context.fill()

    // context.arc(x, y, 40, 0, 2 * Math.PI);
    context.stroke();
    context.stroke();
  }

  function mainDashkey(num, nstyle, secondline) {
    let context = canvas.getContext("2d")
    context.fillStyle = nstyle;
    context.fillRect(num, 30 + secondline, 20, 10);
    context.stroke();
    context.stroke();
    // context.arc(x, y, 40, 0, 2 * Math.PI);
  }

  function doubleCDkey(num, color, secondline) {
    let context = canvas.getContext("2d")
    mainCkey(num, color, secondline)
    context.moveTo(num, 15 + secondline);
    context.lineTo(num + 15, 10 + secondline);
    context.stroke();
    mainDkey(num + 15, color, secondline)
  }

  function doubleFkey(num, color, secondline) {
    let context = canvas.getContext("2d")
    mainFkey(num, color, secondline)
    context.moveTo(num, 35 + secondline);
    context.lineTo(num + 15, 35 + secondline);
    context.stroke();
    mainFkey(num + 15, color, secondline)
  }

  function doubleBkey(num, color, secondline) {
    let context = canvas.getContext("2d")
    mainBkey(num, color, secondline)
    context.moveTo(num, 20 + secondline);
    context.lineTo(num + 15, 20 + secondline);
    context.stroke();
    mainBkey(num + 15, color, secondline)
  }

  function doubleEkey(num, color, secondline) {
    let context = canvas.getContext("2d")
    mainEkey(num, color, secondline)
    context.moveTo(num, 5 + secondline);
    context.lineTo(num + 15, 5 + secondline);
    context.stroke();
    mainEkey(num + 15, color, secondline)
  }

  function doubleDkey(num, color, secondline) {
    let context = canvas.getContext("2d")
    mainDkey(num, color, secondline)
    context.moveTo(num, 10);
    context.lineTo(num + 15, 10);
    context.stroke();
    mainDkey(num + 15, color)
  }

  function doubleGkey(num, color, secondline) {
    let context = canvas.getContext("2d")
    mainGkey(num, color, secondline)
    context.moveTo(num, 30 + secondline);
    context.lineTo(num + 15, 30 + secondline);
    context.stroke();
    mainGkey(num + 15, color, secondline)
  }

  function doubleCkey(num, color, secondline) {
    let context = canvas.getContext("2d")
    mainCkey(num, color, secondline)
    context.moveTo(num, 15, secondline);
    context.lineTo(num + 15, 15, secondline);
    context.stroke();
    mainCkey(num + 15, color, secondline)
  }

  function doubleCEkey(num, color, secondline) {
    let context = canvas.getContext("2d")
    mainCkey(num, color, secondline)
    context.moveTo(num, 15);
    context.lineTo(num + 15, 5);
    context.stroke();
    mainEkey(num + 15, color)
  }

  function doubleCFkey(num, color, secondline) {
    let context = canvas.getContext("2d")
    mainCkey(num, color, secondline)
    context.moveTo(num, 15);
    context.lineTo(num + 15, 35);
    context.stroke();
    mainFkey(num + 15, color)
  }

  function doubleCGkey(num, color, secondline) {
    let context = canvas.getContext("2d")
    mainCkey(num, color, secondline)
    context.moveTo(num, 15);
    context.lineTo(num + 15, 30);
    context.stroke();
    mainGkey(num + 15, color)
  }

  function doubleCAkey(num, color, secondline) {
    let context = canvas.getContext("2d")
    mainCkey(num, color, secondline)
    context.moveTo(num, 15);
    context.lineTo(num + 15, 25);
    context.stroke();
    mainAkey(num + 15, color)
  }

  function doubleCBkey(num, color, secondline) {
    let context = canvas.getContext("2d")
    mainCkey(num, color, secondline)
    context.moveTo(num, 15);
    context.lineTo(num + 15, 20);
    context.stroke();
    context.stroke();
    mainBkey(num + 15, color)
  }

  function doublefekey(num, color, secondline) {
    let context = canvas.getContext("2d")
    mainfkey(num, color, secondline)
    context.moveTo(num - 10, 75);
    context.lineTo(num + 5, 80);
    context.stroke();
    context.stroke();
    mainekey(num + 15, color)
  }

  function mainfkey(num, color, secondline) {
    let context = canvas.getContext("2d")
    context.moveTo(num - 10, 55);
    context.lineTo(num - 10, 75);
    context.stroke();
    context.stroke();
    context.stroke();
    context.beginPath();
    context.arc(num - 5, 55, 5, 0, 2 * Math.PI);
    // context.arc(x, y, 40, 0, 2 * Math.PI);
    context.stroke();
    context.stroke();
  }

  function mainekey(num) {
    let context = canvas.getContext("2d")

    context.moveTo(num - 10, 80);
    context.lineTo(num - 10, 60);
    context.stroke();
    context.stroke();
    context.beginPath();
    context.arc(num - 5, 60, 5, 0, 2 * Math.PI);
    // context.arc(x, y, 40, 0, 2 * Math.PI);
    context.stroke();
    context.stroke();
  }

  function doubleGBkey(num, color, secondline) {
    let context = canvas.getContext("2d")

    mainGkey(num, color, secondline)
    context.moveTo(num, 30 + secondline);
    context.lineTo(num + 15, 20 + secondline);
    context.stroke();
    mainBkey(num + 15, color, secondline)
  }

  function doubleBAkey(num, color, secondline) {
    let context = canvas.getContext("2d")

    mainBkey(num, color, secondline)
    context.moveTo(num, 20 + secondline);
    context.lineTo(num + 15, 25 + secondline);
    context.stroke();
    mainAkey(num + 15, color, secondline)
  }

  function mainEkey(num, color, secondline) {
    let context = canvas.getContext("2d")

    context.moveTo(num, 5 + secondline);
    context.lineTo(num, 30 + secondline);
    context.stroke();
    context.stroke();
    context.beginPath();
    context.arc(num - 5, 25 + secondline, 5, 0, 2 * Math.PI);
    // context.arc(x, y, 40, 0, 2 * Math.PI);
    context.stroke();
    context.stroke();
  }

  function mainDkey(num, color, secondline) {
    let context = canvas.getContext("2d")

    context.moveTo(num, 10 + secondline);
    context.lineTo(num, 30 + secondline);
    context.stroke();
    context.stroke();
    context.beginPath();
    context.arc(num - 5, 30 + secondline, 5, 0, 2 * Math.PI);
    // context.fillStyle = nstyle;
    // context.fill();

    // context.arc(x, y, 40, 0, 2 * Math.PI);
    context.stroke();
    context.stroke();
  }

  function mainBkey(num, color, secondline) {
    let context = canvas.getContext("2d")
    context.moveTo(num, 20 + secondline);
    context.lineTo(num, 40 + secondline);
    context.stroke();
    context.stroke();
    context.stroke();
    context.beginPath();
    context.arc(num - 5, 40 + secondline, 5, 0, 2 * Math.PI);
    context.fillStyle = color;
    context.fill();
    // context.arc(x, y, 40, 0, 2 * Math.PI);
    context.stroke();
    context.stroke();
  }

  function mainAkey(num, color, secondline) {
    let context = canvas.getContext("2d")

    context.moveTo(num, 25 + secondline);
    context.lineTo(num, 45 + secondline);
    context.stroke();
    context.stroke();
    context.stroke();
    context.beginPath();
    context.arc(num - 5, 45 + secondline, 5, 0, 2 * Math.PI);
    // context.arc(x, y, 40, 0, 2 * Math.PI);
    context.fillStyle = color;
    context.fill();
    context.stroke();
    context.stroke();
  }

  function mainFkey(num, color, secondline) {
    let context = canvas.getContext("2d")

    context.moveTo(num, 35 + secondline);
    context.lineTo(num, 55 + secondline);
    context.stroke();
    context.stroke();
    context.stroke();
    context.beginPath();
    context.arc(num - 5, 55 + secondline, 5, 0, 2 * Math.PI);
    // context.arc(x, y, 40, 0, 2 * Math.PI);
    context.stroke();
    context.stroke();
  }




  function mainGkey(num, color, secondline) {
    let context = canvas.getContext("2d")

    context.moveTo(num, 30 + secondline);
    context.lineTo(num, 50 + secondline);
    context.lineWidth = 2;
    context.stroke();

    context.beginPath();
    context.arc(num - 5, 50 + secondline, 5, 0, 2 * Math.PI, false);

    context.fillStyle = color;
    context.fill();
    context.lineWidth = 1;
    context.strokeStyle = color;
    // context.arc(x, y, 40, 0, 2 * Math.PI);
    context.stroke();
    context.stroke();
  }
