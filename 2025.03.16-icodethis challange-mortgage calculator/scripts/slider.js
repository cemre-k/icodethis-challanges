document.addEventListener("DOMContentLoaded", function () {
    const sliders = document.querySelectorAll(".slider"); // Select all sliders
    const sliderValues = document.querySelectorAll(".slider-value"); // Select all corresponding spans
    const loanAmountDisplay = document.getElementById("loan-amount"); // Loan amount display
    const payPerMonthDisplay = document.getElementById("payment-per-month"); // Monthly payment display
    const button = document.getElementById("button"); // Button to trigger calculation

    // Function to format the number with dots (thousands separator)
    function formatNumber(value) {
        return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }

    // Function to calculate mortgage
    function calculateMortgage(purchasePrice, equity, repaymentTime) {
        const loanAmount = purchasePrice - equity; // Calculate loan amount
        const interestRate = 0.05; // Example interest rate (5%)
        const monthlyRate = interestRate / 12; // Monthly interest rate
        const numberOfPayments = repaymentTime * 12; // Total number of payments

        // Calculate monthly payment using the annuity formula
        const monthlyPayment = (loanAmount * monthlyRate) /
            (1 - Math.pow(1 + monthlyRate, -numberOfPayments));

        return {
            loanAmount: loanAmount.toFixed(2),
            monthlyPayment: monthlyPayment.toFixed(2),
        };
    }

    // Add event listener to the button
    button.addEventListener("click", function () {
        event.preventDefault();

        const purchasePrice = parseInt(document.getElementById("purchase-slider").value);
        const equity = parseInt(document.getElementById("equity-slider").value);
        const repaymentTime = parseInt(document.getElementById("pay-time-slider").value);

        const result = calculateMortgage(purchasePrice, equity, repaymentTime);

        loanAmountDisplay.textContent = `${formatNumber(result.loanAmount)}`;
        payPerMonthDisplay.textContent = `${formatNumber(result.monthlyPayment)}`;
    });

    // Add event listeners to all sliders
    sliders.forEach((slider, index) => {
        slider.addEventListener("input", function () {
            sliderValues[index].textContent = formatNumber(slider.value);
        });
    });
});





