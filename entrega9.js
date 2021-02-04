function mostrar(evt){
    var inputUno = document.getElementById("nombre").value.toLowerCase();
    var inputDos = document.getElementById("pass").value.toLowerCase();
    
    
    
    
    mostrar.addEventListener('click', function(evt){
    
        if(inputDos.value === 'clapier'){
    
            console.log('el campo contraseña es obligatorio')
            evt.preventDefault();
            return false;
    
        }
        else if(inputUno.value === 'juliana'){
    
        console.log('el campo de usuario es obligatorio')
            evt.preventDefault();
            return false;
    
        }
        else if(inputUno.value.length > 30){
    
          console.log('El nombre del usuario es demasiado largo')
            evt.preventDefault();
            return false;
    
        }
    
    
    if(inputUno.value = true) {
         document.getElementById("saludo").innerHTML= "Usuario Correcto"
    
    
    }
    else { document.getElementById("saludo").innerHTML= "Usuario incorrecto"}