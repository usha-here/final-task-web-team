// Get all the cell elements
const cells = document.querySelectorAll('.cell');

// Add a click event listener to each cell
cells.forEach((cell) => {
    cell.addEventListener('click', () => {
        // Toggle the 'clicked' class to change the color
        cell.classList.toggle('clicked');
    });
});
