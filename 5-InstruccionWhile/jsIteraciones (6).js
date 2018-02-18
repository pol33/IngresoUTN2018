function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var valor;

	
	while(contador < 5 )
       {
		   valor=parseInt(prompt("Escriba un numero"));
		   contador++;
		   parseInt(acumulador);
		   acumulador=acumulador+valor;
		   
	}
document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN