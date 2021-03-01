var getNow = () => {
  let date = new Date()
  document.querySelector(".hourContainer p").innerText = `${date.getDay().toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})}/${date.getMonth().toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})}/${date.getFullYear()} - ${date.getHours().toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})}:${date.getMinutes().toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})}`

  if (date.getHours() >= 6 && date.getHours <= 18) {
    document.querySelector("section").style.backgroundColor = "#ffffff";
    document.querySelector(".hourContainer").style.backgroundColor = "#f6f6f6";
    document.querySelector(".RGBContainer").style.backgroundColor = "#e5e5e5";
    document.querySelectorAll('h3, h4, p, i').forEach(e => e.style.color = "black");
  }
  else {
    document.querySelector("section").style.backgroundColor = "#373c44";
    document.querySelector(".hourContainer").style.backgroundColor = "#44474e";
    document.querySelector(".RGBContainer").style.backgroundColor = "#44474e";
    document.querySelectorAll('h3, h4, p, i').forEach(e => e.style.color = "white");
  }
}
getNow();

var getRGBA = () => {
  function sendColor(red, green, blue) {
    document.querySelector(".RGBContainer .circle").style.backgroundColor = `rgba(${red}, ${green}, ${blue})`
    document.querySelector(".RGBContainer h4").innerText = `rgba(${red}, ${green}, ${blue})`;
  }

  sendColor(128,128,128) // Send initially to White

  for (var i = 0; i < 3; i++) {
    document.querySelector(`.rangeContent input[TYPE=range]:nth-child(${i+1})`).addEventListener("input", ()=>{
      rPigment = document.querySelector(".rangeContent input[TYPE=range]:nth-child(1)").value;
      gPigment = document.querySelector(".rangeContent input[TYPE=range]:nth-child(2)").value;
      bPigment = document.querySelector(".rangeContent input[TYPE=range]:nth-child(3)").value;
      sendColor(rPigment, gPigment, bPigment);
    })
  }
}
getRGBA();
