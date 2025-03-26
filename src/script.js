 function generateTriangle() {
        const rows = parseInt(document.getElementById("number").value);
        if(isNaN(rows) || rows <= 0) {
          alert("Por favor, insira um número válido.");
          return;
        }

        let triangle = "";
        for (let i = 1; i <= rows; i++) {
          triangle += "-".repeat(i) + "\n";
        }

        document.getElementById("result").textContent = triangle;
      }
