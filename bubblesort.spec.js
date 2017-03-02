describe('Bubble Sort', function() {

    var arr = [3, 2, 1];


    before(function() {
        spyOn(bubbleSort, 'swap').and.callThrough(); // replace existing `tootsiepop['eat']` method
    });
    it('counts the correct number of swaps', function() {
        bubbelSort(arr);
        expect(swapCounter).toEqual(3);
    });

    it('handles an empty array', function() {
        expect(bubbleSort([])).toEqual([]);
    });

    it("sorts a 3 element array", function() {
        expect(bubbleSort(arr)).toEqual([1, 2, 3]);
    });
});
