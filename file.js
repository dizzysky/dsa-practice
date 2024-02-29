function bubbleSort(array) {
	let length = array.length 
	
	for(let i=0; i < length; i++) {
		for (let j = 0; j < length; j++) {
			if(array[j] > array[j+1]) {
				let temp = array = array[j];
				array[j] = array[j+];
				array[j+1] = temp;
}
}
console.log('iteration ${i+1};', array) 
}
return array 
}
console.log(bubbleSor(array)); // [1,2,3,4,6]


function quicksort() {
const quickSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }

  let pivot = arr[0];
  let leftArr = [];
  let rightArr = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      leftArr.push(arr[i]);
    } else {
      rightArr.push(arr[i]);
    }
  }

  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
};
}
