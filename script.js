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
    } else if (selectedSort === "select") {
      animatedSelectionSort(barArray);
    } else if (selectedSort === "index") {
      animatedIndexSort(barArray);
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
            setTimeout(() => resolve(myArray), 510 - time);
          });

          let result = await promise; // wait until the promise resolves (*)

          //console.log(JSON.stringify(result)); // "done!"
        }
        drawArrayWithInvar(myArray, i);
      }
      drawArrayWithInvar(myArray, i);
      l -= l-- - l;
    }
  }
  async function animatedSelectionSort(myArray) {
    drawArray(myArray);

    var time = document.getElementById("speed_slider").value;
    for (i = 0; i < myArray.length; i++) {
      min = 99999;
      minIndex = i;
      console.log(min);
      for (j = i; j < myArray.length; j++) {
        if (myArray[j] < min) {
          min = myArray[j];
          minIndex = j;
        }
      }

      let promise = new Promise((resolve, reject) => {
        myArray[minIndex] = myArray[i];
        myArray[i] = min;
        setTimeout(() => resolve(myArray), 510 - time);
      });

      let result = await promise; // wait until the promise resolves (*)
      // han7tag n8ayar loon 3ashan tban
      drawArray(myArray); // "done!"
    }
  }
  async function animatedIndexSort(myArray) {
    drawArray(myArray);

    var time = document.getElementById("speed_slider").value;
    for (i = 0; i < myArray.length; i++) {
      temp = myArray[i];
      b = false;
      for (j = i - 1; j >= 0; j--) {
        let promise = new Promise((resolve, reject) => {
          if (myArray[j] > temp) myArray[j + 1] = myArray[j];
          else {
            myArray[j + 1] = temp;
            b = true;
          }
          if (j == 0) {
            myArray[0] = temp;
          }
          setTimeout(() => resolve(myArray), 510 - time);
        });

        let result = await promise; // wait until the promise resolves (*)

        drawArray(myArray);
        if (b) break; // "done!"
      }
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
      if (i === 0) {
        var x = array_container.clientWidth;
        var y = (4 + 10) * ArrayRedraw.length;
        bar.style.marginLeft = (x - y) / 2 + "px";
      }
      bar.classList.add("bar");
      document.getElementById("array_container").appendChild(bar);
    }
  }
  function drawArrayWithInvar(ArrayRedraw, ind) {
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
      if (i === 0) {
        var x = array_container.clientWidth;
        var y = (4 + 10) * ArrayRedraw.length;
        bar.style.marginLeft = (x - y) / 2 + "px";
      }
      bar.classList.add("bar");
      document.getElementById("array_container").appendChild(bar);
      if (ArrayRedraw.length - i - 1 < ind || ind === ArrayRedraw.length - 1) {
        bar.style.backgroundColor = "#691EFF";
      }
    }
  }
};
