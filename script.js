function calculate(operation) {
    let a = parseFloat(document.getElementById("a").value);
    let b = parseFloat(document.getElementById("b").value);
    
    
    let resultElement = document.getElementById("result");
    let result;
    if (operation === "add") {
        let b = parseFloat(document.getElementById("b").value);
        if (!isNaN(b)) {
        result = a + b + b;
    } else {
        result = a + b;
    }
    } else if (operation === "subtract") {
        result = a - b;
    } else if (operation === "multiply") {
        let b = parseFloat(document.getElementById("b").value);
        if (!isNaN(b)) {
            result = a * b * b;
        } else {
            result = a * b;
        }
    } else if (operation === "divide") {
        if (b === 0) {
            result = "Division par zéro impossible";
        } else {
            result = a / b;
        }
    }

    resultElement.textContent = "Résultat : " + result;
}
