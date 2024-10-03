let nombre = prompt('Ingrese su nombre');
let apellido = prompt('Ingrese su apellido');
let email = prompt('Ingrese su mail');
let edad = parseInt(prompt('Ingrese su edad'));

if(edad < 18){
    alert('Lo sentimos ' + nombre + ' ' + apellido + ' no puedes entrar a este sitio.');
}else{
    alert('Bienvenido a JOTA ' + nombre + ' ' + apellido );
}


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

    if(productos === 1){
        alert(`Iphone 16 Pro Max: 1500 USD.
               Iphone 16 Plus: 1400 USD.
               Iphone 16: 1200 USD.
               Iphone 15 Pro max: 1300 USD.
               Iphone 15: 1000 USD`);
    }else if(productos === 2){
        alert(`Apple watch Ultra: 1000 USD.
               Apple watch SE: 800 USD.
               Apple watch G9: 900 USD.`);
    }else if(productos === 3){
        alert(`Macbook Pro M3: 2000 USD.
               Macbook Air M3: 1800 USD.
               Imac: 1700 USD. `);
    }else{
        alert('Ingresaste un numero invalido.');
    }
}
mostrarListaProductos();

