/* ======= Responsive Navigation Toggle ======= */
const navToggle = document.getElementById("nav-toggle");
const nav = document.getElementById("nav");

if (navToggle) {
navToggle.addEventListener("click", () => {
const expanded = navToggle.getAttribute("aria-expanded") === "true" || false;
navToggle.setAttribute("aria-expanded", !expanded);
nav.classList.toggle("open");
});
}

/* ======= Close nav when clicking a link (mobile) ======= */
document.querySelectorAll(".nav-list a").forEach(link => {
link.addEventListener("click", () => {
if (nav.classList.contains("open")) {
nav.classList.remove("open");
navToggle.setAttribute("aria-expanded", "false");
}
});
});

/* ======= Dynamic Year in Footer ======= */
const yearEl = document.getElementById("year");
if (yearEl) {
yearEl.textContent = new Date().getFullYear();
}

/* ======= Copy Email Button ======= */
const copyBtn = document.getElementById("copy-email");
if (copyBtn) {
copyBtn.addEventListener("click", async () => {
const email = "[prateekkudari004gmail.com](mailto:prateekkudari004gmail.com)"; // <-- Replace with your actual email
try {
await navigator.clipboard.writeText(email);
copyBtn.textContent = "Copied!";
setTimeout(() => (copyBtn.textContent = "Copy email"), 2000);
} catch (err) {
alert("Could not copy email. Please copy manually.");
}
});
}

/* ======= Optional: Smooth Scroll ======= */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener("click", e => {
const href = anchor.getAttribute("href");
if (!href || href === "#" || href === "#top") return;
const target = document.querySelector(href);
if (target) {
e.preventDefault();
const top = target.getBoundingClientRect().top + window.pageYOffset - 72;
window.scrollTo({
top,
behavior: "smooth",
});
}
});
});
