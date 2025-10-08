// ==============================
// Toggle Theme Color Palette
// ==============================
const toggleBtn= document.getElementById('togglePalette');
const palette = document.getElementById('palette');

toggleBtn.addEventListener('click', () => {
  palette.classList.toggle('active');
});

// ==============================
// Change Accent Color
// ==============================
document.querySelectorAll('.color-swatch').forEach(btn => {
  btn.addEventListener('click', () => {
    const color = btn.dataset.color;
    document.documentElement.style.setProperty('--accent', color);
  });
});


// booy

// ==============================
// Highlight Active Nav Item
// ==============================
const navList = document.getElementById('navList');
const navLinks = navList.querySelectorAll('a');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navList.querySelectorAll('li').forEach(x => x.classList.remove('active'));
    link.parentElement.classList.add('active');
  });
});




// Select all social icons
const icons = document.querySelectorAll(".iconweb a");

// Define hover colors for each platform
const hoverColors = ["#0A66C2", "#333", "#ec4564ff", "#FF0000",]; 

icons.forEach((icon, index) => {
  // On hover -> set platform color
  icon.addEventListener("mouseenter", () => {
    icon.style.color = hoverColors[index];
    icon.style.transform = "scale(1.2)";
  });

  // On leave -> reset back to white
  icon.addEventListener("mouseleave", () => {
    icon.style.color = "#fff";
    icon.style.transform = "scale(1)";
  });
});


// ==============================
// Contact Form Validation
// ==============================
function validateForm() {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    alert("⚠️ Please fill in your Name, Email and Message.");
    return false;
    
  }  

  // ✅ Success message
  alert("✅ Successfully Submitted!");
  return true;
}




