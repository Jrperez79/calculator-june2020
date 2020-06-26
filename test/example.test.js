// IMPORT MODULES under test here:
// import example from '../example.js';
import { add, subtract, multiply, divide } from '../util.js';

const test = QUnit.test;

test('it should return 10 when passed 4 and 6', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const value1 = 4;
    const value2 = 6;
    const expected = 10;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = add(value1, value2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('it should return 5 when passed 8 and 3', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const value3 = 8;
    const value4 = 3;
    const expected = 5;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = subtract(value3, value4);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('it should return 21 when passed 7 and 3', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const value5 = 7;
    const value6 = 3;
    const expected = 21;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = multiply(value5, value6);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('it should return 4 when passed 12 and 3', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const value7 = 12;
    const value8 = 3;
    const expected = 4;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = divide(value7, value8);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});


