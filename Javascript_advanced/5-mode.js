// Function to change the style of the page
function changeMode(size, weight, transform, background, color) {
    // Return a function that applies the specified styles to the page
    return function () {
      // Set the font size, weight, text transform, background color, and text color of the body
      document.body.style.fontSize = size;
      document.body.style.fontWeight = weight;
      document.body.style.textTransform = transform;
      document.body.style.backgroundColor = background;
      document.body.style.color = color;
    }
  }
  
  // Main function to set up the page
  function main() {
    // Define different themes using the changeMode function
    const spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
    const darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
    const screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');
  
    // Create paragraph element
    const paragraph = document.createElement('p');
    // Create buttons
    const btnSpooky = document.createElement('button');
    const btnDarkMode = document.createElement('button');
    const btnScreamMode = document.createElement('button');
  
    // Set content for paragraph and buttons
    paragraph.textContent = 'Welcome Holberton!';
    btnSpooky.textContent = 'Spooky';
    btnDarkMode.textContent = 'Dark Mode';
    btnScreamMode.textContent = 'Scream Mode';
  
    // Add elements to the body of the page
    document.body.appendChild(paragraph);
    document.body.appendChild(btnSpooky);
    document.body.appendChild(btnDarkMode);
    document.body.appendChild(btnScreamMode);
  
    // Set click event handlers for the buttons to change the page's style
    btnSpooky.onclick = spooky;
    btnDarkMode.onclick = darkMode;
    btnScreamMode.onclick = screamMode;
  }
  
  // Call the main function to initialize the page
  main();
  