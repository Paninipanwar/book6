let isHovered = false;
let button;
let bookImage;
let customImageWidth = 100;
let customImageHeight = 100;
let customImageX = 100;
let customImageY = 100;
let originalImageSource = 'file.png'; // Store the original image source

function preload() {
  bookImage = loadImage('book.jpg'); // Load the book image before setup
}

function setup() {
  createCanvas(400, 220);
  button = createButton(''); // Create a button without text
  button.position(50, 240);
  button.mouseOver(onButtonHover);
  button.mouseOut(onButtonOut);

  let img = createImg(originalImageSource); // Set the initial image source
  img.size(75, 55); // Set the size of the image to match the button
  img.parent(button); // Place the image inside the button
  button.style('background-color', 'transparent'); // Set the background color of the button to transparent
  button.style('border', 'none'); // Remove the button's border
}

function draw() {
  clear(); // Clear the canvas to make it transparent
  if (isHovered) {
    drawBookImage(); // Call the function to draw the book image with custom properties when hovering
  }
}

function onButtonHover() {
  isHovered = true;
  customImageWidth = 165; // Change the width when hovering
  customImageHeight = 218; // Change the height when hovering
  customImageX = 0; // Change the X position when hovering
  customImageY = 0; // Change the Y position when hovering
  // Change the image source to 'filepressed.png' when hovering
  button.elt.children[0].setAttribute('src', 'filepressed.png');
}

function onButtonOut() {
  isHovered = false;
  customImageWidth = 50; // Reset the width
  customImageHeight = 100; // Reset the height
  customImageX = 20; // Reset the X position
  customImageY = 100; // Reset the Y position
  // Change the image source back to the original image when not hovering
  button.elt.children[0].setAttribute('src', originalImageSource);
}

function drawBookImage() {
  image(bookImage, customImageX, customImageY, customImageWidth, customImageHeight); // Draw the book image with custom properties
}
