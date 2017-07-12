function Mostrar()
{
	var positivo = 0;
	var negativo = 1; // <------ Inicia en 1 porq si fuera 0 al multiplicar los numeros negativos siempre va a dar 0...
	var respuesta = true;
	var num;

	while(respuesta == true)
	{
		num = prompt("Ingrese un numero");
		num = parseFloat(num);

		while(isNaN(num))
		{
			num = prompt("Error! No ingreso un numero... Por favor ingrese un numero");
			num = parseFloat(num);
		}
		
		if(num >= 0)
		{
			positivo += num;
		}
		else
		{
			negativo *= num;
		}

		respuesta = confirm("¿Desea ingresar otro numero?");
		// respuesta = prompt("¿Desea ingresar otro numero? si / no")
		// respuesta = respuesta.toLowerCase();
	}
    
    document.getElementById('suma').value=positivo;
    document.getElementById('producto').value=negativo;
}//FIN DE LA FUNCIÓN