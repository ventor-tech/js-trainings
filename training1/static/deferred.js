// https://www.odoo.com/documentation/11.0/reference/async.html
// https://www.odoo.com/documentation/15.0/developer/reference/frontend/javascript_cheatsheet.html

function loadForm() {
	var defCountries = $.Deferred();
	var defTeams = $.Deferred();
	$.ajax({
		url: "/jstest/countries/json",
		contentType: 'application/json',
		dataType: 'json',
		type: 'POST',
		data: JSON.stringify({
			id: 511179091,
			jsonrpc: "2.0"
		})
	}).done(function(countries) {
		defCountries.resolve(countries);
	});

	$.ajax({
		url: "/jstest/teams/json",
		contentType: 'application/json',
		dataType: 'json',
		type: 'POST',
		data: JSON.stringify({
			id: 511179092,
			jsonrpc: "2.0"
		})
	}).done(function(teams) {
		defTeams.resolve(teams);
	});

	$.when(defCountries, defTeams).then(function(countries, teams) {
		$.each(countries.result, function(i, country) {
			$("[name='country_id']").append(
				'<option value="' + country.name + '">' + country.name + '</option>'
			);
		});
		$.each(teams.result, function(i, team) {
			$("[name='team_id']").append(
				'<option value="' + team.name + '">' + team.name + '</option>'
			);
		});
		$("#loading").hide();
	});
}
