

// // Función para inicializar la aplicación
// function iniciarApp() {
//     mostrarProductos();
//     cargarCarrito();
//     actualizarIconoCarrito();
//   }

// //   function filtrarProductosPorTipo(tipo) {
// //     return productos.filter(producto => producto.tipo === tipo);
// // }
  
//   // Mostrar productos en la página
//   function mostrarProductos() {
//     const productsContainer = document.getElementById('products-container');
//     const categoria = productsContainer.getAttribute('data-categoria');
//     const productosFiltrados = productos.filter(producto => producto.categoria === categoria);
//     productsContainer.innerHTML = '';
//     productosFiltrados.forEach(producto => {
//       const productElement = document.createElement('div');
//       productElement.classList.add('product-item');
//       productElement.innerHTML = `
//         <img src="${producto.imagen}" alt="${producto.nombre}">
//         <p>${producto.nombre} <br>  $${producto.precio}</p>
//         <button onclick="agregarAlCarrito(${producto.id})">Comprar</button>
//       `;
//       productsContainer.appendChild(productElement);
//     });
//   }


//   // Agregar producto al carrito
//   function agregarAlCarrito(id) {
//     const producto = productos.find(prod => prod.id === id);
//     if (!producto) return;
    
//     const productoEnCarrito = carrito.find(prod => prod.id === id);
//     if (productoEnCarrito) {
//       productoEnCarrito.cantidad++;
//     } else {
//       carrito.push({...producto, cantidad: 1});
//     }
//     guardarCarrito();
//     actualizarIconoCarrito();
//   }
  
//   // Cargar carrito desde localStorage
//   function cargarCarrito() {
//     const carritoGuardado = localStorage.getItem('carrito');
//     if (carritoGuardado) {
//       carrito = JSON.parse(carritoGuardado);
//       actualizarIconoCarrito();
//     }
//   }
  
//   // Guardar carrito en localStorage
//   function guardarCarrito() {
//     localStorage.setItem('carrito', JSON.stringify(carrito));
//   }
  
//   // Actualizar el icono del carrito
//   function actualizarIconoCarrito() {
//     const cartIcon = document.getElementById('carrito-icono');
//     const cartCount = carrito.reduce((total, prod) => total + prod.cantidad, 0);
//     cartIcon.textContent = `Carrito (${cartCount})`;
//   }
  
//   // Abrir modal del carrito
//   function abrirModalCarrito() {
//     const cartModal = document.getElementById('cart-modal');
//     cartModal.style.display = 'block';
//     mostrarProductosEnCarrito();
//   }
  
//   // Mostrar productos en el modal del carrito
//   function mostrarProductosEnCarrito() {
//     const cartContent = document.getElementById('cart-content');
//     cartContent.innerHTML = '';
//     let total = 0; // Inicializa el total en 0
//     carrito.forEach(producto => {
//       const productElement = document.createElement('div');
//       const subtotal = producto.precio * producto.cantidad; // Calcula el subtotal del producto
//       total += subtotal; // Agrega el subtotal al total
//       productElement.innerHTML = `
//         <div class="product-item">
//           <img src="${producto.imagen}" alt="${producto.nombre}">
//           <p>${producto.nombre} <br> $${producto.precio} (${producto.cantidad})</p>
//           <p>Subtotal: $${subtotal}</p>
//           <button onclick="eliminarDelCarrito(${producto.id})">Eliminar</button>
//         </div>
//       `;
//       cartContent.appendChild(productElement);
//     });
  
//     // Agrega el total al final del contenido del modal del carrito
//     const totalElement = document.createElement('p');
//     totalElement.textContent = `Total: $${total}`;
//     cartContent.appendChild(totalElement);
//   }
  
//   // Eliminar producto del carrito
//   function eliminarDelCarrito(id) {
//     const index = carrito.findIndex(prod => prod.id === id);
//     if (index !== -1) {
//       carrito[index].cantidad--;
//       if (carrito[index].cantidad === 0) {
//         carrito.splice(index, 1);
//       }
//       guardarCarrito();
//       actualizarIconoCarrito();
//       mostrarProductosEnCarrito();
//     }
//   }
  
//   // Vaciar completamente el carrito
//   function vaciarCarrito() {
//     carrito = [];
//     guardarCarrito();
//     actualizarIconoCarrito();
//     mostrarProductosEnCarrito();
//   }
  
//   // Evento al hacer clic en el icono del carrito
//   document.getElementById('carrito-icono').addEventListener('click', abrirModalCarrito);
  
//   // Evento al hacer clic en el botón "Vaciar carrito" en el modal
//   document.getElementById('clear-cart-btn').addEventListener('click', vaciarCarrito);
  
//   // Evento para cerrar el modal al hacer clic en la X
//   document.querySelectorAll('.close').forEach(closeBtn => {
//     closeBtn.addEventListener('click', () => {
//       document.getElementById('cart-modal').style.display = 'none';
//     });
//   });
  
//   // Iniciar la aplicación al cargar la página
//   window.addEventListener('load', iniciarApp);

let carrito = [];
let productos = [];

const contenedorProductos = document.getElementById('contenedorProductos');
const itemsCarrito = document.getElementById('items-carrito');
const contadorCarrito = document.getElementById('contador-carrito');
const precioTotal = document.getElementById('precio-total');
const carritoSeccion = document.getElementById('carrito');

async function getProductosJson(categoria){
  try{
    
    const contenedorMaHhome = document.getElementById('contenedorMaHhome').style.display = 'none';
    const contenedorWatchHome = document.getElementById('contenedorWatchHome').style.display = 'none';

    const response = await fetch('/productos.json');
    const productosJson = await response.json();
    productos = productosJson.productos;

    contenedorProductos.innerHTML = '';
    const productosFiltrados = productos.filter(producto => producto.categoria === categoria);


    const listaProductos = document.createElement('div');

    productosFiltrados.forEach(producto => {
      const div = document.createElement('div');
      div.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.nombre}" />
        <h3>${producto.nombre}</h3>
        <p>$${producto.precio}</p>
        <button onclick="agregarAlCarrito(${producto.id})">Agregar al carrito </button>
      `
      //li.textContent = producto.nombre;
      listaProductos.appendChild(div)
    });

    contenedorProductos.appendChild(listaProductos);
  }catch(error){
    console.log('Hay un error')
  }
}

function agregarAlCarrito(id){
  //const CARRITO = JSON.parse(localStorage.getItem('carrito')) || [];
  const producto = productos.find(item => item.id === id);
  carrito.push(producto);
  //const productoEnCarrito = carrito.find(prod => prod.id === id);
  
  if(producto){
    producto.cantidad += 1;
  }else{
    carrito.push({...producto, cantidad: 1})
  }
  
  //localStorage.setItem('carrito', JSON.stringify(CARRITO));
  
  Toastify({
    text: `${producto.nombre}, agregado al carrito`,
    duration: 1500,
    gravity: "top",
    position: "right",
    style:{
      backgroundColor: "black",
    }
    
  }).showToast();
  
  actulizarCarrito();


}

function eliminarDelCarrito(indice){
  carrito.splice(indice, 1);
  actulizarCarrito();
}

function renderizarCarrito(){
  itemsCarrito.innerHTML = '';
  carrito.forEach((item, indice) =>{
    const li = document.createElement('li');
    li.innerHTML = `
      ${item.nombre} - ${item.precio}
      <button onclick = "eliminarDelCarrito(${indice})"> X </button>
    `
    itemsCarrito.appendChild(li)
  })
}

function actualizarTotal(){
  
  const total = carrito.reduce((acum, item) => acum + item.precio, 0 );
  precioTotal.textContent = total;
  }

  function actualizarContador(){
    contadorCarrito.textContent = carrito.length;
  }

function actulizarCarrito(){
  renderizarCarrito();
  actualizarTotal();
  actualizarContador();
}


