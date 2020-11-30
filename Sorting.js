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

async function selectionSort(myArray) {
  console.log("here");
  for (i = 0; i < myArray.length; i++) {
    //console.log("here in ");
    min = 99999;
    minIndex = i;
    console.log(min);
    for (j = i; j < myArray.length; j++) {
      if (myArray[j] < min) {
        min = myArray[j];
        minIndex = j;
      }
    }

    // lawen we ersem dol
    let promise = new Promise((resolve, reject) => {
      myArray[minIndex] = myArray[i];
      myArray[i] = min;
      setTimeout(() => resolve(myArray), 1000);
    });

    let result = await promise; // wait until the promise resolves (*)

    console.log(JSON.stringify(result)); // "done!"
  }
}
async function IndexSort(myArray) {
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
        setTimeout(() => resolve(myArray), 1000);
      });

      let result = await promise; // wait until the promise resolves (*)

      console.log(JSON.stringify(result));
      if (b) break; // "done!"
    }
  }
}
