const overlay = document.querySelector("#overlayListing1");

document.querySelector("#show-modal-btn-1").addEventListener("click", () => {
  overlay.style.display = "block";
  document.querySelector("html").style.overflow = 'hidden';
  
})
document.querySelector("#close-modal-btn-1").addEventListener("click", () => {
  overlay.style.display = "none";
  document.querySelector("html").style.overflow = 'visible';
})
document.querySelector("#overlayListing1").addEventListener("click", () => {
  overlay.style.display = "none";
  document.querySelector("html").style.overflow = 'visible';
})


