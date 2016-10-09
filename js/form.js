/**
 * Created by richardcj on 1/7/16.
 */

/**
 *
 * @type {Element}
 */
var form = document.getElementById("form-contact");
var loadingButton = document.createElement("i");
    loadingButton.classList.add("fa","fa-spinner", "fa-spin");
var linkConocido = document.getElementsByName("link");
var conocidoiD = document.getElementById("conocido");


for (var i= 0; i<linkConocido.length; i++){
    linkConocido[i].addEventListener('click',function () {
        if (this.value =='otro'){
            conocidoiD.style.display = 'block';
        }else {
            conocidoiD.style.display = 'none';
        }
    });
}


/**
 * Validación de los campos del formulario de contacto
 */

form.addEventListener("submit", function (evt) {
    //Prevenir que el formulario se envio sin completar la validadción
    evt.preventDefault();
    // Var form Contact
    var nameInput = document.getElementById("nombre");
    var apellidosInput = document.getElementById("last_name");
    var conocidoRadioInput = {
        "link1": document.getElementById("link_1"),
        "link2": document.getElementById("link_2"),
        "link3": document.getElementById("link_3")
    }
    var conocidoInput = document.getElementById("conocido");
    var emailInput = document.getElementById('email');
    var phoneInput = document.getElementById("phone");
    var textAreaInput = document.getElementById("word_count");
    var submitInput = document.getElementById("submit");


    if(nameInput.checkValidity() == false){
        alert('No se te olvide escribir tu nombre');
        nameInputt.focus();
        evt.preventDefault();
        return false;
    }

    if(apellidosInput.checkValidity() == false){
        alert('Escribe los apellidos');
        apellidosInput.focus();
        evt.preventDefault();
        return false;
    }

    if(conocidoRadioInput.link3.checkValidity() == false){
        alert("Seleciona como me conosiste");
        conocidoRadioInput.focus();
        evt.preventDefault();
        return;
    }

    if(conocidoiD.style.display ==='block'){
        if (conocidoInput.checkValidity() == false){
            alert("Escribe como me has conocido?");
            evt.preventDefault();
            return;
        }
    }

    if(emailInput.checkValidity() == false){
        //console.log(emailInput.validity);
        alert("Escribe tu email");
        emailInput.focus();
        evt.preventDefault();
        return false;
    }

    if(phoneInput.checkValidity() == false){
        alert("Escribe tu numero de telefono");
        phoneInput.focus(),
        evt.preventDefault();
        return;
    }

    if (textAreaInput.checkValidity() == false){
        alert("Estas apunto de enviarlo sin asunto!"),
            textAreaInput.focus();
            evt.preventDefault();
        return;
    }

    submitInput.appendChild(loadingButton);

    setTimeout(function () {
        submitInput.removeChild(loadingButton);
    },1000)



});
