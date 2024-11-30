// Toggle Dark Mode
function toggleDarkMode() {
  const body = document.body;
  body.classList.toggle('dark-mode');
  const isDark = body.classList.contains('dark-mode');
  document.getElementById('toggleButton').textContent = isDark ? 'Light Mode' : 'Dark Mode';
}

// Add Scroll-To-Top Button
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.textContent = '⬆';
scrollToTopBtn.style.cssText = `
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 10px;
  font-size: 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: none;
`;
document.body.appendChild(scrollToTopBtn);

window.onscroll = () => {
  scrollToTopBtn.style.display = window.scrollY > 200 ? 'block' : 'none';
};

scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
