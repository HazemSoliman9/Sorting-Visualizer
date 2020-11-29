window.onload = function () {
  var sortbtn = document.getElementById("sort");
  var generate_rand_array_btn = document.getElementById("generate");
  var array_container = document.getElementById("array_container");
  var algorithmSelector = document.getElementById("algorithm");
  var selectedSort = algorithmSelector.value;
  algorithmSelector.addEventListener("change", function (e) {
    selectedSort = algorithmSelector.value;
    console.log(selectedSort);
  });
  generate_rand_array_btn.addEventListener("click", function (e) {
    generateArray();
  });
  sortbtn.addEventListener("click", function (e) {
    if (selectedSort === "bubble") {
      animatedBubble(barArray);
    } else {
      console.log("e5tar haga 3edla ya sahby");
    }
  });
  var barArray;
  function generateArray() {
    var len = document.getElementById("size_slider").value;
    console.log(len);
    array_container.innerHTML = "";
    var arr = [];
    for (let i = 0; i < len; i++) {
      arr.push(Math.floor(Math.random() * Math.floor(95)) + 4);
    }
    barArray = arr;
    drawArray(arr);
  }

  async function animatedBubble(myArray) {
    drawArray(myArray);
    
    var time = document.getElementById("speed_slider").value * 2;

    l = myArray.length - 1;
    for (i = 0; i < myArray.length; i++) {
      for (j = 0; j < l; j++) {
        if (myArray[j] > myArray[j + 1]) {
          let promise = new Promise((resolve, reject) => {
            temp = myArray[j];
            myArray[j] = myArray[j + 1];
            myArray[j + 1] = temp;
          setTimeout(() =>
            resolve (myArray), 510 -time);
        });
      
        let result = await promise; // wait until the promise resolves (*)
      
        //console.log(JSON.stringify(result)); // "done!"
        drawArray(myArray);
        }
      }
      l -= l-- - l;
    }
  }
  function animatedBubblereversed(myArray) {
    drawArray(myArray);
    var l = 0;
    var time = document.getElementById("speed_slider").value * 2;
    var i = myArrray.length() - 1;

    function myFirstLoop() {
      setTimeout(function () {
        {
          var j = myArray.length - 1;

          function myLoop() {
            setTimeout(function () {
              if (myArray[j] > myArray[j - 1]) {
                temp = myArray[j];
                myArray[j] = myArray[j - 1];
                myArray[j - 1] = temp;
                drawArray(myArray);
              }
              j -= j-- - j;
              if (j > l) {
                myLoop();
              }
            }, 50 - time);
          }

          myLoop();
        }
        i -= i-- - i; //  increment the counter
        if (i >= 0) {
          //  if condition not met call the loop function
          myFirstLoop(); //  ..  again which will trigger another
        }
      }, 50 - time);
    }

    myFirstLoop(); //  start the loop
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
};
