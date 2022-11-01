var edad = prompt("Ingrese su edad");
var usuario = prompt("Nombre de usuario:");
var clave = Number(prompt("Contraseña:"));

if(edad > 18 && usuario == "admin" && clave == "1234"){
    alert("Bienvenido/a");
} else{
    alert("Error");
}
