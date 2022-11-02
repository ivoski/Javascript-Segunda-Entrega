
function loginadmin(){
    let nombreadmin = prompt ("Ingrese su nombre de administrador")
    if (nombreadmin == "Ivoski"){
        alert("¡Hola, Ivoski!");
        sacarturno()
    }else{
        alert("You not Ivoski, Get out here!");
    }

}

function sacarturno(){
    for (let i = 1; i <= 5; i++) {
        let ingresarNombre = prompt ("Ingresar Nombre para sacar un turno");
        alert("Turno N°"+i+"Nombre: "+ingresarNombre);
    }
}

loginadmin();

class Producto {
    constructor(nombre, precio) {
        this.nombre  = nombre;
        this.precio  = parseFloat(precio);
        this.stock = true;
    }
    sumaIva() {
        return(this.precio * 1.21);
    }
}

const productos = [];
productos.push(new Producto("Shampoo", 370));
productos.push(new Producto("Polvo para textura", 400));
productos.push(new Producto("Tintura", 700));

for (const producto of productos){
    console.log("------------")
    console.log(producto.nombre)
    console.log(producto.precio)
}

