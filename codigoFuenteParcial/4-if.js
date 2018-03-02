//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
    var num1=parseInt(prompt("Ingrese un numewro"));
    var num2=parseInt(prompt("ingrese otro numero"));
    var resultado;
    
    
    
    if( num1==num2)
    {
        resultado=num1*num2;
    
        
        
    }
    else if( num1 > num2)
    {
        resultado=num1-num2;
    }
    else
    {
        resultado=num1+num2;
    }
    document.write("El resultado es "+resultado);
}

