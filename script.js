
/**
 * Searching for anything on the searchbar results in
 * showing 3 fixed dummy tags.
 * 
 * Closing one tag closes all three.
 */
const input = document.getElementById("searchbar");
const tags = document.getElementById("selected-tags");
const closeTag = document.querySelectorAll(".close-btn");
const searchButton = document.getElementById("search-btn");


const showTags = () => {
  tags.classList.remove("hidden");
};


const closeAllTags = () => {
  tags.classList.add("hidden");
};

closeTag.forEach(btn => {
  btn.addEventListener("click", closeAllTags);
});




const filterMenu = document.getElementById("filter-menu-background");
const closeFiltersButton = document.getElementById("close-filter-btn");
const filterButton = document.getElementById("filter-btn");
const applyFiltersButton = document.getElementById("apply-filters-btn");
const clearSearchButton = document.getElementById("clear-search-btn");

const showFilters = () => {
  filterMenu.classList.remove("hidden");
};



filterButton.addEventListener("click", (e) => {
  e.preventDefault();
  showFilters();
});


const closeFilters = () => {
  filterMenu.classList.add("hidden");
};

closeFiltersButton.addEventListener("click", (e) => {
  e.preventDefault();
  closeFilters();
});






applyFiltersButton.addEventListener("click", (e) => {
  e.preventDefault();
  closeFilters();
  showSearchResults();
});





const searchResults = document.getElementById("search-results-recipes");
const startPageRecipes = document.getElementById("recipes");


const showSearchResults = () => {
  startPageRecipes.classList.add("hidden");
  searchResults.classList.remove("hidden");
  tags.classList.remove("hidden");
};

const hideSearchResults = () => {
  startPageRecipes.classList.remove("hidden");
  searchResults.classList.add("hidden");
  tags.classList.add("hidden");
};


closeTag.forEach(btn => {
  btn.addEventListener("click", hideSearchResults);
});


clearSearchButton.addEventListener("click", (e) => {
  e.preventDefault();
  hideSearchResults();
});

searchButton.addEventListener("click", (e) => {
  e.preventDefault();
  showTags();
  showSearchResults();
});

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    showTags();
    showSearchResults();
  }
});