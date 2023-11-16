function Triangle(height) {
    for (let i = 1; i <= height; i++) {
      let row = '';
      for (let j = height - i; j > 0; j--) {
        row += ' ';
      }
      for (let k = 1; k <= 2 * i - 1; k++) {
        row += '*';
      }

      console.log(row);
    }
  }
  Triangle(5);
  

  "    *"
  "   ***"