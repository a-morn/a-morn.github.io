let initialized = false;
let currentPage;

function onInitialClick(e) {
	if (!initialized) {
		history.pushState({ initialized: false }, null, null);
		onInitialize();
	}
}

function onInitialize() {
		initialized = true;
		document
			.querySelector('body')
			.classList
			.add('initialized');
}

function onContractingClick() {
	if (currentPage !== 'contracting') {
		currentPage = 'contracting';
		history.pushState({ initialized: true, currentPage }, null, null);
	}
	showContracting();
}

function showContracting() {
	document
		.querySelector('section')
		.innerHTML = 'Contact: albin.morner@gmail.com';
}

function onHoldingsClick() {
	if (currentPage !== 'holdings') {
		currentPage = 'holdings';
		history.pushState({ initialized: true, currentPage }, null, null);
	}
	showHoldings();
}

function showHoldings() {
	document
		.querySelector('section')
		.innerHTML = 'To be announced.';
}

window.addEventListener('popstate', ({ state }) => {
	if (state.initialized === true) {
		onInitialize();
	} else {
		initialized = false;
		document
			.querySelector('body')
			.classList
			.remove('initialized');
	}
	if (state.currentPage === 'holdings') {
		showHoldings();
	} else if (state.currentPage === 'contracting') {
		showContracting();
	}
});
