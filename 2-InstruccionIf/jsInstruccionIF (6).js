function Mostrar()
{
//tomo la edad  
edad=parseInt(document.getElementById("edad").value);

if( edad < 13 )
{
    alert("Niño");
}
else if( edad < 18)
{
    alert("Adolescente");
}
else 
{
    alert("Mayor de edad");
}


}//FIN DE LA FUNCIÓN