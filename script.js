window.onload = function () {
  var sortbtn = document.getElementById("sort");
  var generate_rand_array_btn = document.getElementById("generate");
  var array_container = document.getElementById("array_container");
  var bubleTest = document.getElementById("bubble");
  bubleTest.addEventListener("click", (e) => {
    testBubble();
  });
  generate_rand_array_btn.addEventListener("click", function (e) {
    generateArray();
  });
  var barArray;
  function generateArray() {
    array_container.innerHTML = "";
    for (let i = 0; i < 82; i++) {
      var height = Math.floor(Math.random() * Math.floor(95)) + 4;
      var bar = document.createElement("div");
      var barValue = document.createElement("p");
      barValue.innerHTML = height;
      bar.appendChild(barValue);
      bar.style.height = height + "%";
      bar.style.top = 100 - height + "%";
      bar.id = "bar";
      bar.classList.add("bar");
      document.getElementById("array_container").appendChild(bar);
    }
    barArray = document.querySelectorAll(".bar");
  }
  sortbtn.addEventListener("click", function (e) {
    //  generateSortedArray();
    generateSortedArrayTESTTIME();
  });

  function generateSortedArrayTESTTIME() {
    array_container.innerHTML = "";
    var i = 4; //  set your counter to 4
    var time = document.getElementById("speed_slider").value;
    function myLoop() {
      //  create a loop function
      setTimeout(function () {
        //  call a 3s setTimeout when the loop is called

        var height = i;
        var bar = document.createElement("div");
        var barValue = document.createElement("p");
        barValue.innerHTML = height;
        bar.appendChild(barValue);
        bar.style.height = height + "%";
        bar.style.top = 100 - height + "%";
        bar.id = "bar";
        bar.classList.add("bar");
        document.getElementById("array_container").appendChild(bar); //  your code here
        i++; //  increment the counter
        if (i < 86) {
          //  if the counter < 10, call the loop function
          myLoop(); //  ..  again which will trigger another
        } //  ..  setTimeout()
      }, 50 - time);
    }

    myLoop(); //  start the loop}
    barArray = document.querySelectorAll(".bar");
  }
  function testBubble() {
    barArray = document.querySelectorAll(".bar");
    var time = document.getElementById("speed_slider").value;
    var i = 1; //  set your counter to 1
    barArray[0].style.backgroundColor = "red";

    function myTestLoop() {
      //  create a loop function
      setTimeout(function () {
        //  call a 3s setTimeout when the loop is called

        //  your code here
        barArray[i - 1].style.backgroundColor = "aqua";
        barArray[i].style.backgroundColor = "red";

        i++; //  increment the counter
        if (i < barArray.length + 1) {
          //  if the counter < 10, call the loop function
          myTestLoop(); //  ..  again which will trigger another
        } //  ..  setTimeout()
      }, 50 - time);
    }

    myTestLoop(); //  start the loop
    barArray[i - 1].style.backgroundColor = "aqua";
  }
};
