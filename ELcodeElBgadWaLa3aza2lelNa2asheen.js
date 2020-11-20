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

var array = [2,5,4,3,6];
console.log(JSON.stringify(array));
bubbleSort(array);
console.log(JSON.stringify(array));
