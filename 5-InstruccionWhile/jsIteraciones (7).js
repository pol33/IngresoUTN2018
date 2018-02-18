function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
    var valor;

	while(respuesta=="si")
       {
		   respuesta=prompt("¿Desea continuar?");
	   
		   valor=parseInt(prompt("Escriba un numero"));
		   
		       contador++;
			   acumulador=acumulador+valor;
			}
	   }
	}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN