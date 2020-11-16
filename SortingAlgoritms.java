package sorting;

public class SortingAlgoritms {
	public SortingAlgoritms() {
		// TODO Auto-generated constructor stub
	}
	private void  bubbleSort (bars [] list) {
		
		
	}
	private void selectionSort (bars [] list ) {
		for (int i = 0; i < list.length-1;i++) {
			int min = Integer.MAX_VALUE;
			int minLocation = -1;
			int numberOfSwaps = 0;
			for (int j = list.length -1; j >= i ;j-- ) {
				if (list [j] < min) {
					min = list [j];
					minLocation = j;
					numberOfSwaps += numberOfSwaps --- numberOfSwaps;
				}
			}
			if (numberOfSwaps == list.length - 1 - i ) break;
			if (minLocation != i) {
				list [minLocation] = list [i];
				list [i] = min;
			}
		}
	}
	private void insertionSort (bars [] list ) {
		for (int i = 1; i < list.length; i++) {
			int temp = list [i];
			for (int j = i-1 ;j >=0; j--) {
				if (list [j] > temp) list [j+1] = list[j];
				else {
					list [j+1] = temp;
					break;}
			}
		} 
	}
	private void mergeSort (bars [] list ) {
		bars [] aux = new int [list.length];
		mergeSortHelper(list, aux,0,list.length);
	
		list = aux;
	}
	private void mergeSortHelper (bars [] list, bars [] aux, int start, int end ) {
		if (start >= end-1) return;
		int mid = (start + end) / 2;
		mergeSortHelper (list, aux,start,mid);
		mergeSortHelper (list, aux, mid, end );
		merge (list, aux, start, mid, end);
		
	}
	private void merge (bars [] list, bars []aux, int start, int mid , int end ) {
		int firstListCounter = start;
		int secondListCounter = mid ;

		for (int i = start; i < end ; i++ ) {

			if  (list [firstListCounter] <= list [secondListCounter])  aux [i] = list[firstListCounter ++]; 
			else aux [i] =list [secondListCounter++];

			if (firstListCounter >= mid) {
				while ( i  < end-1 ) {
					aux [++i] 	= list [secondListCounter++]; 

				}
				break;
			}
			
			else if (secondListCounter >= end) {
				while ( i < end-1) {
					aux [++i] = list [firstListCounter ++];
	
				}
				break;
			}
			
			}
		for (int g = start; g < end; g++) {
			list [g] = aux [g];
		}
	}
	private void quickSort(int [] list ) {
		quickSortHelper (list, 0, list.length);
	}
	private void quickSortHelper  (int[] list, int beginIndex, int endIndex   ) {
		if (endIndex - beginIndex <= 0) {
			return;
		}
		else {
			int pivotLocation =(int)(Math.random()*(endIndex- beginIndex)) + beginIndex;
			int pivot =list [pivotLocation];
			int i = beginIndex-1 ;
			int j = endIndex;
			boolean left = false;
	
		while (true) {	
			 
			while (i <endIndex-1  && i <=j &&(list [++i] < pivot || i == pivotLocation)) {
				if (i == pivotLocation) {
					left = true;
					}

			}
			while (j > beginIndex &&j >= i && (list [--j] > pivot || j == pivotLocation ) ) {
				
				
			}
			
			if (j <= i) break;
			else{
				System.out.println ("swapping "+list [i] + ", " + list[j]);
			int temp = list [i];
			list [i] = list [j];
			list [j] = temp;
			
			}}
			
			System.out.println (i + ","  + j);
			if (left) {
				int temp = list [pivotLocation];
				list [pivotLocation] = list [j];
				list [j] = temp;
				System.out.println(pivot);
				System.out.print("[ ");
				for (int g = 0; g < list.length; g ++ ) {
					System.out.print(list[g]+ " , ");
				}
				System.out.println(" ] ");
			
				quickSortHelper (list, beginIndex, j);
				
				quickSortHelper (list, j+1, endIndex);
			}
			else {
				int temp = list [pivotLocation];
				list [pivotLocation] = list [i];
				list [i] = temp;
				System.out.println(pivot);
				System.out.print("[ ");
				for (int g = 0; g < list.length; g ++ ) {
					System.out.print(list[g]+ " , ");
				}
				System.out.println(" ] ");
			
				quickSortHelper (list, beginIndex, (i));
				
				quickSortHelper (list, i+1, endIndex);
			}
			
		
//		int temp = list [i];
//		list [i] = list [endIndex];
//		list [endIndex] = temp;
		
//		System.out.println(list [pivot]);
//		System.out.println(list [j]);
//			System.out.println ("firstlist " + beginIndex  + " " + (j-1) );
	
			}
	}
	
	

	public static void main (String [] args) {
		int [] l = new int [] {5,4,36,743,32,56,78,6,43,565,53};
		new SortingAlgoritms().quickSort(l);
		for (int i = 0; i < l.length; i ++ ) {
			System.out.println(l[i]);
		}
	}

}
