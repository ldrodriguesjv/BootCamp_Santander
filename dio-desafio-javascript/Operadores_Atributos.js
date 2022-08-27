function comparaNumeros(num1, num2){
    
    if((!num1  || !num2) && (num1==null || num2==null)){
        return 'Valores nulos';
    }else{
        const compararValores= criaPrimeiraFrase(num1,num2);
        const compararSoma=criaSegubdaFrase(num1,num2);
        return`${compararValores}.${compararSoma} `;
    
     
    }    
}

function criaPrimeiraFrase(num1,num2){
    let saoIguais='';

    if(num1 != num2){
        saoIguais='não';
    }
    return`Os numeros ${num1} e ${num2} ${saoIguais} são iguais`;
}

function criaSegubdaFrase(num1,num2){
    const soma = num1 + num2;
    let compara10,compara20;
    

    if(soma<=10 ){
        compara10='menor'
    }else{
        compara10='maior'
    }

    if(soma<=20 ){
        compara20='menor'
    }else{
        compara20='maior'
    }

    
    return `Sua soma ${soma}, que é ${compara10} que 10 e ${compara20} que 20.`;
}

console.log(comparaNumeros(0));