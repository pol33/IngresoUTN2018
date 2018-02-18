function Mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 10");

	while(!(numero > 0 && numero < 10))
	{
		numero=prompt("Error el numero es incorrecto!!!");
	}

	document.getElementById("Numero").value=numero;


}//FIN DE LA FUNCIÓN