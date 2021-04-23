

var button = document.querySelector("#button");
var input = document.querySelector("#message");
button.addEventListener('click', sendReq);
var divList = []
//button.onclick = function(){ }



//**********IMPORTANT
//**********when running from localhost, change below to ws:// protocol - I doubt you are using SSL cert for local dev
let socket = new WebSocket("ws://"  + location.host); //make the initial request to connect

socket.onmessage = function(event) {
  console.log(event.data);
  var topdiv = document.createElement('div')
  var chp = document.createElement("span");
  chp.classList.add('mdl-chip__text','mdl-chip', 'wawa')
  var d = new Date()
  var divv = document.createElement('div');
  chp.innerHTML ="On " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds()  +  " " + event.data;
  divv.appendChild(chp);
  document.body.appendChild(divv);
  window.scrollTo(0,document.body.scrollHeight);

  button.onclick= document.getElementById('message').value = '';
 
}




function sendReq() {
  //send specific messages to the ws server.
  socket.send(input.value);
}
