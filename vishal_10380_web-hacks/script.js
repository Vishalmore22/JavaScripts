
const calculateEMI = () => {
    const loanAmountInput = document.getElementById('loanAmount');
    const interestRateInput = document.getElementById('interestRate');
    const loanTermInput = document.getElementById('loanTerm');
    const resultDiv = document.getElementById('result');

    const principal = parseFloat(loanAmountInput.value);
    const annualRate = parseFloat(interestRateInput.value);
    const years = parseFloat(loanTermInput.value);

    const monthlyRate = (annualRate / 100) / 12;
    const months = years * 12;

    let emi = 0;

    if (monthlyRate === 0) {
        emi = principal / months;
    } else {
        const numerator = principal * monthlyRate * Math.pow(1 + monthlyRate, months);
        const denominator = Math.pow(1 + monthlyRate, months) - 1;
        emi = numerator / denominator;
    }

};
