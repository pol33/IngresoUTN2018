function Mostrar()
{
    var num1
	var num2;
	var positivo=0;
	var negativo=1;
	var respuesta="si";

	while(respuesta=="si")
       {
		   num1=parseInt(prompt("¿Escriba un numero positivo"));
		   positivo=positivo+num1;
		   num2=parseInt(prompt("Escriba un numero negativo"));
		   negativo=negativo*num2;
		   respuesta=prompt("¿Desea continuar?");
		    }
		   


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN