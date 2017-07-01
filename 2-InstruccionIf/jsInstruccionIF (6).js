function Mostrar()
{
    //tomo la edad  
    var edad;
    edad = document.getElementById("edad").value;

    if(edad >= 13 && edad <= 17)
    {
        alert("Eres un adolescente");
    }
    
    else if(edad > 17)
    {
        alert("Eres mayor de edad");
    }

    else 
    {
        alert("Eres un niño");
    }

}//FIN DE LA FUNCIÓN