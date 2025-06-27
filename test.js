const fizzbuzz = require('./index.js');

describe("Fizzbuzz Game", ()=>{
	test("should return num if input not multiple 3 and 5",()=>{
		const actual = fizzbuzz(1);
		const expected = 1;
		expect(actual).toBe(expected)
	})
	test("should return num if input equal multiple3",()=>{
		const actual = fizzbuzz(3);
		const expected = "fizz";
		expect(actual).toBe(expected)
	})
	test("should return num if input equal multiple5",()=>{
		const actual = fizzbuzz(5);
		const expected = "buzz";
		expect(actual).toBe(expected)
	})
	test("should return num if input equal multiple3 && 5",()=>{
		const actual = fizzbuzz(15);
		const expected = "FizzBuzz";
		expectn(actual).toBe(expected)
	})
})
