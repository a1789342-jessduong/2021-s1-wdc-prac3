//<!-- Task 3.1-->

var num = 1;

function mouseOver() {
	document.getElementById("mcount").innerHTML = num++;
  }

//<!-- Task 3.2-->

var display = "";

function mouseClick() {

    var date = new Date();

    var time = document.getElementsByClassName("post-time")

    var post = document.getElementsByClassName("post-content");

    display = display+date+"<br/>"+"<br/>"+post[0].value+"<br/>"+"<br/>";

    time[0].innerHTML = display;



}