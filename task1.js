

function currentDateTime() {
  var x = document.getElementsByTagName("p"); //get the paragraph line
  document.getElementById("current_time").innerText = x[1].innerText; //<!-- second p = 1 -->


  var d = new Date();
	document.getElementById("current_time").innerHTML = d;

}

