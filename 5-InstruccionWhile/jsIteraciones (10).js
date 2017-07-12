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
	}

	else
	{
		diferenciaCantidades = cantNegativos - cantPositivos
	}

}//FIN DE LA FUNCIÓN