function Mostrar()
{

	
	var num;
	var sumNegativos=0;
	var sumPositivos=0;
	var contPositivos=0;
	var contNegativos=0;
	var contPares=0;
	var contCeros=0;
	var promedioPositivos=0;
	var promedioNegativos=0;
	var diferencia;
	var seguir="s";

	do
	{   num=parseInt(prompt("Digite un numero"));

		if(num < 0 )
		{
			contNegativos++;
			sumNegativos=sumNegativos+num;
			

        }
		else if( num == 0)
		{
			contCeros++;
		}
		else
		{
			contPositivos++;
			sumPositivos=sumPositivos+num;
		}
		if( num%2==0)
		{
			contPares++;
		}
		//condicion de ceros
		

	seguir=prompt("Desea seguir?");
		   
	}while(seguir=="s");

	    if( contPositivos !=0)
		{
            promedioPositivos=sumPositivos/contPositivos;
		}
		if( contNegativos !=0)
		{
			promedioNegativos=sumNegativos/contNegativos;
		}

          diferencia=sumPositivos-sumNegativos;

	      document.write("Cantidad de negativos: " + contNegativos +"</br>");
	      document.write("Cantidad de positivos: " + contPositivos + "</br>");
	      document.write("Cantidad de ceros: " + contCeros +"</br>");
	      document.write("Cantidad de pares: "+ contPares + "</br>");
	      document.write("Promedio de los negativos: "+ promedioNegativos + "</br>");
	      document.write("Promedio de los positivos: "+ promedioPositivos + "</br>");
	      document.write("La diferencia es: " + diferencia + "</br>");




}//FIN DE LA FUNCIÓN