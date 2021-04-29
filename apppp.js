function volver() 
{
    location.href="index.html";
}
function sumit() 
{
    var nombre=document.getElementById('nombre').value;

    if (nombre=="Johan")
    {
        location.href="https://github.com/DarkJou";    
    }
    else
    {
        location.href="login.html"
    }
}
console.log('funcionando al 100...')