window.onload = function (){

    let formulario = document.querySelector('#editarUsuario');


    const inputNombreUsuario = document.querySelector("#name");
    inputNombreUsuario.focus();
    const form = document.querySelector('.form-edit-users');
    form.addEventListener('submit', (e) => {
        
        let errores = [];

        e.preventDefault();

        if(form.name.value == '' || form.name.value.length < 5 ){
            form.name.classList.remove('is-valid');
            form.name.classList.add('is-invalid');
            errores.push('Debe escribir su nombre completo.')
        } else {
            form.name.classList.remove('is-invalid');
            form.name.classList.add('is-valid');
        }

        if(form.birthday.value == ''){
            form.birthday.classList.remove('is-valid');
            form.birthday.classList.add('is-invalid');
            errores.push('Debe colocar su fecha de nacimiento.')
        } else {
            form.birthday.classList.remove('is-invalid');
            form.birthday.classList.add('is-valid');
        }

        if(form.address.value == ''){
            form.address.classList.remove('is-valid');
            form.address.classList.add('is-invalid');
            errores.push('Debe escribir su dirección.')
        } else {
            form.address.classList.remove('is-invalid');
            form.address.classList.add('is-valid');
        }

        if(form.password.value == '' || form.password.value.length < 8 ){
            form.password.classList.remove('is-valid');
            form.password.classList.add('is-invalid');
            errores.push('La contraseña debe tener como mínimo 8 caracteres.')
        } else {
            form.password.classList.remove('is-invalid');
            form.password.classList.add('is-valid');
        }

        if(form.confirmPassword.value == '' || form.confirmPassword.value != form.password.value){
            form.confirmPassword.classList.remove('is-valid');
            form.confirmPassword.classList.add('is-invalid');
            errores.push('Las contraseñas no coinciden.')
        } else {
            form.confirmPassword.classList.remove('is-invalid');
            form.confirmPassword.classList.add('is-valid');
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
            'Tu usuario ha sido modificado',
            'success'
          ).then(() => {form.submit();})
        }
      })
      
}
    