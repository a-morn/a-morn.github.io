/* Routes */
const CONTRACTING = "contracting";
const HOME = "home";

/* Content */
const TEXTS = {
  [CONTRACTING]: "Contact: albin.morner@gmail.com",
  [HOME]: `I, Albin Mörner, am a software engineer who do contracting through my company Mörner Industries OÜ (https://ariregister.rik.ee/eng/company/16633322/M%C3%B6rner-Industries-O%C3%9C?search_id=731dc57&pos=1).`,
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

/* Logic */
function onInitialize() {
  initialized = true;
  document.querySelector("body").classList.add("initialized");
}

function updatePushState(route) {
  if (currentPage !== route) {
    currentPage = route;
    history.pushState({ initialized: true, currentPage }, null, null);
  }
}

function showRoute(route) {
  document.querySelector("section").innerHTML = TEXTS[route];
}

function updateStateAndRoute(route) {
  updatePushState(route);
  showRoute(route);
}

/* Popstate */
window.addEventListener("popstate", ({ state }) => {
  if (state.initialized === true) {
    onInitialize();
  } else {
    initialized = false;
    document.querySelector("body").classList.remove("initialized");
  }

  showRoute(state.currentPage);
});
