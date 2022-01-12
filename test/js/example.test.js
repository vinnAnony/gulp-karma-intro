function testMe(value) {
    return value;
}
//Using Jasmine
describe("Vinn's", function() {

    it("Test 1", function() {
        expect(testMe(4)).toBe(4);
    });

    it("Test 2", function() {
        expect(testMe(2)).not.toBeGreaterThan(5);
    });
});

//Using Jest
const carsList = [
    'bmw',
    'vw',
    'Toyota ',
    'merc',
    'Peugot',
];

test('Check for car in array', () => {
    expect(carsList).toContain('merc');
    expect(new Set(carsList)).toContain('merc');
});