/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/
var largo, ancho, radio;

function TomarDatos()
{
    largo = parseFloat(document.getElementById("Largo").value);
    ancho = parseFloat(document.getElementById("Ancho").value);
    radio = parseFloat(document.getElementById("Radio").value);
}

function Rectangulo () 
{
    TomarDatos();
    var alambre = ((largo + ancho) * 2) * 3;
    alert(alambre);
}
function Circulo () 
{
	TomarDatos();
    var alambre = ((Math.PI) * (radio * 2)) * 3;
    alert(alambre);
}
function Materiales () 
{
	TomarDatos();
    var bolsasCemento, bolsasCal;
    
    bolsasCemento = (largo * ancho) * 2;
    bolsasCal =  (largo * ancho) * 3;
    alert("Se nesecitan " + bolsasCemento + " bolsas de cemento y " + bolsasCal + " bolsas de cal.")
}