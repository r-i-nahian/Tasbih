var clicks = 0;

    
function onClick() {
	clicks += 1;
	document.getElementById("clicks").innerHTML = clicks;
};

function onClick2() {

	var r = confirm("This will reset the value of Tasbih !");
	if (r == true) {
    	clicks=0;
		document.getElementById("clicks").innerHTML = clicks;
	} 
	else {
    
	} 
};


