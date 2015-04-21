"use strict";

var LOCALE;

function Locale() {
    var language = navigator.language || navigator.userLanguage;
    var country; //It´s needed to get the country and store it
    if (language != 'es' && language != 'en') {
        language = 'en';
    }
    if (language === 'es') {
        country = "ES";
    }
    if (language === 'en') {
        country = "US";
    }

    this.language = language;
    this.country = country;
    this.tagISO = language + "-" + country;
    this.formatNumber = function (number) {
        return number.toLocaleString(this.tagISO);
    }
}

$(document).ready(function () {
    LOCALE = new Locale();
    $.getScript('/localization/values/' + LOCALE.language + "/strings.js", function (data, textStatus, jqxhr) {
        console.log(data);
        $.getScript('/localization/values/homepage.js');
    });





});

