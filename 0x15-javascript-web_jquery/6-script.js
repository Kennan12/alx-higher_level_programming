#!/usr/bin/node
/**
 * update the text color of the <header> element to red
 * use JQUERY
 */
const $ = window.$;
$('DIV#update_header').click(function () {
        $('header').text('New Header!!!');
});
