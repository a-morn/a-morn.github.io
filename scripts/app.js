let initialized = false;

function onInitialClick(e) {
	if (!initialized) {
		initialized = true;
		e.preventDefault();
		document
			.querySelector('body')
			.classList
			.add('initialized');
	}
}

function onContractingClick() {
	document
		.querySelector('section')
		.innerHTML = 'Contact: albin.morner@gmail.com';
}

function onInvestmentsClick() {
	document
		.querySelector('section')
		.innerHTML = 'To be announced.';
}
