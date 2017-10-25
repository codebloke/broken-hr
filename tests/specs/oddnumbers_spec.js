require('./../../src/sign-file')(__filename, console.log);

/*
 * This is my implementation that works fine when
 * test case is run through Jasmine
 */
function oddNumbers(l, r) {
    if (l>r) return ''; // edge case check
    var limit=100000, // including limit of 10 to power of 5 (one hundred thousand)
        out=[]; // adding elements to output array
    for (var x=l; x<=r; x++) {
        if (x<=limit && x%2) {
            out.push(x);
        }
    }
    //console.log(out);
    return ''+out.join("\n");
}

describe('oddNumbers', function () {

    it('Range 2-5', function () {
        expect(oddNumbers(2, 5)).toBe('3\n5');
    });

    it('Range 3-9', function () {
        expect(oddNumbers(3, 9)).toBe('3\n5\n7\n9');
    });

    it('Range 96 - 97', function () {
        expect(oddNumbers(96, 97)).toBe('97');
    });
});