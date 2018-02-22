function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
    var valor;

	do
       {
		   valor=parseInt(prompt("¿Escriba un numero"));
		   contador++;
		   acumulador=acumulador+valor;
	       respuesta=(prompt("¿Desea continuar?"));
		   
		       
			}while(respuesta=="si");
	   
	


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN