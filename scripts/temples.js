// scripts/temples.js

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector("nav");

  hamburger.addEventListener("click", () => {
    const visible = nav.style.display === "flex";
    nav.style.display = visible ? "none" : "flex";
    hamburger.textContent = visible ? "☰" : "✖";
  });

  // Footer updates
  document.getElementById("currentYear").textContent = new Date().getFullYear();
  document.getElementById("lastModified").textContent = `Last modified: ${document.lastModified}`;
});
