window.onload = function (){

    let formulario = document.querySelector('#registro');
    let titulo = document.querySelector('.cuenta');  


    const inputNombre = document.querySelector("#NombreApellido");
    inputNombre.focus();
    const form = document.querySelector('.form-login');
    form.addEventListener('submit', (e) => {
        
        let errores = [];

        e.preventDefault();

        if(form.nombre.value == '' || form.nombre.value.length < 5 ){
            form.nombre.classList.remove('is-valid');
            form.nombre.classList.add('is-invalid');
            errores.push('Debe escribir su nombre completo.')
        } else {
            form.nombre.classList.remove('is-invalid');
            form.nombre.classList.add('is-valid');
        }

        if(form.fecha.value == ''){
            form.fecha.classList.remove('is-valid');
            form.fecha.classList.add('is-invalid');
            errores.push('Debe colocar su fecha de nacimiento.')
        } else {
            form.fecha.classList.remove('is-invalid');
            form.fecha.classList.add('is-valid');
        }

        if(form.address.value == ''){
            form.address.classList.remove('is-valid');
            form.address.classList.add('is-invalid');
            errores.push('Debe escribir su dirección.')
        } else {
            form.address.classList.remove('is-invalid');
            form.address.classList.add('is-valid');
        }

        if(form.email.value == ''){
            form.email.classList.remove('is-valid');
            form.email.classList.add('is-invalid');
            errores.push('Por favor, escriba su email.')
        } else {
            form.email.classList.remove('is-invalid');
            form.email.classList.add('is-valid');
        }

        //El avatar tiene que ser obligatorio?
       /* if(form.avatar.value == ''){
            form.avatar.classList.remove('is-valid');
            form.avatar.classList.add('is-invalid');
        } else {
            form.avatar.classList.remove('is-invalid');
            form.avatar.classList.add('is-valid');
        }*/ 

        if(form.id_roles.value == ''){
            form.id_roles.classList.remove('is-valid');
            form.id_roles.classList.add('is-invalid');
            errores.push('Debe seleccionar alguna opción.')
        } else {
            form.id_roles.classList.remove('is-invalid');
            form.id_roles.classList.add('is-valid');
        }

        if(form.password.value == '' || form.password.value.length < 8 ){
            form.password.classList.remove('is-valid');
            form.password.classList.add('is-invalid');
            errores.push('La contraseña debe tener como mínimo 8 caracteres.')
        } else {
            form.password.classList.remove('is-invalid');
            form.password.classList.add('is-valid');
        }

        if(form.ConfirmarContrasenia.value == '' || form.ConfirmarContrasenia.value != form.password.value){
            form.ConfirmarContrasenia.classList.remove('is-valid');
            form.ConfirmarContrasenia.classList.add('is-invalid');
            errores.push('Las contraseñas no coinciden.')
        } else {
            form.ConfirmarContrasenia.classList.remove('is-invalid');
            form.ConfirmarContrasenia.classList.add('is-valid');
        }

        const ul = document.querySelector(".errores");

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
            'Tu usuario ha sido creado',
            'success'
          ).then(() => {form.submit();})
        }
      })
      
}
    




