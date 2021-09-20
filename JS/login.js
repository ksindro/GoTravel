function loginUsuario(){
    let usuario = document.getElementById("IdNombre").value;
    let contra = document.getElementById("idContraseña").value;
    if( usuario == ""){
        alert("Falta el usuario");
        return;
    }
    if(contra == ""){
        alert("Falta la contraseña");
        return;
    }

        if(usuario == "cliente" && contra == "cliente"){
            window.location = "../index.html";
            return;
        }
        if(usuario == "admin" && contra == "12345"){
            window.location = "reporteriaEntrada.html";
            return;
        }
        else{
            alert("Usuario y/o contraseña incorrecto");
            return;
        }
    }