
var btn = document.getElementById("myButton");
  var val = document.getElementById("myText");
  val.addEventListener("keypress", function(event){                              //enter button 
    if(event.key == "Enter"){
      event.preventDefault();
      btn.click();
    } 
  });
  

  var startingY = 0;

/*$(document.getElementById("knowcity")).keydown(function(e) {
    switch(e.which) {
        case 38:
        startingY -= 20;
        window.scrollTo(0, startingY);
        
        break;

        case 40: 
        startingY += 20;
        window.scrollTo(0, startingY);
        
        break;

        default: return;
    }
    e.preventDefault();
}); */
