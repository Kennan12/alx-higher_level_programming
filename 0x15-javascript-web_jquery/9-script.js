#!/usr/bin/node
/**
 * fetches from https://hellosalut.stefanbohacek.dev/?lang=fr
 * you must use API
 */
const $ = window.$;
const url = 'https://hellosalut.stefanbohacek.dev/?lang=fr';
$.get(url, function (data) {
        const hello = data.hello;
        $('DIV#hello').text(hello);
});
