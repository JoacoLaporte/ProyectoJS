let nombre = prompt('Ingrese su nombre');
let apellido = prompt('Ingrese su apellido'); 
let email = prompt('Ingrese su mail'); 
let edad = parseInt(prompt('Ingrese su edad')); 

if (edad < 18) { 
    alert(`Lo sentimos ${nombre} ${apellido}, no puedes entrar a este sitio.`);
 } else { 
    alert(`Bienvenido a JOTA ${nombre} ${apellido}`); }


for(let i = 0; i < 3; i++){
    prompt(`Selecciona 3 tipos de Productos que le interesen que saquemos promociones: 
                    1.Iphone
                    2.SmartWatch
                    3.Macbook
                    4.Accesorios
                    5.Fundas`);
    
    }
    alert("Gracias por la informacion brindada");
                

function mostrarListaProductos(){
    
    let productos = parseInt(prompt(`Por favor seleccione el numero del producto que quiere consultar:
                    1.Iphone.
                    2.Apple Watch.
                    3.Macbook.`));

    switch (productos) {
        case 1:
            alert(`Iphone 16 Pro Max: 1500 USD.
               Iphone 16 Plus: 1400 USD.
               Iphone 16: 1200 USD.
               Iphone 15 Pro max: 1300 USD.
               Iphone 15: 1000 USD`);
            break;

        case 2:
            alert(`Apple watch Ultra: 1000 USD.
               Apple watch SE: 800 USD.
               Apple watch G9: 900 USD.`);
            break

        case 3:
            alert(`Macbook Pro M3: 2000 USD.
            Macbook Air M3: 1800 USD.
            Imac: 1700 USD. `);
            break
    
        default:
            alert('Ingresaste un numero invalido.');
            break;
    }
}
mostrarListaProductos();


class Productos{
        constructor(producto, modelo, precio){
            this.producto = producto;
            this.modelo = modelo;
            this.precio = precio;
        }

        calcularPrecioCambio(){
            let dolar = 1300;
            alert(`El valor del producto: ${this.producto}, ${this.modelo} convertido en pesos es de $${this.precio * dolar}`);
        }
}

const iphone = new Productos('iphone', 'Pro max 16', 1500);
iphone.calcularPrecioCambio();



const celulares = [
    {producto: "iphone", modelo: "Pro max 16", precio: 1500},
    {producto: "iphone", modelo: "Plus 16", precio: 1400},
    {producto: "iphone", modelo: "16", precio: 1200},
    {producto: "iphone", modelo: "Pro max 15", precio: 1300},
    {producto: "iphone", modelo: "15", precio: 1000},
    {producto: "iphone", modelo: "Pro max 14", precio: 900},
    {producto: "iphone", modelo: "14", precio: 800},  
    {producto: "iphone", modelo: "Pro max 13", precio: 700},
    {producto: "iphone", modelo: "13", precio: 600}    
];

const busqueda = celulares.filter((elemento)=>elemento.modelo.includes("16"));
console.log(busqueda);


const computadoras = [
    {producto: "mac", modelo: "macbook Pro M3", precio: 2000},
    {producto: "mac", modelo: "macbook Air M3", precio: 1300},
    {producto: "mac", modelo: "Imac", precio: 1500},
    {producto: "mac", modelo: "mini ", precio: 1200},
    {producto: "mac", modelo: "studio", precio: 1800},
];

computadoras.forEach(pc => {console.log(pc);});






const enlaceContacto = document.getElementById("contacto");

let contacto = enlaceContacto.addEventListener('click', function(){
    
    prompt('Envianos tu consulta');
})


let productos = [
    {
        id: 1,
        nombre: "IPhone 16 Pro max",
        precio: 1500,
    },
    {
        id: 2,
        nombre: "IPhone 16 Plus",
        precio: 1350,
    },
    {
        id: 3,
        nombre: "IPhone 16",
        precio: 1200,
    },
    {
        id: 4,
        nombre: "IPhone 15 Pro Max",
        precio: 1400,
    },
    {
        id: 5,
        nombre: "IPhone 15 Plus",
        precio: 1100,
    },
    {
        id: 6,
        nombre: "IPhone 15",
        precio: 1000,
    },
    {
        id: 7,
        nombre: "IPhone 14 Pro max",
        precio: 1150,

    },
    {
        id: 8,
        nombre: "IPhone 14",
        precio: 950,
    }

    ];

    function mostrarProductos(){
        const productosDiv = document.getElementById("productos");
        productos.forEach(producto => {
            const div = document.createElement('div');
            div.innerHTML = 
            `
            <h3>${producto.nombre}</h3>
            <p>precio: $${producto.precio}</p>
            <button onclick="agregarAlCarrito(${producto.id})">Agregar al carrito </button>
            `;
            productosDiv.appendChild(div);

        })
    }

    function agregarAlCarrito(id){
        const CARRITO = JSON.parse(localStorage.getItem('carrito')) || [];
        const PRODUCTO = productos.find(prod => prod.id === id);

        const productoEnCarrito = CARRITO.find(prod => prod.id === id);

        if(productoEnCarrito){
            productoEnCarrito.cantidad += 1;
        }else{
            CARRITO.push({...PRODUCTO, cantidad: 1})
        }

        localStorage.setItem('carrito', JSON.stringify(CARRITO));
        mostrarCarrito();
    }


    function mostrarCarrito(){
        const CARRITO = JSON.parse(localStorage.getItem('carrito')) || [];
        
        const carritoList = document.getElementById('carrito');
        carritoList.innerHTML = '';
        let total = 0;

        CARRITO.forEach(producto => {
            let li = document.createElement('li');
            li.textContent = `${producto.nombre} - ${producto.precio}`;
            li.innerHTML += `<button onclick = "eliminarDelCarrito(${producto.id})"> Eliminar producto </button> `;
            carritoList.appendChild(li);
            total += producto.precio * producto.cantidad;
        });

        document.getElementById('total').textContent = `total: $${total}`

    }


    function eliminarDelCarrito(id) {

        const CARRITO = JSON.parse(localStorage.getItem('carrito')) || [];
        const nuevoCarrito = CARRITO.filter(prod => prod.id !== id);
        
        localStorage.setItem('carrito', JSON.stringify(nuevoCarrito));

        mostrarCarrito();
    }

    document.addEventListener('DOMContentLoaded', () => {
        mostrarProductos();
        mostrarCarrito();
    });
