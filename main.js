function processingSelectedFunction () { 
    let input = document.getElementById("dataBox").value; 
    let select = document.getElementById("selectFunc");
    let outputArea = document.getElementById("outputArea");
    let selectedFunction = select.options[select.selectedIndex].value;


    let result; 

    switch (selectedFunction) { 
        case "factorial": 
            result = factorial(Number(input));
            break;
        case "reverseWordNumber": 
            result = reverseWordNumber(input); 
            break; 
        case "uppercase": 
            result = upperCaseAfterEachDot(input); 
            break; 
        case "loopDemo": 
            result = loop(input); 
            break;
        default: 
            result = "Invalid function selection"; 
    }

    outputArea.innerHTML = result; 
}


function factorial (number) { 
    let input = document.getElementById("dataBox").value; 
    let outputArea = document.getElementById("outputArea");
    if (isNaN(input) || input === "") { 
        document.getElementById("dataBox").classList.add("invalid-input"); 
        return outputArea.innerHTML = "Please enter a number in data box."
    } else {
        document.getElementById("dataBox").classList.remove("invalid-input"); 
        let sum = 1; 
        for (let i = 1; i <= number; i++) { 
            sum = sum * i; 
            } 
        return sum;    
    }                   
} 


function reverseWordNumber (word) {
    let input = document.getElementById("dataBox").value; 
    let outputArea = document.getElementById("outputArea");
    if (input === "") { 
        document.getElementById("dataBox").classList.add("invalid-input"); 
        return outputArea.innerHTML = "Please enter a word or a number in data box."
    } else {
    document.getElementById("dataBox").classList.remove("invalid-input"); 
    return word.split("").reverse().join(""); 
    }
}

function upperCaseAfterEachDot (string) {
    let input = document.getElementById("dataBox").value; 
    let outputArea = document.getElementById("outputArea");
    if (Number(input) || input === "") { 
        document.getElementById("dataBox").classList.add("invalid-input"); 
        return outputArea.innerHTML = "Please enter a word or a sentence in data box."
    } else {
        document.getElementById("dataBox").classList.remove("invalid-input"); 
        return string.replace(/(^|\. *)([a-z])/g, function(match) {
            return match.toUpperCase();
        });
    }
}   

function loop (userInput) { 
    let input = document.getElementById("dataBox").value; 
    let outputArea = document.getElementById("outputArea");
    if (input === "") { 
        document.getElementById("dataBox").classList.add("invalid-input"); 
        return outputArea.innerHTML = "Please enter a number or a word in data box."
    } else if (Number(input)) {
    document.getElementById("dataBox").classList.remove("invalid-input");
    let sequence = "";
        for (let i = 1; i <= userInput; i++){ 
        sequence += i + ", "; 
        }
        return sequence.slice(0, -2); 
    } else {
        let loopedString;
        for (let i = 0; i < userInput.length; i++) { 
            loopedString = userInput.split("").filter(char => char !== " "); 
        }
        return(loopedString); 
    }
}

