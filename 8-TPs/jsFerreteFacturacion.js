/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
var p1, p2, p3;

function Sumar () 
{
	p1 = parseInt(document.getElementById("PrecioUno").value);
    p2 = parseInt(document.getElementById("PrecioDos").value);
    p3 = parseInt(document.getElementById("PrecioTres").value);
    var total = p1 + p2 + p3;
    alert(total);
}
function Promedio () 
{
	p1 = parseInt(document.getElementById("PrecioUno").value);
    p2 = parseInt(document.getElementById("PrecioDos").value);
    p3 = parseInt(document.getElementById("PrecioTres").value);
    var promedio = (p1 + p2 + p3) / 3;
    alert(promedio);
}
function PrecioFinal () 
{
	p1 = parseInt(document.getElementById("PrecioUno").value);
    p2 = parseInt(document.getElementById("PrecioDos").value);
    p3 = parseInt(document.getElementById("PrecioTres").value);
    var precioFinal = (p1 + p2 + p3) * 1.21;
    alert(precioFinal);
}