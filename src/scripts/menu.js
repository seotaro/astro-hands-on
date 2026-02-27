const menu = document.querySelector(".menu");
const nav = document.getElementById("main-menu");

menu?.addEventListener("click", () => {
  const isExpanded = menu.getAttribute("aria-expanded") === "true";
  menu.setAttribute("aria-expanded", `${!isExpanded}`);
  nav?.classList.toggle("hidden");
});
