 function performOperation() {
            const num1 = document.getElementById("input1").value;
            const num2 = document.getElementById("input2").value;

            if (num1 === "" || num2 === "") {
                document.getElementById("result").textContent = "Please enter numbers";
                return;
            }

            const result = Number(num1) * Number(num2);

            document.getElementById("result").textContent =
                "The result is: " + result;
        }

        document.getElementById("btn").addEventListener("click", performOperation);



//     function performOperation() {
//     // Get user input from input fields
//     let num1 = parseInt(document.getElementById('input1').value);
//     let num2 = parseInt(document.getElementById('input2').value);
//     // Check if inputs are valid numbers
//     if (!isNaN(num1) && !isNaN(num2)) {
//     // Perform the operation
//                     let result = multiply(num1, num2);

//                     // Display the result
//                     displayResult(result);
//                 } else {
//                     displayResult('Please enter valid numbers');
//                 }
//             }

//             function multiply(a, b) {
//                 // Introduce a debugger statement to pause execution
//                 // debugger;

//                 // Multiply the numbers
//                 return a * b;
//             }

//             function displayResult(result) {
//                 // Display the result in the paragraph element
//                 const resultElement = document.getElementById('result');
//                 resultElement.textContent = `The result is: ${result}`;
//             }

//             window.addEventListener("DOMContentLoaded", function () {
//     document.getElementById("btn").addEventListener("click", performOperation);
// });