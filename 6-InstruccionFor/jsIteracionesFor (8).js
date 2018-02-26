function Mostrar()
{
       

 
       var num=parseInt(prompt("Ingrese un numero"));
    
       if(num==5||num==7||num==1||num==2||num==3 )
       {
           alert("PRIMO");
           
       }
     
      
       else if(!(num%2==0) && !(num%3==0) && !(num%5==0)&& !(num%7==0))
       {
        alert("El numero es primo");
       }
      
       else
       {
           alert("NO PRIMO");
      
       }//FIN DE LA FUNCIÓN

}

