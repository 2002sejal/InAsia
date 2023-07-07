var div= document.getElementById("rulescontainer");

function help(){
    div.classList.toggle('active');
    document.getElementById("cluecontainer").classList.toggle('active');
	document.getElementById("knowyourcity").classList.toggle('active');
	document.getElementById("loader").classList.toggle('active');
	document.getElementById("splash").classList.toggle('active');
	document.getElementById("mapcontainer").classList.toggle('active');
}