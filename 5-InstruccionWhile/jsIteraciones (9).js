function Mostrar()
{
	// declarar variables	
	var respuesta = true;
	var flag = true;
	var num, min, max;

	while(respuesta == true)
	{
		num = parseInt(prompt("Ingrese un numero"));
		while(isNaN(num))
		{
			num = parseInt(prompt("Error! No ingreso un numero... Ingrese un numero por favor."));
		}
		
		if(flag == true)
		{
			max = num;
			min = num;
			flag = false;
		}
		
		else
		{
			if(num > max)
			{
				max = num;
			}

			if(num < min)
			{
				min = num;
			}
		}
		
		respuesta = confirm("¿Desea ingresar otro numero?");
	}

	document.getElementById("maximo").value = max;
	document.getElementById("minimo").value = min;
}//FIN DE LA FUNCIÓN