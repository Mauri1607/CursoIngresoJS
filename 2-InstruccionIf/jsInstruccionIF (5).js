function Mostrar()
{
    //tomo la edad  
    var edad;
    edad = document.getElementById("edad").value;

    if(edad >= 13 && edad <= 17)
    {
        //No hay q hacer nada
    }
    
    else 
    {
        alert("No eres un adolescente");
    }
}//FIN DE LA FUNCIÓN