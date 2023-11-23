// Function to handle the scrolling
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

// Add click event listeners to the list items
const listItems = document.querySelectorAll("li[data-scroll-to]");
listItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    const targetSectionId = e.currentTarget.getAttribute("data-scroll-to");
    scrollToSection(targetSectionId);
  });
});
