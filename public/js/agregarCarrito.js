window.onload = function(){
    const agregarBoton = document.querySelector(".addCart")
   if(JSON.parse(localStorage.getItem('carrito'))== null){
    localStorage.setItem('carrito', JSON.stringify([]));
   }
   let nombre= document.querySelector('#name');
   let id= document.querySelector('#idProduct');
   let descr= document.querySelector('#descr');
   let img = document.querySelector('#img');
   let price= document.querySelector('#price');

    agregarBoton.addEventListener('click', function(){
        const carrito = JSON.parse(localStorage.getItem('carrito'));
        const producto ={
            id: id.innerText,
            nombre: nombre.innerText,
            descr: descr.innerText,
            price: parseFloat(price.innerText),
            img: img.alt,
        }
        if( carrito.length > 0){
            let productoCarrito = carrito.find(row=> row.id == producto.id);
            if (productoCarrito){
                productoCarrito.quantity +=1
                productoCarrito.subtotal += producto.price 
            }else{
                producto.quantity = 1
                producto.subtotal = producto.quantity * producto.price
                carrito.push(producto);      
            }

        }else{
            producto.quantity = 1
            producto.subtotal = producto.quantity * producto.price
            carrito.push(producto);
        }
        localStorage.setItem('carrito', JSON.stringify(carrito));
        console.log(producto);
        window.location.href='/product/list';
    })




}
