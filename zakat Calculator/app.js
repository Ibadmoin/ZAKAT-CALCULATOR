


// for donation

function donate() {
    window.open('https://www.saylaniwelfare.com/en/donate', '_blank');
}


function calculate(event){
    event.preventDefault();
    var cashInput = document.getElementById("cash").value;
    var goldInput = document.getElementById("gold").value;
    var silverInput = document.getElementById("silver").value;

    if(cashInput == "" & goldInput =="" & silverInput =="" ){
        alert("Please enter atlest one value");

        return;
    }
    
    var totalNetWorth = parseInt(cashInput|| 0) + parseInt(goldInput || 0) + parseInt(silverInput ||0);
    
    var totalNetWorthDisplay = "Rs. " + totalNetWorth.toLocaleString();
    var payableDisplay = "Rs. " + (totalNetWorth * 0.025 ).toLocaleString();
    
    document.querySelector(".total h4").textContent = totalNetWorthDisplay;
    document.querySelector(".payable h4").textContent = payableDisplay;
  }
  