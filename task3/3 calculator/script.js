function appendToDisplay(value) {
    document.getElementById('display').value += value;
  }
  
  function calculate() {
    var expression = document.getElementById('display').value;
    var result = evaluateExpression(expression);
    document.getElementById('display').value = result;
  }
  
  function evaluateExpression(expression) {
    
    var regex = /(\d+\.?\d*)([\+\-\*\/])/;
    var match = expression.match(regex);
    
    if (!match) {
      return expression;
    }
    
    var num1 = parseFloat(match[1]);
    var operator = match[2];
    var num2 = parseFloat(expression.substr(match[0].length));
    
    
    if (operator === '+') {
      return (num1 + num2).toString();
    } else if (operator === '-') {
      return (num1 - num2).toString();
    } else if (operator === '*') {
      return (num1 * num2).toString();
    } else if (operator === '/') {
        
      if (num2 === 0) {
        return 'Error';
      }
      return (num1 / num2).toString();
    }
  }
  
  function clearDisplay() {
    document.getElementById('display').value = '';
  }
  