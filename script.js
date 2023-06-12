// Dynamic Content - Toggle additional information
const toggleButton = document.getElementById('toggle-button');
const additionalInfo = document.getElementById('additional-info');

toggleButton.addEventListener('click', () => {
  additionalInfo.classList.toggle('hide');
});

// Image Slider
const sliderImages = ['image1.jpg', 'image2.jpg', 'image3.jpg'];
let currentIndex = 0;
const slider = document.getElementById('slider');

function changeImage() {
  slider.src = sliderImages[currentIndex];
  currentIndex = (currentIndex + 1) % sliderImages.length;
}

setInterval(changeImage, 3000);

// Form Validation
const form = document.getElementById('contact-form');
const emailInput = document.getElementById('email');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  if (!validateEmail(emailInput.value)) {
    alert('Please enter a valid email address.');
    return;
  }

  // Perform form submission logic here
  // ...
});

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Smooth Scrolling
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href');
    document.querySelector(targetId).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Event Handling - Hover effect
const portfolioItem = document.querySelector('.portfolio-item');

portfolioItem.addEventListener('mouseenter', () => {
  portfolioItem.classList.add('hover-effect');
});

portfolioItem.addEventListener('mouseleave', () => {
  portfolioItem.classList.remove('hover-effect');
});

// Custom Animations
const animatedElement = document.querySelector('.animated-element');

function animateElement() {
  animatedElement.classList.toggle('fade-in');
}

setInterval(animateElement, 2000);
