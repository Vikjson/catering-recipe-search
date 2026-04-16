
/**
 * Searching for anything on the searchbar results in
 * showing 3 fixed dummy tags.
 * 
 * Closing one tag closes all three.
 */
const input = document.getElementById("searchbar");
const tags = document.getElementById("selected-tags");
const closeTag = document.querySelectorAll(".close-btn");


const showTags = () => {
  tags.classList.remove("hidden");
};


input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    showTags();
  }
});



closeTag.forEach(btn => {
  btn.addEventListener("click", () => {
    tags.classList.add("hidden");
  });
});


const filterMenu = document.getElementById("filter-menu-background");
const closeFiltersButton = document.getElementById("close-filter-btn");
const filterButton = document.getElementById("filter-btn");
const applyFiltersButton = document.getElementById("apply-filters-btn");

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


/*

const applyFilters = () => {
  filterMenu.classList.add("hidden");
};

applyFiltersButton.addEventListener("click", (e) => {
  e.preventDefault();
  //Gå till sökresultatet
});

*/

