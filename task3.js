//<!-- Task 3.1-->

var num = 1;

function mouseOver() {
	document.getElementById("mcount").innerHTML = num++;
  }

//<!-- Task 3.2-->

var textInput = " ";

function mouseClick() {


	var date = new Date();

  //var post = document.getElementById("posts");

  var time = document.getElementsByClassName("post-time");

  var contents = document.getElementsByClassName("post-content");

  textInput = textInput+date+"<br/>"+"<br/>"+contents[0].value+"<br/>"+"<br/>"+ "-------------"+"<br/>";

  time[0].innerHTML = textInput;


}