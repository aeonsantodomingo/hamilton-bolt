// Listing 1 

const overlay1 = document.querySelector("#overlayListing1");


document.querySelector("#show-modal-btn-1").addEventListener("click", () => {
  overlay1.style.display = "block";
  document.querySelector("html").style.overflow = 'hidden';
  
})
document.querySelector("#close-modal-btn-1").addEventListener("click", () => {
  overlay1.style.display = "none";
  document.querySelector("html").style.overflow = 'visible';
})

document.querySelector("#overlayListing1").addEventListener("click", () => {
  overlay1.style.display = "none";
  document.querySelector("html").style.overflow = 'visible';
})

// Listing 2

const overlay2 = document.querySelector("#overlayListing2");

document.querySelector("#show-modal-btn-2").addEventListener("click", () => {
  overlay2.style.display = "block";
  document.querySelector("html").style.overflow = 'hidden';
})

document.querySelector("#close-modal-btn-2").addEventListener("click", () => {
  overlay2.style.display = "none";
  document.querySelector("html").style.overflow = 'visible';
})

document.querySelector("#overlayListing2").addEventListener("click", () => {
  overlay2.style.display = "none";
  document.querySelector("html").style.overflow = 'visible';
})

// Listing 3

const overlay3 = document.querySelector("#overlayListing3");

document.querySelector("#show-modal-btn-3").addEventListener("click", () => {
  overlay3.style.display = "block";
  document.querySelector("html").style.overflow = 'hidden';
})

document.querySelector("#close-modal-btn-3").addEventListener("click", () => {
  overlay3.style.display = "none";
  document.querySelector("html").style.overflow = 'visible';
})

document.querySelector("#overlayListing3").addEventListener("click", () => {
  overlay3.style.display = "none";
  document.querySelector("html").style.overflow = 'visible';
})


