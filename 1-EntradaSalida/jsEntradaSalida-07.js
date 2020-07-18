/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 

function sumar()
{	
	const { num1, num2 } = obtenerNumeros();
	alert("La Suma es "+ (num1 + num2));	
}

function restar()
{
	const { num1, num2 } = obtenerNumeros();
	alert("La Resta es "+ (num1 - num2));
}

function multiplicar()
{ 
	const { num1, num2 } = obtenerNumeros();
	alert("La Multiplicación es "+ (num1 * num2));
}

function dividir()
{
	const { num1, num2 } = obtenerNumeros();
	alert("La División es "+ (num1 / num2).toFixed(2));
}

function obtenerNumeros()
{
	const num1 = document.getElementById('txtIdNumeroUno').value;
	const num2 = document.getElementById('txtIdNumeroDos').value;
	return { num1:parseFloat(num1), num2:parseFloat(num2) };
}

