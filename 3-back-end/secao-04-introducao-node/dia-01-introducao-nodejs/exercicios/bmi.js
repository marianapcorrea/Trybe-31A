const readLineSync = require('readline-sync');

const weight = readLineSync.questionInt( "What’s your weight? ")
const height = readLineSync.questionInt( "What’s your hight? ")

const getBMI =(weight, height) => console.log("bim = ", weight/Math.pow((height/100), 2))


const calculateBMI = (weight, height) => {
  const bmi = getBMI(weight, height);
  
  if (bmi < 18.5) {
    console.log('Abaixo do peso (magreza)');
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    console.log('Peso normal');
  } else if (bmi >= 25 && bmi <= 29.9) {
    console.log('Acima do peso (sobrepeso)');
  } else if (bmi >= 30 && bmi <= 34.9) {
    console.log('Obesidade grau I');
  } else if (bmi >= 35 && bmi <= 39.9) {
    console.log('Obesidade grau II');
  } else {
    console.log('Obesidade graus III e IV');
  }
};


calculateBMI(weight, height);

