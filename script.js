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