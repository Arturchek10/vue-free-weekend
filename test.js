// fibonacci

const fibonacci = (terms) => {
  let fibArray = [0,1]
  for(let i = 2; i < terms; i++){
    fibArray[i] = fibArray[i-1] + fibArray[i-2]
  }
  return fibArray
}

// armstrong number 153 ->  1*(number.length) + 5*(number.length) + 3*(number.length) = 153 

const isArmstrongNum = (num) => {
  const numLenght = String(num).length
  let arrNum = String(num).split('')
  let sumOfDigits = 0
  for(let i = 0; i < numLenght; i++){
    sumOfDigits += (Number(arrNum[i]) ** numLenght) 
  }
  if(sumOfDigits === num){
    return true
  } else {
    return false
  }
}

// console.log(isArmstrongNum());

const searchArmstrongNumbers = (x1,x2) => {
  let armNums = []
  for(let i = x1; i < x2; i++){
    if(isArmstrongNum(i)){
      armNums.push(i)
    }
  }
  return armNums
}

console.log(searchArmstrongNumbers(100,500));
