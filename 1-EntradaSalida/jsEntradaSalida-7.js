/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var a, b, resultado;
    a = document.getElementById("numeroUno").value;
    a = parseInt(a);
    b = document.getElementById("numeroDos").value;
    b = parseInt(b);
    resultado = a + b;
    alert(resultado);
}

function restar()
{
	var a, b, resultado;
    a = document.getElementById("numeroUno").value;
    a = parseInt(a);
    b = document.getElementById("numeroDos").value;
    b = parseInt(b);
    resultado = a - b;
    alert(resultado);
}

function multiplicar()
{ 
	var a, b, resultado;
    a = document.getElementById("numeroUno").value;
    a = parseInt(a);
    b = document.getElementById("numeroDos").value;
    b = parseInt(b);
    resultado = a * b;
    alert(resultado);
}

function dividir()
{
	var a, b, resultado;
    a = document.getElementById("numeroUno").value;
    a = parseInt(a);
    b = document.getElementById("numeroDos").value;
    b = parseInt(b);

    if(b != 0)
    {   
        resultado = a / b;
        alert(resultado);
    }

    else
    {   
        alert("No se puede dividir por 0... Ingrese otro numero por favor...");
    }
}

