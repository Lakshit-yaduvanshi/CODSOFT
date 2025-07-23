const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
const clearBtn = document.getElementById('clear');
const equalsBtn = document.getElementById('equals');

let currentInput = '';
let result = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const val = button.getAttribute('data-value');

    if (val) {
      currentInput += val;
      display.textContent = currentInput;
    }
  });
});

equalsBtn.addEventListener('click', () => {
  try {
    result = eval(currentInput); // Basic, not secure for untrusted input
    display.textContent = result;
    currentInput = result.toString();
  } catch (e) {
    display.textContent = 'Error';
    currentInput = '';
  }
});

clearBtn.addEventListener('click', () => {
  currentInput = '';
  display.textContent = '0';
});
