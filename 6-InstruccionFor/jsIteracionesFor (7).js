function Mostrar()
{
    var contDivi=0;
    var num=parseInt(prompt("Ingrese un numero"));
    
    for(i=1  ;i<num ;i++ )
    {
       if(num%i==0)
       {
  
           contDivi++;
           document.write("Numero divisores: "+i+"</br>");
       }
  
  
    }
          document.write("Cantidad de numeros divisores: "+contDivi);
  



}//FIN DE LA FUNCIÓN