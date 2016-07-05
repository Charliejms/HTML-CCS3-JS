/**
 * Created by richardcj on 1/7/16.
 */

var form = document.getElementById("form-contact");


form.addEventListener("submit", function (evt) {

    var name_input = document.getElementById("nombre");

    if(name_input.checkValidity() == false){
        alert('Escriba tu nombre');
        name_input.focus();
        evt.preventDefault();
        return false;
    }
});
