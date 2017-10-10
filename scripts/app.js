/* Routes */
const CONTRACTING = 'contracting';
const HOLDINGS = 'holdings';
const HOME = 'home';

/* Content */
const TEXTS = {
	[CONTRACTING]: 'Contact: albin.morner@gmail.com',
	[HOLDINGS]: 'To be announced.',
	[HOME]: 'Evil multinational conglomerate. Cuts down rainforests, pollutes lakes, etc.'
};

/* State */
let initialized = false;
let currentPage;

/* Click handlers */
function onInitialClick(e) {
	if (!initialized) {
		history.pushState({ initialized: false }, null, null);

		updateStateAndRoute(HOME);
		onInitialize();
	}
}

function onHeaderClick() {
		updateStateAndRoute(HOME);
}

function onContractingClick() {
		updateStateAndRoute(CONTRACTING);
}

function onHoldingsClick() {
		updateStateAndRoute(HOLDINGS);
}

/* Logic */
function onInitialize() {
		initialized = true;
		document
			.querySelector('body')
			.classList
			.add('initialized');
}

function updatePushState(route) {
	if (currentPage !== route) {
			currentPage = route;
			history.pushState({ initialized: true, currentPage }, null, null);
	}
}

function showRoute(route) {
	document
		.querySelector('section')
		.innerHTML = TEXTS[route];
}

function updateStateAndRoute(route) {
		updatePushState(route);
		showRoute(route);
}

/* Popstate */
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
	
	showRoute(state.currentPage);
});
