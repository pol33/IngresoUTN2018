function Mostrar()
{

	
	var num1;
	var num2;
	var respuesta;
	var acumulador;

	do
       {
		   num1=parseInt(prompt("Escriba un numero"));
		   num2=parseInt(prompt("Escriba un numero"));

		   if(num1>num2)
		   {
			   maximo=num1;
			   minimo=num2;
			   
		   }
		   else
			   maximo=num2;
			   minimo=num1;

			   
			   respuesta=(prompt("¿Desea continuar?")); 
			}while(respuesta=="si");
			
			document.getElementById('minimo').value=minimo;
			document.getElementById('maximo').value=maximo;

}//FIN DE LA FUNCIÓN