// Find the buttons and the paragraph where messages will appear.
const buttons = document.querySelectorAll(".mood-buttons button");
const message = document.getElementById("message");

// Each mood has its own supportive message. Colors are in style.css.
const moods = {
  calm: {
    message: "Enjoy this peaceful moment. Take a breath and let yourself settle in."
  },
  overwhelmed: {
    message: "You don't have to do everything at once. Pause and take one small step."
  },
  tired: {
    message: "It's okay to slow down. Give yourself a little rest when you can."
  }
};

buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    const mood = button.dataset.mood;

    // Update the text and let CSS apply the matching mood colors.
    message.textContent = moods[mood].message;
    document.body.dataset.mood = mood;

    // Highlight the selected button and expose its state to screen readers.
    buttons.forEach(function (otherButton) {
      otherButton.setAttribute("aria-pressed", "false");
    });
    button.setAttribute("aria-pressed", "true");
  });
});
