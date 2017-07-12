function Mostrar()
{
    var sexo = prompt("Ingrese su sexo (f para femenino o m para masculino).");
    sexo = sexo.toLowerCase();

    while (sexo != "f" && sexo != "m")
    {
        sexo = prompt("Error! Ingrese su sexo (f para femenino o m para masculino).");
        sexo = sexo.toLowerCase();
    }

    document.getElementById("Sexo").value = sexo;
}//FIN DE LA FUNCIÓN