// Select relevant HTML elements
const filterDropdown = document.getElementById("gallery-filter"); // Change to select element
const filterableCards = document.querySelectorAll(".grid-container .grid");
const previews = document.querySelectorAll(".grid-preview .preview"); // Select all previews

// Function to filter cards and previews based on the selected filter from the dropdown
const filterCards = () => {
    const filterValue = filterDropdown.value; // Get the selected filter value

    // Filter grid items
    filterableCards.forEach(card => {
        const cardCategory = card.dataset.category; // Get the card's category
        const cardName = card.dataset.name; // Get the card's name

        // Show card if it matches the filter or if "all" is selected
        if (cardCategory === filterValue || cardName === filterValue || filterValue === "all") {
            card.classList.remove("hide");
            card.classList.add("show");
        } else {
            card.classList.remove("show");
            card.classList.add("hide");
        }
    });

    // Filter previews
    previews.forEach(preview => {
        const previewCategory = preview.dataset.target; // Get the preview's category

        // Show preview if it matches the filter or if "all" is selected
        if (previewCategory === filterValue || filterValue === "all") {
            preview.classList.remove("hide");
            preview.classList.add("show");
        } else {
            preview.classList.remove("show");
            preview.classList.add("hide");
        }
    });
}

// Add event listener to the dropdown
filterDropdown.addEventListener("change", filterCards);

