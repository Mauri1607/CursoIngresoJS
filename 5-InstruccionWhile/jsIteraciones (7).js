function Mostrar()
{

	var contador = 0;
	var acumulador = 0;
	var respuesta = true;
	var num;

	while(respuesta == true)
	{
		contador++
		num = prompt("Ingrese un numero");
		num = parseFloat(num);

		while(isNaN(num))
		{
			num = prompt("Error! No ingreso un numero... Por favor ingrese un numero");
			num = parseFloat(num);
		}

		acumulador += num;

		respuesta = confirm("¿Desea ingresar otro numero?");
		// respuesta = prompt("¿Desea ingresar otro numero? si / no")
		// respuesta = respuesta.toLowerCase();
	}
    
    document.getElementById('suma').value=acumulador;
    document.getElementById('promedio').value=acumulador/contador;
}//FIN DE LA FUNCIÓN