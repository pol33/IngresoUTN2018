/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
    var edad;
    var sexo;
    var legajo;
    var estadoCivil;
    var nacionalidad;
    
    

        edad=parseInt(prompt("Ingrese su edad"));
        
        while( !(edad >=18 && edad<=90) )
        {
            edad=parseInt(prompt("Error vuelva a ingresar su edad"));
            
        }
        document.getElementById("Edad").value=edad;

        sexo=prompt("Ingrese su sexo");
    

        while( !( sexo=="F"|| sexo=="M"))
        {
            sexo=prompt("Error ingrese nuevamente el sexo");
        }
        
        
            document.getElementById("Sexo").value=sexo;

            estadoCivil=parseInt(prompt("Ingrese su estado civil"));

            while(!(estadoCivil>=1 && estadoCivil<=4))
            { 
        
           estadoCivil=parseInt(prompt("Error ingrese nuevamento su estado civil"))
        }
        document.getElementById("EstadoCivil").value=estadoCivil;


        sueldo=parseInt(prompt("Ingrese un sueldo por favor"));
        while( sueldo < 8000)
        {
            sueldo=parseInt(prompt("Ingrese otro sueldo por favor"));
        }
        document.getElementById("Sueldo").value=sueldo;

        legajo=parseInt(prompt("Ingrese el numero de legajo"));
        while( !(legajo>=1000 && legajo<=9999))
        { 
            legajo=parseInt(prompt("Error ingrese nuevamente su numero de legajo")); 
        }
        document.getElementById("Legajo").value=legajo;

    

    nacionalidad=prompt("Ingrese su nacionalidad");

    if( nacionalidad=="A")
    {
        document.getElementById("Nacionalidad").value="A";
    }
    else if( nacionalidad=="B")
    {
        document.getElementById("Nacionalidad").value="pUTOAS";
    }
    else
    {
        document.getElementById("Nacionalidad").value="TROLOS";
    }
}
    
            
        

            
        

        //sexo=parseInt(prompt("Ingrese su sexo"));
        //if( edad=="F" || edad=="M" )
        //{
    