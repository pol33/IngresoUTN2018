function Mostrar()
{
  var respuesta;

  for( ; ; )
  {  
    var num=parseInt(prompt("Ingrese un numero"));
    
    for( i=1  ; i < 4  ; i++  )
    {  
      
       if(!(num%2==0) && !(num%3==0) && !(num%5==0) && !(num%7==0))
       {
        alert("El numero es primo");
       }
      
       else
       {
           alert("No es primo");
       }
         
    }
    respuesta=prompt("Dessea continuar?");
    if(respuesta=="no")
    {
        break;
    }
}//FIN DE LA FUNCIÓN

}