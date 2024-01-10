#!/usr/bin/node
/**
 * update the text color of the <header> element to red
 * use JQUERY
 */
const $ = window.$;
$('DIV#toggle_header').click(function () {
	$('header').toggleClass('green');
        $('header').toggleClass('red');
});
