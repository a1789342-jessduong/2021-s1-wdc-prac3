//<!-- Task 3.1-->

var num = 1;

function mouseOver() {
	document.getElementById("mcount").innerHTML = num++;
  }

//<!-- Task 3.2-->

function mouseClick() {


    var date = new Date();

    var time = document.getElementsByClassName("post-time")[0].innerHTML = date;

    var contents = document.getElementsByClassName("post-content")[0].innerHTML = document.getElementById("box").value;


}