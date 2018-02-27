function Mostrar()
{
  var contNumPares=0;
  var num=parseInt(prompt("Ingrese un numero"));
  
  for(i=1  ;i<=num ;i++ )
  {
     if( i%2!=0 )
     {
         continue;
         }
         

        console.log(i);
        contNumPares++;
        
     }
     console.log("Cantidad de numeros pares "+contNumPares);


  }
        



//FIN DE LA FUNCIÓN