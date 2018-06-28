document.getElementById('calculate-button').onclick = function() {
	//coleta o que está dentro do input
	let elem1=document.getElementById("elem-1");
	let elem2=document.getElementById("elem-2");

	let val1=parseInt(elem1.value);
	let val2=parseInt(elem2.value);

	let choice=document.querySelector('input[name="operation"]:checked');
	let operation=choice.value;
	let operationResult=getResult(val1,val2,operation);

	let resultElement=document.getElementById("result");
	resultElement.innerHTML = operationResult;
}

function getResult(val1,val2,operation) {

	let sum=val1+val2;
	let sub=val1-val2;
	let mult=val1*val2;
	let div=val1/val2;
	let per=(val1*100)/val2
	//power
	let pot=1;
	let contador=1;
	while (contador<=val2) {
		pot = pot*val1;
		contador+=1;	
	}

	//verifies if the user inserted values into the boxes
	if ((isNaN(val1)===true) && (isNaN(val2)===false))   {
		alert ('Digite um valor na caixa indicada!');
		document.getElementById("elem-1").focus();
	}
	else if ((isNaN(val1)===false) && (isNaN(val2)===true)) {
		alert ('Digite um valor na caixa indicada!');
		document.getElementById("elem-2").focus();
	}
	else if ((isNaN(val1)===true) && (isNaN(val2)===true)) {
		alert ('Digite valores em ambas as caixas!');
		document.getElementById("elem-1").focus();
	}
	else if (operation==="+") {
		result.innerText=sum;
	}
	else if (operation==="-") {
		result.innerText=sub;
	}
	
	else if (operation==="*") {
		result.innerText=mult;
	}
	
	else if (operation==="/") {
		result.innerText=div;
	}

	else if (operation==="%") {
		result.innerText=per;
	}

	else if (operation==="e") {
		result.innerText=pot;
	}
}
