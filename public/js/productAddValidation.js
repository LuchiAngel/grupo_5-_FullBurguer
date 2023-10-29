window.onload = function () {
    const captName = document.querySelector("#nombreProducto");
    captName.focus();
    const form = document.querySelector("form");
    form.addEventListener("submit", (e) => {
      let errores = [];
  
      e.preventDefault();
      //Nombre de Producto
      if (form.nombre.value == "") {
        form.nombre.classList.remove("is-valid");
        form.nombre.classList.add("is-invalid");
        errores.push("Debe ingresar el nombre del producto");
      } else if (form.nombre.value.length < 5) {
        form.nombre.classList.remove("is-valid");
        form.nombre.classList.add("is-invalid");
        errores.push("El nombre del producto debe tener al menos 5 caracteres");
      } else {
        form.nombre.classList.remove("is-invalid");
        form.nombre.classList.add("is-valid");
      }
      //Descripcion
      if (form.descripcion.value == "") {
        form.descripcion.classList.remove("is-valid");
        form.descripcion.classList.add("is-invalid");
        errores.push("No ingresó descripcion del producto");
      } else if (form.descripcion.value.length < 20) {
        form.descripcion.classList.remove("is-valid");
        form.descripcion.classList.add("is-invalid");
        errores.push("La descripción debe tener al menos 20 cáracteres");
      } else {
        form.descripcion.classList.remove("is-invalid");
        form.descripcion.classList.add("is-valid");
      }
      //Categoria
      if (form.id_categoria.value == "") {
        form.id_categoria.classList.remove("is-valid");
        form.id_categoria.classList.add("is-invalid");
        errores.push("Debe selecionar una categoría para el producto");
      } else {
        form.id_categoria.classList.remove("is-invalid");
        form.id_categoria.classList.add("is-valid");
      }
      //Precio
      if (form.precio.value == "") {
        form.precio.classList.remove("is-valid");
        form.precio.classList.add("is-invalid");
        errores.push("No ingresó precio del producto");
      } else {
        form.precio.classList.remove("is-invalid");
        form.precio.classList.add("is-valid");
      }
     //Images
      if (!allowedExtensions.exec(images.value)) {
        form.images.classList.remove("is-valid");
        form.images.classList.add("is-invalid");
        errores.push(
          "Deberá ser un archivo válido (JPG, JPEG, PNG, GIF). "
        );
      } else {
        form.images.classList.remove("is-invalid");
        form.images.classList.add("is-valid");
      }

      //Errores
      const ul = document.querySelector(".errores");
      if (errores.length != 0) {
        ul.innerHTML = "";
        ul.classList.add("alert-warning");
        for (let i = 0; i < errores.length; i++) {
          const error = errores[i];
          ul.innerHTML += `<li> ${error} </li>`;
        }
        Swal.fire(
          
            {icon : 'error',
                title : 'Hubo un error!',
                text : 'Revisar los errores!'
            })
      } 
      else {
        ul.innerHTML = '';
        Swal.fire(
          'Bien hecho',
          'Se creo un producto nuevo',
          'success full'
        ).then(()=> {form.submit();})
      }
    });
    
  };