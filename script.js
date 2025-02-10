const discussionBoard = document.querySelector('.discussion-board');
const userInput = document.getElementById('user-input');
const maxHeight = 300;
const visibleSocrates = document.getElementById('visible-socrates');

discussionBoard.addEventListener('mouseenter', function() {
    discussionBoard.style.boxShadow = "0 0 30px rgb(230, 146, 255)";
});

discussionBoard.addEventListener('mouseleave', function() {
    discussionBoard.style.boxShadow = "0 0 20px rgb(145, 214, 241)";
});

userInput.addEventListener('focus', function() {
    userInput.style.boxShadow = "0 0 20px rgb(230, 146, 255)";
    userInput.style.height = "50px";
});

userInput.addEventListener('blur', function() {
    userInput.style.boxShadow = "0 0 20px rgb(146, 251, 255)";
    userInput.style.height = "40px";
});

userInput.addEventListener('input', function() {
    //userInput.style.height = 'auto'; // Reset the height
    //userInput.style.height = userInput.scrollHeight + 'px'; // Set the height to the scroll height
    userInput.style.height = Math.min(userInput.scrollHeight, maxHeight) + 'px'; // Set the height to the scroll height or max height, whichever is smaller
});

userInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter' && !event.shiftKey) {
        visibleSocrates.src = 'https://i.ibb.co/9m9nRcJL/socrates-speaking.png';
        event.preventDefault(); // Prevent the default behavior of adding a new line
        userForm.dispatchEvent(new Event('submit')); // Trigger the form submission
    }
});