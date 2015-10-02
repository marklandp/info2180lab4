var lost = false;
var start = false;
var win = false;
window.onload = function() {
	 // $("start").onclick = begin;
	 $("start").onmouseover = begin;
     $("end").onmouseover = end;
     $("status").onmouseover = lose;
     document.getElementsByTagName("P")[0].onmouseover = lose;
    var walls = $$("div#maze div.boundary");
    for (var i = 0; i < walls.length; i++) {
        walls[i].onmouseover = lose;
    }
};

// function enter(){
// 	start = true;
// };

function lose() {
	if(!win && start){
	lost = true;
	$("status").textContent = "You lose!";
    var walls = $$("div#maze div.boundary");
    for (var i = 0; i < walls.length; i++) {
        walls[i].addClassName("youlose");
    }
	}
};

function begin() {
    lost = false;
    start = true;
    win = false;
    $("status").textContent = "Find the end!";
    var walls = $$("div#maze div.boundary");
    for (var i = 0; i < walls.length; i++) {
        walls[i].removeClassName("youlose");
    }
    var inMaze = $("maze").onmouseover;
    if (inMaze){
    $("maze").onmouseout = lose;
}
};

function end() {
    if (!lost && start) {
        $("status").textContent = "You win! :-)";
		win = true;
    }else{
     	$("status").textContent = "Cheater! start at \"S\"";
     	lost = true;
     	win = true;
     }
};



