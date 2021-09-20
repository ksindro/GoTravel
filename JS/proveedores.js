var proveedores = [];        


function Proveedor (codigo, nombre, direccion, telefono, email) {
this.codigo = codigo,
this.nombre = nombre,
this.direccion = direccion,
this.telefono = telefono,
this.email = email
}

function addProveedorArray(){
    var codigo = document.getElementById("idCodigoProveedor").value;
    var nombre = document.getElementById("idNombreProveedor").value;
    var direccion = document.getElementById("idDireccionProveedor").value;
    var telefono = document.getElementById("idTelefonoProveedor").value;
    var email = document.getElementById("idEmailProveedor").value;

    var proveedor= new Proveedor(codigo, nombre, direccion, telefono, email);
    proveedores.push(proveedor);
}


function LlenarTablaProveedor(){

  
    var scriptTabla = "";

    for (let index = 0; index < proveedores.length; index++) {
        scriptTabla += "<tr>";
        scriptTabla += "<td>" + proveedores[index].codigo+ "</td>" ;
        scriptTabla += "<td>" + proveedores[index].nombre + "</td>" ;
        scriptTabla += "<td>" + proveedores[index].direccion + "</td>" ;
        scriptTabla += "<td>" + proveedores[index].telefono + "</td>" ;
        scriptTabla += "<td>" + proveedores[index].email + "</td>" ;
        scriptTabla += "</tr>";
    }

    document.getElementById("idTablaProveedores").innerHTML = scriptTabla;

}

function validarCamposProveedor(){

    if (document.getElementById("idCodigoProveedor").value == ""){
        alert("Codigo esta vacio");
        return false;
    }
    if (document.getElementById("idNombreProveedor").value == ""){
        alert("Nombre esta vacio");
        return false;
    }
    if (document.getElementById("idDireccionProveedor").value == ""){
        alert("Direccion se encuentra vacio");
        return false;
    }
    if (document.getElementById("idTelefonoProveedor").value == ""){
        alert("Debe ingresar un telefono");
        return false;
    }
    if (document.getElementById("idTelefonoProveedor").value == ""){
        alert("Debe registrar e-mail");
        return false;
    }
  
}

function cleanControlsProveedor(){
    document.getElementById("idCodigoProveedor").value = "";
    document.getElementById("idNombreProveedor").value = "";
    document.getElementById("idDireccionProveedor").value = "";
    document.getElementById("idTelefonoProveedor").value = "";
    document.getElementById("idEmailProveedor").value = "";
}

function addProveedores() {

    //Validar campos
    if (validarCamposProveedor() == false){
        return false;
    }

    cargarDatosProveedores();
    
    //Agregar el producto al array
    addProveedorArray();
      
    //guardar en Local Storage el producto
    setProveedores();

    //Poblamos la tabla
    LlenarTablaProveedor();

    // Limpiamos los campos
    cleanControlsProveedor();

}

//Guardar objeto en localStorage

function setProveedores(){
    localStorage.setItem('LSProveedores', JSON.stringify(proveedores));
}

//Función para cargar los datos al array
function cargarDatosProveedores(){
    if(localStorage.getItem('LSProveedores')){
 proveedores = JSON.parse(localStorage.getItem('LSProveedores'));}
 return;
}

//Senar select de proveedores

function LlenarListaProveedores(){
    cargarDatosProveedores();
    var selector ="";

    for (let index = 0; index < proveedores.length; index++ ){    
    selector += '<option value=' + proveedores[index].nombre + '>'+proveedores[index].nombre+'</option>';
    }    
    document.getElementById("idProveedoresOrden").innerHTML = selector;
}
