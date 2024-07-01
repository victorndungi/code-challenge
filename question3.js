const ps=require("prompt-sync")
const prompt=ps({sigint: true})
 const basicSalary = parseFloat(prompt("Enter the basic salary:"));
    const benefits = parseFloat(prompt("Enter the benefits:"));

function calculateNetSalary() {
   
    if (isNaN(basicSalary) || isNaN(benefits) || basicSalary < 0 || benefits < 0) {
        console.log("Invalid input. Please enter valid numbers for basic salary and benefits.");
        return;
    }

    const grossSalary = basicSalary + benefits;

    // Calculate PAYE (Tax) based on KRA rates
    const paye = calculatePAYE(grossSalary);

    // NHIF deduction based on NHIF rates
    const nhif = calculateNHIF(grossSalary);

    // NSSF deduction based on NSSF rates
    const nssf = calculateNSSF(grossSalary);

    const netSalary = grossSalary - paye - nhif - nssf;

    console.log(`Gross Salary: ${grossSalary}`);
    console.log(`PAYE (Tax): ${paye}`);
    console.log(`NHIF Deduction: ${nhif}`);
    console.log(`NSSF Deduction: ${nssf}`);
    console.log(`Net Salary: ${netSalary}`);
}

function calculatePAYE(grossSalary) {
    // Assuming a simple tax rate, adjust according to actual rates
    if (grossSalary <= 24000) {
        return grossSalary * 0.1;  // 10% for simplicity
    } else if (grossSalary <= 32333) {
        return grossSalary * 0.25;  // 25% for simplicity
    } else {
        return grossSalary * 0.3;  // 30% for simplicity
    }
}

function calculateNHIF(grossSalary) {
    // Simple NHIF calculation, adjust according to actual rates
    if (grossSalary <= 5999) {
        return 150;
    } else if (grossSalary <= 7999) {
        return 300;
    } else if (grossSalary <= 11999) {
        return 400;
    } else if (grossSalary <= 14999) {
        return 500;
    } else if (grossSalary <= 19999) {
        return 600;
    } else if (grossSalary <= 24999) {
        return 750;
    } else if (grossSalary <= 29999) {
        return 850;
    } else if (grossSalary <= 34999) {
        return 900;
    } else if (grossSalary <= 39999) {
        return 950;
    } else if (grossSalary <= 44999) {
        return 1000;
    } else if (grossSalary <= 49999) {
        return 1100;
    } else if (grossSalary <= 59999) {
        return 1200;
    } else if (grossSalary <= 69999) {
        return 1300;
    } else if (grossSalary <= 79999) {
        return 1400;
    } else if (grossSalary <= 89999) {
        return 1500;
    } else if (grossSalary <= 99999) {
        return 1600;
    } else {
        return 1700;
    }
}

function calculateNSSF(grossSalary) {
    // Assuming a flat rate for simplicity, adjust according to actual rates
    return 200;
}

// Example usage:
calculateNetSalary();
