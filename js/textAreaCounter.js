/**
 * Created by richardcj on 3/7/16.
 */

//Contador de palabras
$(document).ready(function() {
    $("#word_count").on('keyup', function() {

        var words = this.value.match(/\S+/g).length;

        if (words > 150) {
            // Split the string on first 150 words and rejoin on spaces
            var trimmed = $(this).val().split(/\s+/, 150).join(" ");
            // Add a space at the end to keep new typing making new words
            $(this).val(trimmed + " ");
        } else {
            $('#display_count').text(words);
            $('#word_left').text(150-words);
        }

    });
});