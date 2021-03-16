// Very simple tests don't need to import anything, Jest will simply pick them
// up and run them.
describe('A simple test suite, no Selenium involved', () => {
    it('a simple test', () => {
        expect(1).toEqual(1);
    });
});

test('A stand alone test', () => {
    expect(1).toEqual(1);
});
