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
      bubbleSortNew (extCurrent);
    
    } else if (selectedSort === "select") {
      selectionSort (extCurrent);   
    } else if (selectedSort === "index") {
      InsertionSort(extCurrent);
    }
  });
   let extCurrent = new ArrayInstance ([0]);
  function generateArray() {
    var len = document.getElementById("size_slider").value;
    console.log(len);
    array_container.innerHTML = "";
    var arr = [];
    for ( i = 0; i < len; i++) {
      arr.push(Math.floor(Math.random() * Math.floor(95)) + 4);
    }
    var inV = [];
    for (i=0; i < len; i+= i---i){
      inV.push(false);
    }
    extCurrent.numList = arr;
    extCurrent.inVar = inV;
    
    extCurrent.drawBta3();
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
  function bubbleSortNew (first) {
    l = first.numList.length - 1;
    let current = first;
    for (i = 0; i < first.numList.length; i++) {
      for (j = 0; j < l; j++) {
        let myArray = new ArrayInstance (current.numList.slice(),current.inVar.slice());
        current.next = myArray;
        myArray.previous = current;
        if (myArray.numList[j] > myArray.numList[j + 1]) {
          
            let temp = myArray.numList[j];
            myArray.numList[j] = myArray.numList[j + 1];
            myArray.numList[j + 1] = temp;
        }
        current = myArray;
      }
      l -= l-- - l;
    }
    
    display();
    
  }
  function selectionSort(first) {
    let current = first;
   for (i = 0; i < first.numList.length; i++) {
     min = 99999;
     minIndex = i;
     
     for (j = i; j < first.numList.length; j++) {
       if (current.numList[j] < min) {
         min = current.numList[j];
         minIndex = j;
       }
     }
       let neu = new ArrayInstance (current.numList.slice(),current.inVar.slice());
       current.next = neu;
       neu.previous = current;
       neu.numList[minIndex] = neu.numList[i];
       neu.numList[i] = min;
       current = neu;
 
  // wait until the promise resolves (*)
 
      // "done!"
   }
   display();
 }
 function InsertionSort(first) {
  let current = first;
  for (i = 1; i < current.numList.length; i++) {
    temp = current.numList[i];
    b = false;
    for (j = i - 1; j >= 0; j--) {
      let neu = new ArrayInstance (current.numList.slice(),current.inVar.slice());
      current.next = neu;
      neu.previous = current;
      current = neu;
        if (current.numList[j] > temp) current.numList[j + 1] = current.numList[j];
        else {
          current.numList[j + 1] = temp;
          b = true;
        }
        if (j == 0) current.numList[0] = temp;

        if (b) break; 
    }
  }
  display();
}

  async function display (){
    while (extCurrent.next!= null  ){
     
      let promise = new Promise((resolve, reject) => {
        extCurrent.drawBta3();
        extCurrent = extCurrent.next;
      
        setTimeout(() => resolve(), 1000 - document.getElementById("speed_slider").value * 2);
      });
      await promise ; 
    }
    extCurrent.drawBta3();
  };
  function ArrayInstance (List, inVar){
    this.numList = List;
    this.inVar = inVar;
    this.next = null ; 
    this.previous = null; 
    this.drawBta3 = function () {
      array_container.innerHTML = "";
      for (let i = 0; i < this.numList.length; i++) {
        var height = this.numList[i];
        var bar = document.createElement("div");
        var barValue = document.createElement("p");
        barValue.innerHTML = height;
        bar.appendChild(barValue);
        bar.style.height = height + "%";
        bar.style.top = 100 - height + "%";
        bar.id = "bar";
        if (i === 0) {
          var x = array_container.clientWidth;
          var y = (4 + 10) * this.numList.length;
          bar.style.marginLeft = (x - y) / 2 + "px";
        }
        bar.classList.add("bar");
        document.getElementById("array_container").appendChild(bar);
      }
    };
   
  };
  function stepforward (){
    if (extCurrent != null && extCurrent.next != null ){ 
    extCurrent = extCurrent.next;
    extCurrent.drawBta3();
    }
  }
  function stepBackwards (extCurrent){
    if (extCurrent != null && extCurrent.previous != null ){ 
    extCurrent = extCurrent.previous;
    extCurrent.drawBta3();
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
