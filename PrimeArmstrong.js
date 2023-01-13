
    


const IsPrimeNumber= (number)=> {
    let isPrime = true;
    // check if number is equal to 1
if (number === 1) {
    return false;
}
// check if number is greater than 1
else if (number > 1) {
// looping through 2 to number-1
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        return true;
    } else {
        return false;
    }
}

// check if number is less than 1
else {
    return false;
}
}   


const IsArmstrong = (number)=>{
let sum = 0;
let temp = number;
while (temp > 0) {
    // finding the one's digit
    let remainder = temp % 10;

    sum += remainder * remainder * remainder;

    // removing last digit from the number
    temp = parseInt(temp / 10); // convert float into integer
}
// check the condition
if (sum == number) {
    return true;
}
else {
    return false;
}
}

const number = 56;

    if(IsPrimeNumber(number)==true){
        console.log(`${number} is a prime number`);
    }
    if(IsArmstrong(number)==true){

        console.log(`${number} is an Armstrong number`);
    }
    else{
        console.log(`${number} is neither Armstrong number nor Prime`);
    }

