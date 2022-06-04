//OBJETOS
//Los usamos para agrupar valores bajo un mismo criterio.
// let nombre = "harina";
// let codigo = 001;
// let precio = 190;
// const producto1 = { nombre : "harina", codigo : 001, precio : 190 }

//Como obtenemos los valores del objeto: ----------------------
//Por notacion de punto:
//console.log(producto1.nombre);

//Notacion corchetes:
//console.log(producto1["nombre"]);

//Asigno valor a las propiedades con ambas notaciones:---------
//producto1.nombre = "Arroz";
//producto1.["nombre"] = "Arroz";

//CONSTRUCTORES---------------
//Funcion para crear un nuevo objeto

// class Producto{
//     constructor(nombre, codigo, precio){
//         this.nombre = nombre;
//         this.codigo = codigo;
//         this.precio = precio;
//     }
//  }
// const producto1 = new Producto(nombre1, codigo1, precio1);

//Metodos--------------------
// class Producto{
//     constructor(nombre, codigo, precio){
//         this.nombre = nombre;
//         this.codigo = codigo;
//         this.precio = precio;
//     }
//     aplicarIva(precio){
//         return precio * 1.21;
//     }
// }

// let nombre1 = prompt("Ingrese el nombre del producto: ");
// let codigo1 = prompt("Ingrese el codigo del producto: ");
// let precio1 = prompt("Ingrese el precio: ");

// const producto1 = new Producto(nombre1, codigo1, precio1);
// precio_con_iva1 = producto1.aplicarIva(precio1);

// alert(`Producto ingresado: ${producto1.nombre}- Codigo: ${producto1.codigo}- Precio: ${producto1.precio}- Precio con iva: ${producto1.aplicarIva(precio1)} `)
