function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var notaExamen;
	notaExamen = Math.floor(Math.random()* (11 - 1) + 1);
	
	if(notaExamen >= 9)
	{
		alert(notaExamen + " EXCELENTE");
	}

	else if(notaExamen >= 4 && notaExamen <= 8)
	{
		alert(notaExamen + " APROBÓ");
	}

	else
	{
		alert(notaExamen + " Vamos, la proxima se puede");
	}

}//FIN DE LA FUNCIÓN