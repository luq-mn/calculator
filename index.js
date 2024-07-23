function Calculate() {
    var result

    // Get the values of the two input fields
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;

    // Get the selected operation from the dropdown
    var dropdown = document.getElementById("operation");
    var operation = dropdown.value;

    // Perform the selected operation
    if (operation === "add") {
        var result = parseFloat(num1) + parseFloat(num2);

    } else if (operation === "subtract") {
        var result = parseFloat(num1) - parseFloat(num2);

    } else if (operation === "multiply") {
        var result = parseFloat(num1) * parseFloat(num2);

    } else if (operation === "divide") {
        var result = parseFloat(num1) / parseFloat(num2);

    }

    // Special case
    if ((operation === "divide") && (num1 == 9) && (num2 == 11)) {
        var result = "Porsche 911 GT3 RS"
        document.getElementById("image").src = "assets/trolling-content.gif"
    }

    // Display the result in the "result" element
    console.log(`Result: ${result}`);
    document.getElementById("result").innerHTML = result;
}