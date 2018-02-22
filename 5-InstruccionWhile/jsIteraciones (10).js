function Mostrar()
{

	
	var num;
	var sumNegativos=0;
	var sumPositivos=0;
	var cantPositivos=0;
	var cantNegativos=0;
	var cantPares=0;
	var cantCeros=0;
	var promedioPositivos=0;
	var promedioNegativos=0;
	var diferencia;
	
	var seguir="s";

	do
	{   num=parseInt(prompt("Digite un numero"));

		if(num < 0 )
		{
			cantNegativos++;
			sumNegativos=sumNegativos+num;
			

        }
		else if( num == 0)
		{
			cantCeros++;
		}
		else
		{
			cantPositivos++;
			sumPositivos=sumPositivos+num;
		}
		if( num%2==0)
		{
			contPares++;
		}
		//condicion de ceros
		

		   seguir=prompt("Desea seguir?");
		   
	}while(seguir="s");

	    if( contPositivos !=0)
		{
            promedioPositivos=sumPositivos/cantPositivos;
		}
		if( contNegativos !=0)
		{
			promedioNegativos=sumNegativos/cantNegativos;
		}

          diferencia=sumPositivos-sumNegativos;

	document.write("Cantidad de negativos:" + cantNegativos +"</br>");
	document.write("Cantidad de positivos:" + canPositivos + "</br>");
	document.write("Cantidad de ceros:" + cantCeros);"</br>"
	document.write("Cantidad de pares:"+ contPares + "</br>");
	document.write("Promedio de los negativos:"+ promedioNegativos + "</br>");
	document.write("Promedio de lkos positivos:"+ promedioPositivos + "</br>");
	document.write("La diferencia es:" + diferencia + "</br>");




}//FIN DE LA FUNCIÓN