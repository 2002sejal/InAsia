var blur= document.getElementById("cluecontainer");
function rightans(){        
    document.getElementById("headermap").style.visibility = "hidden";
    document.getElementById("headerhelp").style.visibility = "hidden";                      
    blur.classList.toggle('active');

  var answer = document.getElementById('anspopup');
    answer.classList.toggle('active');
}

function wrongtoggle(){
    blur.classList.toggle('active');
    
    var answer = document.getElementById('wrongpopup');
      answer.classList.toggle('active');
}
function confetty(){

    // start
  const start = () => {
      setTimeout(function() {
          confetti.start()                                                                           //confetti
      }, 0); // 1000 is time that after 1 second start the confetti ( 1000 = 1 sec)
  };

  //  Stop

  const stop = () => {
      setTimeout(function() {
          confetti.stop()
      }, 1000); // 5000 is time that after 5 second stop the confetti ( 5000 = 5 sec)
  };

  start();
  stop();
}