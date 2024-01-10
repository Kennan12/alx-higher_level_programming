#!/usr/bin/node
/**
 * update the text color of the <header> element to red
 * you must use JQuery API
 */
const $ = window.$;
$('DIV#red_header').click(function () {
        $('header').addClass('red');
});
