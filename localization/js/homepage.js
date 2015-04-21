$(document).ready(function () {
    
    $('#buttonClick').click(function () {
        $('#labelTagISOValue').html(LOCALE.tagISO);
        $('#labelDateValue').html(new LocalDate().getDate());
        $('#labelNumberValue').html(LOCALE.formatNumber(3.1));
    });

});