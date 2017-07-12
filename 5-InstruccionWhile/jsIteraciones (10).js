function Mostrar()
{
    var contador = 0;
	var num, sumaPositivos = 0, sumaNegativos = 0, cantPositivos = 0, cantNegativos = 0, cantCeros = 0, cantPares = 0;
	var diferenciaCantidades;
	//declarar contadores y variables 
	
	var respuesta = true;

	while(respuesta == true)
	{
		num = parseInt(prompt("Ingrese un numero."));

		while(isNaN(num))
		{
			num = parseInt(prompt("Error! No ingreso un numero... Por favor ingrese un numero."));
		}
		
		if(num > 0)
		{
			cantPositivos++;
			sumaPositivos += num;
		}
		
		else if(num < 0)
		{
			cantNegativos++;
			sumaNegativos += num;
		}
		
		else
		{
			cantCeros++;
		}

		if(num % 2 == 0)
		{
			cantPares++;
		}

		respuesta = confirm("¿Desea ingresar otro numero?");
	}

	var promPositivos = sumaPositivos / cantPositivos; 
	var promNegativos = sumaNegativos / cantNegativos;

	if(cantPositivos > cantNegativos)
	{
        diferenciaCantidades = cantPositivos - cantNegativos;
        document.write("La suma de los positivos es: " + sumaPositivos + "<br />La suma de los negativos es: " + sumaNegativos + "<br />La cantidad de positivos es: " + cantPositivos + "<br />La cantidad de negativos es: " + cantNegativos + "<br />La cantidad de ceros es: " + cantCeros + "<br />La cantidad de numeros pares es: " + cantPares + "<br />El promedio de los numeros positivos es: " + promPositivos + "<br />El promedio de los numeros negativos es: " + promNegativos + "<br />La diferencia de los numeros positivos y negativos es de: " + diferenciaCantidades + " numeros positivos");
	}

	else
	{
        diferenciaCantidades = cantNegativos - cantPositivos
        document.write("La suma de los positivos es: " + sumaPositivos + "<br />La suma de los negativos es: " + sumaNegativos + "<br />La cantidad de positivos es: " + cantPositivos + "<br />La cantidad de negativos es: " + cantNegativos + "<br />La cantidad de ceros es: " + cantCeros + "<br />La cantidad de numeros pares es: " + cantPares + "<br />El promedio de los numeros positivos es: " + promPositivos + "<br />El promedio de los numeros negativos es: " + promNegativos + "<br />La diferencia de los numeros positivos y negativos es de: " + diferenciaCantidades + " numeros negativos");
	}
}//FIN DE LA FUNCIÓN