// get dom elements
// get add-input-1
const addInput1 = document.getElementById('add-input-1');
// get add-input-2
const addInput2 = document.getElementById('add-input-2');
// get add-button
const boogerButton = document.getElementById('add-button');
// get the add-result span
const boogerSpan = document.getElementById('add-result');

// initialize state 

// set the event handler to the button
boogerButton.addEventListener('click', () => {
    // in the click event handler . . .
    // make sure we have the inputs (console.log)
    // make sure we have the span
    // make sure we have the .values of the inputs
    const value1 = addInput1.value;
    const value2 = addInput2.value;

    // add the two values together
    const sum = Number(value1) + Number(value2);

    // update the textContent of the span
    boogerSpan.textContent = sum;
});

//get dom elements
//get subtract-input-1
const subtractInput3 = document.getElementById('subtract-input-1');
//get subtract-input-2
const subtractInput4 = document.getElementById('subtract-input-2');
//get subtract-button
const noseButton = document.getElementById('subtract-button');
//get the subtract-result span
const noseSpan = document.getElementById('subtract-result');
//initialize state

//set the event handler to the button
noseButton.addEventListener('click', () => {
    const value3 = subtractInput3.value;
    const value4 = subtractInput4.value;
    const outcome = Number(value3) - Number(value4);
    noseSpan.textContent = outcome;
});

//get dom elements
//get subtract-input-1
const multiplyInput5 = document.getElementById('multiply-input-1');
//get subtract-input-2
const multiplyInput6 = document.getElementById('multiply-input-2');
//get subtract-button
const fingerButton = document.getElementById('multiply-button');
//get the subtract-result span
const fingerSpan = document.getElementById('multiply-result');
//initialize state

//set the event handler to the button
fingerButton.addEventListener('click', () => {
    const value5 = multiplyInput5.value;
    const value6 = multiplyInput6.value;
    const result = Number(value5) * Number(value6);
    fingerSpan.textContent = result;
});

const divideInput1 = document.getElementById('divide-input-1');
const divideInput2 = document.getElementById('divide-input-2');

const earButton = document.getElementById('divide-button');
const earSpan = document.getElementById('divide-result');

earButton.addEventListener('click', () => {
    const value7 = divideInput1.value;
    const value8 = divideInput2.value;
    const outcome = Number(value7) / Number(value8);
    earSpan.textContent = outcome;
});


