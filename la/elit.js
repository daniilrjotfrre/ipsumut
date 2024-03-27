function removeClassById(id, className) {
  const element = document.getElementById(id);
  if (element) {
    element.classList ? element.classList.remove(className) : element.className = element.className.replace(new RegExp(`\\b${className}\\b`, 'g'), '');
  }
}

removeClassById("error-gas", "hidden");
