window.onload = function (){

    let formulario = document.querySelector('#createProduct');
    let titulo = document.querySelector('.crearproducto');  


    const inputNombre = document.querySelector("#NombreProducto");
    inputNombre.focus();
    const form = document.querySelector('.form-create');
    form.addEventListener('submit', (e) => {
        
        let errores = [];

        e.preventDefault();

        if(form.nombreProducto.value == '' || form.nombreProducto.value.length < 5 ){
            form.nombreProducto.classList.remove('is-valid');
            form.nombreProducto.classList.add('is-invalid');
            errores.push('Debe escribir el nombre del producto.')
        } else {
            form.nombreProducto.classList.remove('is-invalid');
            form.nombreProducto.classList.add('is-valid');
        }

        if(form.descripcion.value == ''){
            form.descripcion.classList.remove('is-valid');
            form.descripcion.classList.add('is-invalid');
            errores.push('Debe colocar una descripción al producto.')
        } else {
            form.descripcion.classList.remove('is-invalid');
            form.descripcion.classList.add('is-valid');
        }

        if(form.id_categoria.value == ''){
            form.id_categoria.classList.remove('is-valid');
            form.id_categoria.classList.add('is-invalid');
            errores.push('Debe seleccionar una categoria.')
        } else {
            form.id_categoria.classList.remove('is-invalid');
            form.id_categoria.classList.add('is-valid');
        }

        if(form.precio.value == ''){
            form.precio.classList.remove('is-valid');
            form.precio.classList.add('is-invalid');
            errores.push('Escriba el precio del producto')
        } else {
            form.precio.classList.remove('is-invalid');
            form.precio.classList.add('is-valid');
        }


        if(form.images.value == ''){
            form.images.classList.remove('is-valid');
            form.images.classList.add('is-invalid');
            errores.push('Seleccione una imagen para el producto.')
        } else {
            form.images.classList.remove('is-invalid');
            form.images.classList.add('is-valid');
        }


        const ul = document.querySelector(".erroresProduct");

        if(errores.length != 0) {
          ul.innerHTML = '' ;
          ul.classList.add("alert-warning");

          for (let i = 0; i < errores.length; i++) {
            const error = errores[i];
            ul.innerHTML += `<li> ${error} </li>`;
          }
          Swal.fire(
              {icon: 'error',
                title: 'Hubo un error',
                text: 'Por favor, revisa los datos ingresados.'
              }
            )
        }  else {
          ul.innerHTML = '';
          Swal.fire(
            'Bien hecho!',
            'Tu producto ha sido creado.',
            'success'
          ).then(() => {form.submit();})
        }
      })
      
}
    




