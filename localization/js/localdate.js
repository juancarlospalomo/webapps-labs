"use strict"

function LocalDate(value) {
    
    var date;
    var time;

    if (value === undefined) {
        value = new Date();
    } else {
        value = new Date(value);
    }


    date = new Date(value.getFullYear() + "-" + (value.getMonth()+1) + "-" + value.getDate());

    this.getDate = function () {
        //Format date: 
        //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString
        //http://marcoscaceres.github.io/jsi18n/
        var options = {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric"
        };
        return date.toLocaleDateString(LOCALE.tagISO, options);
    }

}