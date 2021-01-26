async function bubbleSort(myArray) {
  l = myArray.length - 1;
  for (i = 0; i < myArray.length; i++) {
    for (j = 0; j < l; j++) {
      if (myArray[j] > myArray[j + 1]) {
        let promise = new Promise((resolve, reject) => {
          temp = myArray[j];
          myArray[j] = myArray[j + 1];
          myArray[j + 1] = temp;
          setTimeout(() => resolve(myArray), 1000);
        });

        let result = await promise; // wait until the promise resolves (*)

        console.log(JSON.stringify(result)); // "done!"
      }
    }
    l -= l-- - l;
  }
}
function bubbleSortNew (first) {
  l = first.numList.length - 1;
  let current = first;
  for (i = 0; i < first.numList.length; i++) {
    for (j = 0; j < l; j++) {
      let myArray = new ArrayInstance (current.numList.slice());
      current.next = myArray;
      console.log("nexted");
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
}
let x = new ArrayInstance ([4,6,3,1,5,7,2,78,43]);
selectionSort (x);
let cont = true; 
async function display (list, delay){
while (list!= null && cont == true ){
  let promise = new Promise((resolve, reject) => {
    list.drawBta3();
    list = list.next;
  
    setTimeout(() => resolve(), delay);
  });
  await promise ; 
}}
display(x,1000);


function ArrayInstance (numList){
  this.numList = numList;
  this.next = null ; 
  this.previous = null; 
  this.drawBta3 = function () {
    console.log(JSON.stringify(this.numList));
  };
};
// let test1 = new ArrayInstance([1,2,3,4,5]);
// let test2 = new ArrayInstance (test1.numList);
// let current =  test1;
// for (i =0;i <5;i += i---i){
//   let neu = new ArrayInstance (current.numList.slice());
//   current.next = neu;
//   neu.previous = current;
//   current = neu;
// }

// current = test1;
// while (current.next!= null){
//   current.drawBta3();
//   current = current.next;
// }


async function f(myArray, j) {
  let promise = new Promise((resolve, reject) => {
    temp = myArray[j];
    myArray[j] = myArray[j + 1];
    myArray[j + 1] = temp;
    setTimeout(() => resolve(myArray), 1000);
  });

  let result = await promise; // wait until the promise resolves (*)

  console.log(JSON.stringify(result)); // "done!"
}
//beeb
// batal le3b
function bubbleSortRec(myArray, n) {
  // pass length of array as n
  if (n <= 1) return;
  for (i = 0; i < n; i++) {
    if (myArray[i] > myArray[i + 1]) {
      // 8ayar loon (myArray[j], myArray[j+1])
      temp = myArray[i];
      myArray[i] = myArray[i + 1];
      myArray[i + 1] = temp;
      // ersem tany
    }
  }
  bubbleSortRec(myArray, n - 1);
}

function recursiveTest(myArray, n) {
  // recursive function to switch every 2 neighbouring elements for recursive animation test
  if (n <= 1) return;
  else {
    temp = myArray[n - 1];
    myArray[n - 1] = myArray[n - 2];
    myArray[n - 2] = temp;
    recursiveTest(myArray, n - 2);
  }
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
      let neu = new ArrayInstance (current.numList.slice());
      current.next = neu;
      neu.previous = current;
      neu.numList[minIndex] = neu.numList[i];
      neu.numList[i] = min;
      current = neu;

 // wait until the promise resolves (*)

     // "done!"
  }
}
function InsertionSort(first) {
  let current = first;
  for (i = 1; i < current.numList.length; i++) {
    temp = current.numList[i];
    b = false;
    for (j = i - 1; j >= 0; j--) {
      let neu = new ArrayInstance (current.numList.slice());
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
}
