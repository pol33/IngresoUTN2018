/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/
var anch=parseInt(document.getElementById("Ancho").value);
var larg=parseInt(document.getElementById("Largo").value);
var perim

function Rectangulo () 
{
    var anch=parseInt(document.getElementById("Ancho").value);
    var larg=parseInt(document.getElementById("Largo").value);
    var largoTotal;

    largoTotal=(larg*2+anch*2)*3;
    alert("las metros de alambre que se necesitan son "+largoTotal+"metros");

}
function Circulo () 
{
    var alambre;
    var radio=parseInt(document.getElementById("Radio").value);

    alambre=(2*3.14*radio)*3;

    alert("La cantidad de almbre es: "+alambre);
	
}
function Materiales () 
{
    var bolsasCemento;
    var bolsasCal;
    var superficieTerreno;

    superficieTerrreno=larg*anch;

    bolsasCemento=superficieTerreno*2;
    bolsasCal=superficieTerreno*3;

    alert("Se necesitan: "+bolsasCemento+"y"+bolsasCal);
	
}