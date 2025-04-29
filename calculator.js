let displayValue = '0';

function updateDisplay() {
  document.getElementById('display').innerText = displayValue;
}

function appendValue(val) {
  if (displayValue === '0') {
    displayValue = val;
  } else {
    displayValue += val;
  }
  updateDisplay();
}

function clearDisplay() {
  displayValue = '0';
  updateDisplay();
}

function calculate() {
  try {
    displayValue = eval(displayValue).toString();
  } catch {
    displayValue = 'Error';
  }
  updateDisplay();
}

function toggleSign() {
  if (displayValue !== '0') {
    if (displayValue.charAt(0) === '-') {
      displayValue = displayValue.slice(1);
    } else {
      displayValue = '-' + displayValue;
    }
  }
  updateDisplay();
}
