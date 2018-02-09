function Mostrar()
{
//tomo la edad  
var edad;
edad=document.getElementById("edad").value;
parseInt(edad);

if(edad>=13 && edad<=17)
{
    alert("El usuario es adolecente");

}
else
    {
       alert("El usuario no es adolesente");
    }

         }   