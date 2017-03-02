function bubbleSort(arr) {
    var swapCounter = 0;

    for (var j = 0; j < arr.length; j++) {
        for (var i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                var swapped = swap(arr[i], arr[i + 1]);
                console.log("swapped", swapped);
                arr = arr.slice(0, i).concat(swapped, arr.slice(i + 2));
                //swapped.concat(arr.slice(i + 2));
                console.log("array after swap", arr);
                swapCounter++;
                console.log("swapcounter", swapCounter);
            }
        }
    }

    return arr;
}

function swap(a, b) {
    var temp = a;
    a = b;
    b = temp;

    return [a, b];
}
