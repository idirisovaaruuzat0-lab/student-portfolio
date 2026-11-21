const button = document.querySelector(".button");
console.log("Aruuzat's portfolio is ready!");

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", () => {
    console.log("Navigation:", link.getAttribute("href"));
  });
});
