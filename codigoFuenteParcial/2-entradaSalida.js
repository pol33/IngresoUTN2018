//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
    var importe=parseFloat(prompt("Ingrese el importe"));
    var importFINAL;

    importFINAL=importe+importe*.21;

    alert("El importe con IVA 21% ES "+ "$ "+importFINAL);


	
}

