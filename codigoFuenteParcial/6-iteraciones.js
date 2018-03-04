//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
    var importe;
    var bandera=0;
    var ventaMax;
    var ventaMin;
    var cantVentas=parseInt(prompt("Ingrese el numero de ventas"));
    var TOTAL=0;
   
      
    for( i=1 ; i<cantVentas ; i++ )
        {   importe=parseFloat(prompt("Ingrese un importe"));
        
     while( !(importe>0))
     {
        
         alert("error");
         importe=parseFloat(prompt("Ingrese un importe"));
     }
         
        if(  importe > ventaMax || bandera==0 )
        {
            ventaMax=importe;

        }
        if(  importe < ventaMin || bandera==0 )
        {
            ventaMin=importe;
            bandera=1;
        } 
        TOTAL=importe+TOTAL;
    }
    document.write("La venta maxima fue "+"$ "+ventaMax+"</br>");
    document.write("La menor venta fue "+"$ "+ventaMin+"</br>");
    document.write("La monto total de las ventas fue "+"$ "+TOTAL);

}
        
        


	


