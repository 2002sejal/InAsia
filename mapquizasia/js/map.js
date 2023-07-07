var href;
var cursor = document.getElementById('tooltip');

var text =  document.getElementById('tooltipText');
var div1 =  document.getElementById("mapcontainer");
var div2 =  document.getElementById("splash");
var div3 =  document.getElementById("loader");
var div4 =  document.getElementById("cluecontainer");
var heading = document.getElementById("heading");
// document.getElementById("showCountry").innerHTML = "You are in "+name;
document.addEventListener('mousemove', function(e){
    var x = e.pageX
    var y = e.pageY
    cursor.style.left =  (x - 160)  + "px";
    cursor.style.top = (y - 1100) + "px";
});


 function updatestate(name){
    cursor.style.opacity ="1";
    text.textContent = name;
 }

 function state(name){
    heading.textContent = "Welcome to "+ name;
    div1.style.display = "none";
    div2.style.display = "block";
    cityloader();
    localStorage.setItem("statename", (name.split(/\s/).join('')));
    document.getElementById("inst").style.visibility="hidden";
 }
 

function removestate(){
    cursor.style.opacity ="0";
}

function nostate(){
    alert("Sorry! Currently No data");
}

function cityloader(){
    
        setTimeout(() => {
            div2.style.display = "none";
            div3.style.display = "block";
        }, 2500);
    
}




