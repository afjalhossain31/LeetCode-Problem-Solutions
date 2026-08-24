// const weight = process.argv[2];
// const height = process.argv[3];

// function calculateBMI(weight, height) {
//     const bmi = weight / (height * height);
//     return bmi;
// }

// console.log(`Your BMI is: ${calculateBMI(weight, height)}`);

// input from terminal
const weight = Number(process.argv[2]);
const height = Number(process.argv[3]);

function calculateBmi(weight, height) {
  const bmi = weight / (height * height);

  // WHO Category শর্ত
  if (bmi < 18.5) {
    return `BMI: ${bmi.toFixed(2)} - Underweight`;
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    return `BMI: ${bmi.toFixed(2)} - Fit`;
  } else {
    return `BMI: ${bmi.toFixed(2)} - Overweight`;
  }
}

console.log(calculateBmi(weight, height));