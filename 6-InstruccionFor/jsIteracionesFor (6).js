function Mostrar()
{
  var contNumPares=0;
  var num=parseInt(prompt("Ingrese un numero"));
  
  for(i=1  ;i<num ;i++ )
  {
     if(i%2==0)
     {

         contNumPares++;
         document.write("Numero par: "+i+"</br>");
     }


  }
        document.write("Cantidad de numeros pares: "+contNumPares);



}//FIN DE LA FUNCIÓN