

function currentDateTime() {
  var x = document.getElementsByTagName("p"); //get the paragraph line
  document.getElementById("current_time").innerHTML = x[1].innerHTML; //<!-- second p = 1 -->


  var d = new Date();
	document.getElementById("current_time").innerHTML = d;

}

