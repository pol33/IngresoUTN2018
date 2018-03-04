//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
    var mes=prompt("Elija un mes");
    
    switch(mes)
    {
        case "enero":
        case "febrero":
        alert("Veranito!!!");
        break;
        default:
        alert("Extraño las vacaciones");
    }

	
}

