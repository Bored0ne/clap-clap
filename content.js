// Listen for DOM changes
document.addEventListener('DOMSubtreeModified', function() {
  // Find all input elements of type text and textarea elements
  var inputs = document.querySelectorAll('input[type=text], textarea, *[contenteditable=true]');

  // Loop through all input and textarea elements
  for (let i = 0; i < inputs.length; i++) {
    // Check if the floating button already exists
    if (inputs[i].nextSibling && inputs[i]?.nextSibling?.className === 'clapify-container') {
      continue;
    }

    // Create the floating button
    let btn = document.createElement('button');
    btn.innerHTML = '👏';
    btn.className = 'clapify-button';

    // Add the click event listener to the button
    btn.addEventListener('click', () => {
      // Replace spaces with clap emoji in the input value
      if ("value" in inputs[i] && inputs[i].value) {
        inputs[i].value = inputs[i].value.split(' ').join(' 👏 ');
      }
    });

    let buttonContainer = document.createElement('div');
    buttonContainer.className="clapify-container"
    buttonContainer.style.position = 'relative';
    buttonContainer.style.flexGrow = "0";

    // Insert the button into the container
    buttonContainer.appendChild(btn);

    // Insert the button after the input element
    inputs[i].parentNode.insertBefore(buttonContainer, inputs[i].nextSibling);
  }
});
