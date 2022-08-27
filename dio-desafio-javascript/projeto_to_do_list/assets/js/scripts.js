
const getBanco = () => JSON.parse(localStorage.getItem('todolist')) ?? [];
const setBanco = (banco) => localStorage.setItem('todolist',JSON.stringify(banco));

const criarItem = (tarefa,v_status,indice) =>{
    const item =document.createElement('label');
    item.classList.add('todo_item');
    //criando checkbox no html
    item.innerHTML =
     `
    <input type="checkbox" ${v_status} data-indice=${indice}>
    <div>${tarefa}</div>
    <input type="button" value="x" data-indice=${indice}> 
    `
    document.getElementById('todolist').appendChild(item);
}

const limparTarefas = () =>{
    const todolist = document.getElementById('todolist');
    while(todolist.firstChild){
        todolist.removeChild(todolist.lastChild);
    }
}

const atualizarTela=() =>{
    limparTarefas()
    const banco=getBanco();
    banco.forEach((item,indice)=>criarItem(item.tarefa,item.status,indice));
}

inserirItembtn =function (){
    if(document.getElementById("itemtexto").value !=""){
        const texto =document.getElementById("itemtexto").value;
        const banco=getBanco();
        banco.push({'tarefa':texto,'status':''});
        setBanco(banco);
        document.getElementById("itemtexto").value='';
        atualizarTela();
        
    }else{
        alert("Favor digitar a tarefa.");
    }
}

const inserirItem = (evento) =>{
    const tecla= evento.key;
    const texto = evento.target.value;
    if(tecla==='Enter'){
        const banco=getBanco();
        banco.push({'tarefa':texto,'status':''});
        setBanco(banco);
        atualizarTela();
        evento.target.value='';
    }
}

document.getElementById('newItem').addEventListener('keypress', inserirItem);


const   removerItem=(indice) => {
    const banco=getBanco();
    banco.splice(indice,1);
    setBanco(banco);
    atualizarTela();
}

const atualizarItem= (indice)=>{
    const banco=getBanco();
    banco[indice].status=banco[indice].status === '' ? 'checked':'';
    setBanco(banco);
    atualizarTela();
}
const clickItem= (evento) =>{
    const elemento = evento.target;
    if(elemento.type==='button'){
        const indice = elemento.dataset.indice;
        removerItem(indice);
    }else if(elemento.type==='checkbox'){
        const indice = elemento.dataset.indice;
        atualizarItem(indice);
    }
}
document.getElementById('todolist').addEventListener('click',clickItem);
atualizarTela();