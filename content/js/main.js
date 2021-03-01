var getNow = () => {
  let date = new Date()
  document.querySelector(".hourContainer p").innerText = `${date.getDay().toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})}/${date.getMonth().toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})}/${date.getFullYear()} - ${date.getHours().toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})}:${date.getMinutes().toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})}`
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
