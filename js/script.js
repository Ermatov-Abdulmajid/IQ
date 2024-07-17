document.addEventListener("DOMContentLoaded", function () {
  const openBtn = document.getElementById("openBtn");
  const closeBtn = document.getElementById("closeBtn");
  const sidebar = document.getElementById("sidebar");

  openBtn.addEventListener("click", function () {
    sidebar.style.width = "100%";
  });

  closeBtn.addEventListener("click", function () {
    sidebar.style.width = "0";
  });
});
