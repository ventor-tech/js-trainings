async function loadForm() {

	console.log('----  START  ---')
	let response = await fetch('/jstest/countries');
	console.log('----  1  ---')
	let response2 = await fetch('/jstest/teams');
	console.log('----  2  ---')
	let countries = await response.json();
	console.log('----  3  ---')
	let teams = await response2.json();
	console.log('----  4  ---')
	var content = '';
	console.log('----  5  ---')
	for (var i=0; i < countries.length; i++) {
		content += '<option value="' + countries[i].id + '"">' + countries[i].name + '</option>';
	}
	console.log('----  6  ---')
	document.getElementsByName("country_id")[0].innerHTML = content;
	console.log('----  7  ---')
	var content2 = '';
	console.log('----  8  ---')
	for (var i=0; i < teams.length; i++) {
		content2 += '<option value="' + teams[i].id + '"">' + teams[i].name + '</option>';
	}
	console.log('----  9  ---')
	document.getElementsByName("team_id")[0].innerHTML = content2;
	console.log('----  10  ---')

	document.getElementById('loading').style.display = 'none';
	console.log('----  11  ---')

}


// function loadForm() {

// 	const PromC = new Promise(async function ( resolve ) {
// 		let response = await fetch('/jstest/countries');
// 		let countries = await response.json();
// 		resolve (countries);
// 	});

// 	const PromT = new Promise(async function ( resolve ) {
// 		let response = await fetch('/jstest/teams');
// 		let teams = await response.json();
// 		resolve (teams);
// 	});

// 	Promise.all([PromC, PromT]).then(function([countries, teams]) {
// 		var content = '';
// 		for (var i=0; i < countries.length; i++) {
// 			content += '<option value="' + countries[i].id + '"">' + countries[i].name + '</option>';
// 		}
// 		document.getElementsByName("country_id")[0].innerHTML = content;

// 		var content2 = '';
// 		for (var i=0; i < teams.length; i++) {
// 			content2 += '<option value="' + teams[i].id + '"">' + teams[i].name + '</option>';
// 		}
// 		document.getElementsByName("team_id")[0].innerHTML = content2;

// 		document.getElementById('loading').style.display = 'none';

// 	});	
// }
