
// Toggle mobile menu
function toggleMobileMenu() {
    document.getElementById("menu").classList.toggle("active");

}


// Add event listeners to menu items
function setupMenuItemListeners() {
    // Get all menu items
    const menuItems = document.querySelectorAll("#menu .menu-item"); // Adjust the selector to match your menu items

    // Add click event listener to each menu item
    menuItems.forEach(item => {
        item.addEventListener("click", () => {
            toggleMobileMenu(); // Close the menu
        });
    });
}

// Initialize menu item listeners when the page loads
document.addEventListener("DOMContentLoaded", setupMenuItemListeners);



// Modal Code 
const modalContainer = document.getElementById('modal-container');
const modalTriggers = document.querySelectorAll('.pokemon-modal');
const body = document.body;

// Add click event listeners to each trigger to open the modal
modalTriggers.forEach(function(trigger) {
    trigger.addEventListener('click', function() {
        const buttonId = this.id;
        modalContainer.className = ''; // Clear existing classes
        modalContainer.classList.add(buttonId); // Add class matching button ID
        body.classList.add('modal-active');
    });
});

// Add click event listener to the modal container to close the modal
modalContainer.addEventListener('click', function(event) {
    if (
        event.target === modalContainer ||
        event.target.classList.contains('modal-background') ||
        event.target.classList.contains('close-modal')
    ) {
        modalContainer.classList.add('out'); // Add 'out' class to fade out animation
        body.classList.remove('modal-active'); // Remove 'modal-active' class from body
    }
});


// Prevent modal close when clicking on the link
const modalLink = document.querySelector('#modal-container a');
if (modalLink) {
    modalLink.addEventListener('click', function(event) {
        event.stopPropagation(); // Stop the event from bubbling up to the modal container
    });
}


//  Reapated code for leno modal. find a way to fix the repeated code.
const modalContainerNew = document.getElementById('modal-container-new');
const modalTriggersNew = document.querySelectorAll('.leno-modal');
const bodyNew = document.body;

// Add click event listeners to each trigger to open the modal
modalTriggersNew.forEach(function(trigger) {
    trigger.addEventListener('click', function() {
        const buttonIdNew = this.id;
        modalContainerNew.className = ''; // Clear existing classes
        modalContainerNew.classList.add(buttonIdNew); // Add class matching button ID
        bodyNew.classList.add('modal-active');
    });
});

// Add click event listener to the modal container to close the modal
modalContainerNew.addEventListener('click', function(event) {
    if (
        event.target === modalContainerNew ||
        event.target.classList.contains('modal-background') ||
        event.target.classList.contains('close-modal')
    ) {
        modalContainerNew.classList.add('out'); // Add 'out' class to fade out animation
        bodyNew.classList.remove('modal-active'); // Remove 'modal-active' class from body
    }
});


// Prevent modal close when clicking on the link
const modalLinkNew = document.querySelector('#modal-container-new a');
if (modalLinkNew) {
    modalLinkNew.addEventListener('click', function(event) {
        event.stopPropagation(); // Stop the event from bubbling up to the modal container
    });
}


