window.onload = function () {
  var sortbtn = document.getElementById("sort");
  var generate_rand_array_btn = document.getElementById("generate");
  var array_container = document.getElementById("array_container");

  generate_rand_array_btn.addEventListener("click", function (e) {
    generateArray();
  });

  function generateArray() {
    array_container.innerHTML = "";
    for (let i = 0; i < 82; i++) {
      var height = Math.floor(Math.random() * Math.floor(99)) + 1;
      var bar = document.createElement("div");
      var barValue = document.createElement("p");
      barValue.innerHTML = height;
      bar.appendChild(barValue);
      bar.style.height = height + "%";
      bar.style.top = 100 - height + "%";
      bar.id = "bar";
      document.getElementById("array_container").appendChild(bar);
    }
  }
  sortbtn.addEventListener("click", function (e) {
    //  generateSortedArray();
    generateSortedArrayTESTTIME();
  });

  function generateSortedArrayTESTTIME() {
    array_container.innerHTML = "";
    var i = 4; //  set your counter to 4
    let time = document.getElementById("speed_slider").value;
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
        document.getElementById("array_container").appendChild(bar); //  your code here
        i++; //  increment the counter
        if (i < 86) {
          //  if the counter < 10, call the loop function
          myLoop(); //  ..  again which will trigger another
        } //  ..  setTimeout()
      }, 50 - time);
    }

    myLoop(); //  start the loop}

    function generateSortedArray() {
      array_container.innerHTML = "";
      for (let i = 5; i < 87; i++) {
        var height = i;
        var bar = document.createElement("div");
        var barValue = document.createElement("p");
        barValue.innerHTML = height;
        bar.appendChild(barValue);
        bar.style.height = height + "%";
        bar.style.top = 100 - height + "%";
        bar.id = "bar";
        document.getElementById("array_container").appendChild(bar);
      }
    }
  }
};

