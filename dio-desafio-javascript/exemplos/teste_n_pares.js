function returnEvenValues(array) {
    let evenNums=[];//declarando variavel let 
    for(let i=0; i<array.length; i++){ //repetição de toda array
        if(array[i] %2 === 0){ //verifica cada array se é dividido por 2
            evenNums.push(array[i]);
        }else{
            console.log(`${array[i]} não é par!`) //informa para o console quando não é impar
        }
    }
    console.log(evenNums);
}

let array=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
returnEvenValues(array);