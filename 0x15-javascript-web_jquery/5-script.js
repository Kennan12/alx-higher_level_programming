#!/usr/bin/node
/**
 * add a <li> element to a list when the user clicks
 * use JQUERY
 */
const $ = window.$;
$('DIV#add_item').click(function () {
        $('UL.my_list').append('<li>Item</li>');
});
