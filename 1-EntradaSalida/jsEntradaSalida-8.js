/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var a, b, resultado;
    a = document.getElementById("numeroDividendo").value;
    a = parseInt(a);
    b = document.getElementById("numeroDivisor").value;
    b = parseInt(b);

    if(b != 0)
    {   
        resultado = a % b;
        alert(resultado);
    }

    else
    {   
        alert("No se puede dividir por 0... Por lo que no se puede obtener el resto de esa operacion... Ingrese otro numero por favor...");
    }
}
