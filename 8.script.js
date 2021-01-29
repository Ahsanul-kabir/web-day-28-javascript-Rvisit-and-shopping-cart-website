/*document.getElementById('case-increase').addEventListener('click', function() {
    handleProductChange(true);
});

document.getElementById('case-decrease').addEventListener('click', function() {
    handleProductChange(false);
});

function handleProductChange(isIncrease) {
    const caseInput = document.getElementById('case-count');
    const caseCount = parseInt(caseInput.value);
    let caseNewCount = caseCount;
    if (isIncrease == true) {
        const caseNewCount = caseCount + 1;
    }
    if (isIncrease == false && caseCount > 0) {
        const caseNewCount = caseCount - 1;
    }
    caseInput.value = caseNewCount;
    const caseTotal = caseNewCount * 59;
    document.getElementById('case-total').innerText = '$' + caseTotal;
}

different way
*/



// -----> For Increase
// document.getElementById('case-increase').addEventListener('click', function() {
//     const caseInput = document.getElementById('case-count');
//     const caseCount = parseInt(caseInput.value);
//     const caseNewCount = caseCount + 1;
//     caseInput.value = caseNewCount;
//     const caseTotal = caseNewCount * 59;

//     document.getElementById('case-total').innerText = '$' + caseTotal;
// });

// -----> For Decrease
// document.getElementById('case-decrease').addEventListener('click', function() {
//     const caseInput = document.getElementById('case-count');
//     const caseCount = parseInt(caseInput.value);
//     const caseNewCount = caseCount - 1;
//     caseInput.value = caseNewCount;
//     const caseTotal = caseNewCount * 59;

//     document.getElementById('case-total').innerText = '$' + caseTotal;
// });