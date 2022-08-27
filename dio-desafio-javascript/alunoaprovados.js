const aluno=[
    {
        nome:'João',
        nota:3,
        turma:'1B',
    },
    {
        nome:'Sofia',
        nota:9,
        turma: '1B',
    },
    {
        nome:'Leonardo',
        nota:9.5,
        turma:'2C',
    },
];
function alunoAprovados(arr,media){
    let aprovados=[];

    for(let i=0; i<arr.length; i++){
        if(arr[i].nota>= media){
            aprovados.push(arr[i].nome);
        }
    }
    return aprovados;
}

function alunoAprovados1(arr,media){
    let aprovados=[];

    for(let i=0; i<arr.length; i++){
        const {nota,nome} = arr[i];
        
        if(nota>= media){
            aprovados.push(nome);
        }
    }
    return aprovados;
}
console.log(alunoAprovados1(aluno,5));

