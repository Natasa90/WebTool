function processingSelectedFunction () { 
    let input = document.getElementById("dataBox").value; 
    let select = document.getElementById("selectFunc");
    let outputArea = document.getElementById("outputArea");
    let selectedFunction = select.options[select.selectedIndex].value;

    let result; 

    switch (selectedFunction) { 
        case "factorial": 
            result = factorial(parseInt(input));
            break;
        case "reverseWord": 
            result = reverseWord(input); 
            break; 
        case "uppercase": 
            result = input.toUpperCase(); 
            break; 
        case "loopDemo": 
            result = loop(parseInt(input)); 
            break;
        default: 
            result = "Invalid function selection"; 
    }

    outputArea.innerHTML = result; 
}


function factorial (number) { 
    let sum = 1; 
    for (let i = 1; i <= number; i++) { 
        sum = sum * i; 
        } 
        return sum;                   
    } 

function reverseWord (word) { 
    return word.split("").reverse().join(""); 
}

function loop (num) { 
    sequence = "";
    for (let i = 1; i <= num; i++){ 
        sequence += i + ", "; 
    }
    return sequence.slice(0, -2); 
}



