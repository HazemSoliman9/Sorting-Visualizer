function bubbleSort (myArray){
    l = myArray.length - 1;
    for (i = 0 ; i < myArray.length ; i++){
        for (j = 0; j< l; j++){
            if (myArray[j] > myArray[j +1]){
                // 8ayar loon (myArray[j], myArray[j+1])
                temp = myArray[j];
                myArray[j] = myArray [j+1];
                myArray [j+1] = temp;
                // ersem tany 
            }
        }
        l -= l---l;
    }

}

function bubbleSortRec (myArray, n ){ // pass length of array as n 
    if (n<= 1) return;
    for (i = 0 ; i < n; i++){
        if (myArray[i] > myArray[i +1]){
            // 8ayar loon (myArray[j], myArray[j+1])
            temp = myArray[i];
            myArray[i] = myArray [i+1];
            myArray [i+1] = temp;
            // ersem tany 
        }
    }
    bubbleSortRec (myArray, n-1);

}

function recursiveTest(myArray, n){ // recursive function to switch every 2 neighbouring elements for recursive animation test  
    if (n <=1) return ;
    else {  
        temp = myArray[n-1];
        myArray[n-1] = myArray [n-2];
        myArray [n-2] = temp;
        recursiveTest (myArray,n-2)

    }
}

var array = [2,5,4,3,6,9,5,8,98,43,787];
console.log(JSON.stringify(array));
recursiveTest(array,11);
console.log(JSON.stringify(array));