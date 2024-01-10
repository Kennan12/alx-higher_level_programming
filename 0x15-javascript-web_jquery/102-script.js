$(document).ready(function () {
	$('INPUT#btn_translate').click(function () {
		$('DIV#hello').empty();
		const language = $('INPUT#language_code').val();
		$.getJSON('https://hellosalut.stefanbohacek.dev/?lang=fr'
			+ language,
			function (data) {
				$('DIV#hello').append(data.hello);
			}
		);
	});
});
