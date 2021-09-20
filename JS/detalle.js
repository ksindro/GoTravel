//detalle y funciones
var detalles = [];

//Constr
function Detalle ( nproducto, cantidadOrden, precioU, proveedor, fecha) {
   
    this.nproducto = nproducto,
    this.cantidadOrden = cantidadOrden,
    this.precioU = precioU,
    this.proveedor=proveedor,
    this.fecha=fecha    
}

//Leena array de detalles
function addDetalleArray(){      
    var nproducto = document.getElementById("idProductoOrden").value;
    var cantidadOrden = document.getElementById("idCantidadOrden").value;
    var precioU = document.getElementById("idPrecioOrden").value;
    var proveedor=document.getElementById("idProveedoresOrden").value;
    var fecha = document.getElementById("idFechaOrden").value;   
    
    var detalle = new Detalle(nproducto, cantidadOrden, precioU,proveedor,fecha);
    detalles.push(detalle);
}

//llena tabla de detalle de ordenes de compra
function LlenarTablaDetalle(){

    var total = 0;
    var scriptTabla = "";
    var script = "";

    for (let index = 0; index < detalles.length; index++) {
        scriptTabla += "<tr>";
        scriptTabla += "<td>" + detalles[index].fecha+ "</td>" ;
        scriptTabla += "<td>" + detalles[index].proveedor+ "</td>" ;
        scriptTabla += "<td>" + detalles[index].nproducto+ "</td>" ;
        scriptTabla += '<td class = "tdright">' + detalles[index].cantidadOrden+ "</td>" ;
        scriptTabla += '<td class = "tdright">' + detalles[index].precioU + "</td>" ;
        scriptTabla += '<td class = "tdright">' + detalles[index].cantidadOrden * detalles[index].precioU + "</td>";
        scriptTabla += "</tr>";
        total += (detalles[index].cantidadOrden * detalles[index].precioU);       
    }    
 
    document.getElementById("idTablaDetalle").innerHTML = scriptTabla;
    document.getElementById("totalOrden").innerHTML = "Total: "+total;
    document.getElementById("idDivOrden").innerHTML = script;
}

//Alert para evitar campos vacios en compra 

function validarCamposDetalle(){

    if (document.getElementById("idProductoOrden").value == ""){
        alert("Debe indicar Producto");
        return false;
    }

    if (document.getElementById("idCantidadOrden").value == ""){
        alert("Debe indicar Cantidad");
        return false;
    }
    if (document.getElementById("idPrecioOrden").value == ""){
        alert("Debe indicar precio");
        return false;
    }

}

// clear para ingresar mas datos
function cleanControlsDetalle(){
    document.getElementById("idCantidadOrden").value = "";
    document.getElementById("idPrecioOrden").value = "";
}

//agregar y guardar detalle btn="guardar"
function addDetalle() {

    //Valida cada uno de los campos
    if (validarCamposDetalle() == false){
        return false;
    }
    cargarDatosDetalle();    
    //Agrega producto a array
    addDetalleArray();      
    //guardar producto en LS
    setDetalle();
    //Rellenos tabla
    LlenarTablaDetalle();
    //clear a los campos
    cleanControlsDetalle();
}
//Guarda detalle en LS tempralmente
function setDetalle(){
    localStorage.setItem('LSDetalles', JSON.stringify(detalles));
}

//Carga datos desde LS a array
function cargarDatosDetalle() {
    if(localStorage.getItem('LSDetalles')){
 detalles = JSON.parse(localStorage.getItem('LSDetalles'));}
 return;
}

//Funcion para eliminar detalle
function eliminarDetalle(i){
    if(confirm("esta seguro de eliminar este detalle")){
        detalles.splice(i,1);
        localStorage.setItem('LSDetalles', JSON.stringify(detalles));
        LlenarTablaDetalle();
    }
}

