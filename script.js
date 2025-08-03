document.getElementById('calculate').addEventListener('click', function() {
      const num1 = parseFloat(document.getElementById('num1').value);
      const num2 = parseFloat(document.getElementById('num2').value);
      const operator = document.getElementById('operator').value;
      let result = '';
      if (isNaN(num1) || isNaN(num2)) {
        result = 'Please enter valid numbers.';
      } else {
        switch(operator) {
          case '+':
            result = num1 + num2;
            break;
          case '-':
            result = num1 - num2;
            break;
          case '*':
            result = num1 * num2;
            break;
          case '/':
            result = num2 === 0 ? 'Cannot divide by zero' : num1 / num2;
            break;
        }
      }
      document.getElementById('result').innerText = result;
    });

    // Text changer functionality
    const textsInitial = ["Hello", "Welcome", "To", "My", "Class"];
    const textsChanged = ["Bye", "Good Bye", "To", "Your", "Class"];
    let changed = false;

    document.getElementById('change_text').addEventListener('click', function() {
      const divs = document.querySelectorAll('.division');
      const useChanged = !changed;
      const arr = useChanged ? textsChanged : textsInitial;
      divs.forEach((div, idx) => {
        div.textContent = arr[idx];
      });
      changed = useChanged;
    });