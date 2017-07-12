function Mostrar()
{
    var numero = parseInt(prompt("Ingrese un número entre 0 y 9 inclusive."));

    while (numero < 0 || numero > 9 || isNaN(numero))
    {
        numero = parseInt(prompt("Error! Verifique que esta ingresando un número entre 0 y 9 inclusive e intentelo nuevamente."));
    }

    document.getElementById("Numero").value = numero;
}//FIN DE LA FUNCIÓN