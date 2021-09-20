var ventas = [];

function venta(nit, nombre, direccion){
    this.nit=nit,
    this.nombre=nombre,
    this.direccion=direccion
}

function addVenta(){
    CargarVenta();
    addPedidoArray();
    setVenta();
    llenarVenta();
}

function addPedidoArray(){
    var nit= document.getElementById("idNIT").value;
    var nombre= document.getElementById("idnombre").value;
    var direccion= document.getElementById("idDireccion").value;

    var venta = new venta(nit, nombre, direccion);
    ventas.push(ventas);
}



function CargarVenta(){
    if(localStorage.getItem('LSPedido2')){
        ventas = JSON.parse(localStorage.getItem('LSPedido2'));
    }
    return;
}

function setVenta(){
    localStorage.setItem('LSPedido2', JSON.stringify(ventas));
}


function llenarVenta(){

    var scriptTabla = "";
    //var total = 0;
    for(let index = 0; index < ventas.length; index++){
     
        scriptTabla += '<tr>';
        scriptTabla += "<td>" + ventas[index].nit+ "</td>" ;
        scriptTabla += "<td>" + ventas[index].nombre + "</td>" ;
        scriptTabla += "<td>" + ventas[index].direccion + "</td>" ;
        scriptTabla +=  '</tr>';
}
}