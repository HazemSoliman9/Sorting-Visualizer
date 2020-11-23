function bubbleSort (myArray){
    l = myArray.length - 1;
    for (i = 0 ; i < myArray.length ; i++){
        console.log(JSON.stringify(array));
        for (j = 0; j< l; j++){
            if (myArray[j] > myArray[j +1]){
                // 8ayar loon (myArray[j], myArray[j+1])
                temp = myArray[j];
                myArray[j] = myArray [j+1];
                myArray [j+1] = temp;
                for (k = 0; k < 10000000;k++);
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

function selectionSort (myArray){
    console.log("here");
    for (i = 0 ; i < myArray.length;i ++){
        console.log("here in ");
        min = 99999;
        minIndex = i;
        console.log(min);
        for (j = i; j< myArray.length; j ++){
            if (myArray [j] < min){;
                min= myArray[j];
                minIndex = j;
            }
        }
        myArray [minIndex] = myArray [i];
        myArray[i] = min;
        // lawen we ersem dol
    }
}  
function IndexSort(myArray){
    for ( i = 0; i < myArray.length; i++) {
        temp = myArray [i];
        for (j = i-1 ;j >=0; j--) {
            if (myArray [j] > temp) myArray [j+1] = myArray[j];
            else {
                myArray [j+1] = temp;
                break;}
            if (j == 0){
                myArray [0] = temp;
            }
        }
    } 
}
var array = [10,9,8,7,6,5,4,3,2,1];

bubbleSort(array);
console.log(JSON.stringify(array));