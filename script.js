window.onload = function () {
  var sortbtn = document.getElementById("sort");
  var generate_rand_array_btn = document.getElementById("generate");
  var array_container = document.getElementById("array_container");
  var scanTest = document.getElementById("scan");
  scanTest.addEventListener("click", (e) => {
    //testScan();
    testBubbleTany();
  });
  generate_rand_array_btn.addEventListener("click", function (e) {
    generateArray();
  });
  sortbtn.addEventListener("click", function (e) {
    //  generateSortedArray();
    //generateSortedArrayTESTTIME();
    // bubbleSort(barArray);
    animatedBubble(barArray);
  });
  var barArray;
  function generateArray() {
    array_container.innerHTML = "";
    var arr = [];
    for (let i = 0; i < 82; i++) {
      arr.push(Math.floor(Math.random() * Math.floor(95)) + 4);
    }
    barArray = arr;
    drawArray(arr);
    //   var bar = document.createElement("div");
    //   var barValue = document.createElement("p");
    //   barValue.innerHTML = height;
    //   bar.appendChild(barValue);
    //   bar.style.height = height + "%";
    //   bar.style.top = 100 - height + "%";
    //   bar.id = "bar";
    //   bar.classList.add("bar");
    //   document.getElementById("array_container").appendChild(bar);
    // }
    // barArray = document.querySelectorAll(".bar");
  }

  function bubbleSort(myArray) {
    drawArray(myArray);
    l = myArray.length - 1;
    for (i = 0; i < myArray.length; i++) {
      for (j = 0; j < l; j++) {
        if (myArray[j] > myArray[j + 1]) {
          // 8ayar loon (myArray[j], myArray[j+1])
          temp = myArray[j];
          myArray[j] = myArray[j + 1];
          myArray[j + 1] = temp;
          drawArray(myArray);
        }
      }
      l--;
    }
  }

  function animatedBubble(myArray) {
    drawArray(myArray);
    l = myArray.length - 1;

    var i = 0; //  set your counter to 1

    function myFirstLoop() {
      //  create a loop function
      setTimeout(function () {
        //  call a 3s setTimeout when the loop is called
        {
          var j = 0; //  set your counter to 1

          function myLoop() {
            //  create a loop function
            setTimeout(function () {
              //  call a 3s setTimeout when the loop is called
              if (myArray[j] > myArray[j + 1]) {
                // 8ayar loon (myArray[j], myArray[j+1])
                temp = myArray[j];
                myArray[j] = myArray[j + 1];
                myArray[j + 1] = temp;
                drawArray(myArray);
              } //  your code here
              j++; //  increment the counter
              if (j < l) {
                //  if the counter < 10, call the loop function
                myLoop(); //  ..  again which will trigger another
              } //  ..  setTimeout()
            }, 50);
          }

          myLoop(); //  start the loop
        } //  your code here
        i++; //  increment the counter
        if (i < myArray.length) {
          //  if the counter < 10, call the loop function
          myFirstLoop(); //  ..  again which will trigger another
        } //  ..  setTimeout()
      }, 50);
    }

    myFirstLoop(); //  start the loop
  }

  function testBubbleTany() {
    barArray = document.querySelectorAll(".bar");
    var time = document.getElementById("speed_slider").value;
    var i = 0;

    myTestLoop();
    function myTestLoop() {
      setTimeout(function () {
        var temp = barArray[i].style.height;
        barArray[i].style.height = barArray[i + 1].style.height;
        barArray[i + 1].style.height = temp;

        temp = barArray[i].style.top;
        barArray[i].style.top = barArray[i + 1].style.top;
        barArray[i + 1].style.top = temp;

        temp = barArray[i].childNodes[0].innerHTML;
        barArray[i].childNodes[0].innerHTML =
          barArray[i + 1].childNodes[0].innerHTML;
        barArray[i + 1].childNodes[0].innerHTML = temp;
        i++;
        if (i < barArray.length - 1) {
          myTestLoop();
        }
      }, 50 - time);
    }
  }
  function drawArray(ArrayRedraw) {
    array_container.innerHTML = "";
    for (let i = 0; i < ArrayRedraw.length; i++) {
      var height = ArrayRedraw[i];
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
  }

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
  function testScan() {
    barArray = document.querySelectorAll(".bar");
    var time = document.getElementById("speed_slider").value;
    var i = 1;
    barArray[0].style.backgroundColor = "red";
    myTestLoop();
    function myTestLoop() {
      setTimeout(function () {
        barArray[i - 1].style.backgroundColor = "aqua";
        barArray[i].style.backgroundColor = "red";
        if (i == 81) {
          barArray[i].style.backgroundColor = "aqua";
        }
        i++;
        if (i < barArray.length) {
          myTestLoop();
        }
      }, 50 - time);
    }
  }
};
