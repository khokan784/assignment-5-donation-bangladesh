function getInputFieldValueById(id){
    const inputValue = document.getElementById(id).value;
    const inputValueNumber = parseFloat(inputValue);
    return inputValueNumber;
}

function getTextFieldValueById(id){
    const textValue = document.getElementById(id).value;
    const textValueNumber = parseFloat(textValue);
    return textValueNumber;
}