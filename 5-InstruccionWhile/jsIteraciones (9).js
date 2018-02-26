function Mostrar()
{

	var flag=0;
	var num;
	var respuesta;
	var minimo;
	var maximo;

	do
       {  
		  num = parseInt(prompt("ingrese un numero"));
		
		  
	  if( num < minimo || flag==0)
	   {
		   minimo = num;
		   
		      
	   }
     
	   if( num > maximo || flag==0)     
	   {
		   maximo = num;
		   flag=1;
		   
	   }
	   
	
	   
	   respuesta = prompt("desea continuar?(no) para salir");
		 }while(respuesta=="s");
			
			document.getElementById("minimo").value=minimo;
			document.getElementById("maximo").value=maximo;




}//FIN DE LA FUNCIÓN