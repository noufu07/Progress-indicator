var button = document.getElementById("btn1");
var complete = document.getElementById("com");
var para = document.getElementById("para");

function click() {
  var width = 0;
  //call the function in each time interval
  var id = setInterval(fill, 15);
  function fill() {
    if (width >= 100) {
      clearInterval(id);
    } else {
      console.log("cliked");
      width++;
      //it edit the width
      complete.style.width = width + "%";
      //edit the value
      para.innerHTML = width + "%";
    }
    if (width == 99) {
      complete.style = "background:green";
    }
  }
}
//when the button clicked click function is called
button.addEventListener("click", click);
