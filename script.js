// Mostrar el día de la semana en el encabezado
const diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
const fechaActual = new Date();
const diaSemana = diasSemana[fechaActual.getDay()];
document.getElementById('dia-semana').textContent = `Hoy es: ${diaSemana}`;

// Alerta al enviar formulario en Contáctenos
function enviarFormulario() {
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const telefono = document.getElementById('telefono').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;

    alert(`Nombre: ${nombre}\nApellido: ${apellido}\nTeléfono: ${telefono}\nEmail: ${email}\nMensaje: ${mensaje}`);
}

let carrito = [];
let total = 0;

// Función para agregar un producto al carrito con su precio
function agregarAlCarrito(producto, precio) {
    carrito.push({ nombre: producto, precio: precio });
    total += precio;  // Sumar el precio al total
    mostrarCarrito();
}

// Función para mostrar el contenido del carrito y el total
function mostrarCarrito() {
    const carritoDiv = document.getElementById('carrito');
    const totalDiv = document.getElementById('total');
    carritoDiv.innerHTML = '';  // Limpiar contenido previo

    if (carrito.length === 0) {
        carritoDiv.innerHTML = '<p>Tu carrito está vacío.</p>';
    } else {
        const listaProductos = document.createElement('ul');
        carrito.forEach((producto) => {
            const itemProducto = document.createElement('li');
            itemProducto.textContent = `${producto.nombre} - $${producto.precio.toFixed(2)}`;
            listaProductos.appendChild(itemProducto);
        });
        carritoDiv.appendChild(listaProductos);
    }

    // Actualizar el total en la página
    totalDiv.textContent = `Total: $${total.toFixed(2)}`;
}