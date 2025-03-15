// Initialize the Nepali Date Picker for BS input
window.onload = function () {
    document.getElementById("bs-date").nepaliDatePicker();
};

// BS to AD Conversion Function (Replace logic with actual conversion)
function convertBStoAD() {
    let bsDate = document.getElementById("bs-date").value;
    if (bsDate) {
        // Example: Conversion Logic (Replace this with an actual function)
        let adDate = "Converted AD Date";  
        document.getElementById("ad-result").innerHTML = `Converted AD Date: ${adDate}`;
    } else {
        document.getElementById("ad-result").innerHTML = "Please enter a valid BS date.";
    }
}

// AD to BS Conversion Function (Replace logic with actual conversion)
function convertADtoBS() {
    let adDate = document.getElementById("ad-date").value;
    if (adDate) {
        // Example: Conversion Logic (Replace this with an actual function)
        let bsDate = "Converted BS Date";  
        document.getElementById("bs-result").innerHTML = `Converted BS Date: ${bsDate}`;
    } else {
        document.getElementById("bs-result").innerHTML = "Please enter a valid AD date.";
    }
}
