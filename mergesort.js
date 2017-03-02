function mergeSort(arr) {
    if (arr.length < 2) return array;
    var splits = split(array);
    var left = splits[0];
    var right = splits[1];

    return merge(mergeSort(left), mergeSort(right));
}

function split(wholeArray) {

    var i = Math.floor(wholeArray.length / 2); //math.floor not necessary here because slice only uses integers when you give it a fraction
    var firstHalf = wholeArray.slice(0, i);
    var secondHalf = wholeArray.slice(i);

    return [firstHalf, secondHalf];
}

//To keep this function in constant time, we will not use .shift() or anything similar.
//Using .shift() has to shift all the elements down, which would make this  O(n^2).
//Instead, we will use pointers.

function merge(arr1, arr2) {
    var sorted = [];
    var leftIdx = 0;
    var rightIdx = 0;

    while (leftIdx < left.length && rightIdx < right.length) {
        if (left[leftIdx] < right[rightIdx]) {
            merged.push(left[leftIdx]);
            leftIdx++;
        } else {
            merged.push(right[rightIdx]);
            rightIdx++;
        }
    }

    for (; leftIdx < left.length; leftIdx++) merged.push(left[leftIdx]);
    for (; rightIdx < right.length; rightIdx++) merged.push(right[rightIdx]);

    return sorted;
}
