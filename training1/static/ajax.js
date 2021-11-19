// https://api.jquery.com/jquery.ajax/

function loadForm() {
	const httpRequest = new XMLHttpRequest();

	httpRequest.onload = function(){
		if (httpRequest.readyState === XMLHttpRequest.DONE) {
			const countries = JSON.parse(this.responseText);
			var content = '';
			for (var i=0; i < countries.length; i++) {
				content += '<option value="' + countries[i].id + '"">' + countries[i].name + '</option>';
			}
			document.getElementsByName("country_id")[0].innerHTML = content;
			document.getElementById('loading').style.display = 'none';
		}
	};
	httpRequest.open('GET', '/jstest/countries');
	httpRequest.send();
}

//	html
// function loadForm() {
// 	$.ajax({
// 		url: "/jstest/countries",
// 	}).done(function(result) {
// 		const countries = JSON.parse(result);
// 		$.each(countries, function(i, country) {
// 			$("[name='country_id']").append(
// 				'<option value="' + country.name + '">' + country.name + '</option>'
// 			);
// 		});
// 		$("#loading").hide();
// 	});
// }

// json
//https://github.com/odoo/odoo/blob/13.0/addons/web/static/src/js/core/ajax.js#L124
// function loadForm() {
// 	$.ajax({
// 		url: "/jstest/countries/json",
// 		contentType: 'application/json',
// 		dataType: 'json',
// 		type: 'POST',
// 		data: JSON.stringify({
// 			id: 511179091,
// 			jsonrpc: "2.0"
// 		})
// 	}).done(function(countries) {
// 		$.each(countries.result, function(i, country) {
// 			$("[name='country_id']").append(
// 				'<option value="' + country.name + '">' + country.name + '</option>'
// 			);
// 		});
// 		$("#loading").hide();
// 	});
// }

// fetch
// function loadForm() {

// 	const PromC = new Promise(async function ( resolve ) {
// 		let response = await fetch('/jstest/countries');
// 		let countries = await response.json();
// 		resolve (countries);
// 	});
// 	PromC.then(function (countries) {
// 		var content = '';
// 		for (var i=0; i < countries.length; i++) {
// 			content += '<option value="' + countries[i].id + '"">' + countries[i].name + '</option>';
// 		}
// 		document.getElementsByName("country_id")[0].innerHTML = content;
// 		document.getElementById('loading').style.display = 'none';
// 	});
// }
