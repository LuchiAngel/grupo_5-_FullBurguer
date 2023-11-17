window.onload = function () {
   
   
    displayCarrito()
    actualizarCarrito()

}
let displayCarrito = function () {
    let carrito = JSON.parse(localStorage.getItem('carrito'));
    let carritoConteiner = document.querySelector('.selected');
    carritoConteiner.innerHTML = ' '
    if (carrito &&carrito.length>0){
    carrito.forEach(element => {
        carritoConteiner.innerHTML += `
        <article>
        <ul> 
            <li><img class= "fotoProducto" src="/images/products/${element.img}" alt=''></li>
            <li><h4 class="nombreHamburguesa">${element.nombre}</h4></li>    
            <li><p class="descripcionHamburguesa">${element.descr}</p></li>
            <li class="mas"><button type="button"><i onClick='sumar(${element.id})' class="fa-solid fa-plus"></i></button></li>
            <li><p class="cantidad">${element.quantity}</p></li>
            <li class="menos"><button type="button"><i onClick='restar(${element.id})' class="fa-solid fa-minus"></i></button></li>
            <li><p class="precioTotal">$${element.price * element.quantity}</p></li>
        </ul>
</article>
        `;
    });
}else{
    carritoConteiner.innerHTML = '<button class= "mensajeCarritoVacio" id="emptyCartMessage"> ¡Eligí tu combo y disfrutá!</button>'
    let emptyCartMessage = document.getElementById('emptyCartMessage');
    emptyCartMessage.addEventListener('click', redirectToProductList);
    function redirectToProductList() {
        window.location.href ='/product/list';
        
    }

}
}
let actualizarCarrito = function () {
    let productos = JSON.parse(localStorage.getItem('carrito'));
    let suma = productos.reduce((acum, current) => acum + current.subtotal, 0);
    let total = document.getElementById('total');
    total.innerHTML = `TOTAL $${suma}`
}
let sumar = function (id) {
    let productos = JSON.parse(localStorage.getItem('carrito'));
    let producto = productos.find((row) => row.id == id);
    producto.quantity += 1;
    producto.subtotal = producto.quantity * producto.price;
    localStorage.setItem('carrito', JSON.stringify(productos));
    displayCarrito()
    actualizarCarrito()
};
let restar = function (id) {
    let productos = JSON.parse(localStorage.getItem('carrito'));
    let producto = productos.find((row) => row.id == id);
    producto.quantity -= 1;
    producto.subtotal = producto.quantity * producto.price;
    if( producto.quantity ==0){
        borrar(id)
        return
    }
    localStorage.setItem('carrito', JSON.stringify(productos));
    displayCarrito()
    actualizarCarrito()
};
let borrar = function (id) {
    let productos = JSON.parse(localStorage.getItem('carrito'));
    let productosFiltrados = productos.filter((row) => row.id != id);
    localStorage.setItem('carrito', JSON.stringify(productosFiltrados));
    displayCarrito()
    actualizarCarrito()


}