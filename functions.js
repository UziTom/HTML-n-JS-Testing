 function genToken() {
	if (localStorage.getItem('token') !== null) {
		// giving an error if the token still exists
		console.error("Token exists, please delete the current token to work well.")
	} else {
		// generating the random tken if a token doesn't exist
		let alphtoken1 = Math.random().toString(36).substring(7);
		let alphtoken2 = Math.random().toString(36).substring(7);	
		let alphtoken3 = Math.random().toString(36).substring(7);
		let numtoken1 = Math.floor(Math.random() * 100000);
		let numtoken2 = Math.floor(Math.random() * 100000);
		let numtoken3 = Math.floor(Math.random() * 100000);
		var main_token = ("nfa." + alphtoken1 + numtoken1 + alphtoken2 + numtoken2 + alphtoken3 + numtoken3);
		localStorage['token'] = main_token;
	}
}

function remToken() {
	if (localStorage.getItem('token') !== null) {
		localStorage.removeItem('token');
	} else {
		console.error("Token does not exist in localStorage");
	}
}