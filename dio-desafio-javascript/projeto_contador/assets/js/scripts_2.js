let count = 0;
const contadorNum = document.getElementById('currentNumber')

let adicao = document.querySelector('#bt_mais');

let subtracao = document.querySelector('#bt_menos')


adicao.addEventListener('click',() =>{
	count++;
    document.getElementById("bt_menos").disabled=false;

    if(count === 10){
        document.getElementById("bt_mais").disabled=true;
    }
    if(count>=0){
        document.getElementById("currentNumber").style.color=random_rgba();
    }
    contadorNum.innerHTML = count;

    
});

subtracao.addEventListener('click',() =>{
	count--;
    document.getElementById("bt_mais").disabled=false;

	if(count === -10){
        document.getElementById("bt_menos").disabled=true;
    }
    if(count<0){
        document.getElementById("currentNumber").style.color=random_rgba();
    }

    contadorNum.innerHTML = count;
    
});

function random_rgba() {
    var o = Math.round,
      r = Math.random,
      s = 255;
    return 'rgba(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ',' + r().toFixed(1) + ')';
  }
  //document.getElementById("cores").style.color = random_rgba();
