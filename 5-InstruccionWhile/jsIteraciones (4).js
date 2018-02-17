function Mostrar()
{

	var numero = parseInt(prompt("ingrese un número entre 0 y 10."));

	while( !(numero<11 && numero>0) )
	{
		numero=parseInt(prompt("Numero incorrecto"));
	}

 document.getElementById("numero").value=numero;
}//FIN DE LA FUNCIÓN