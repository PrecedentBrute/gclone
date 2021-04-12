function toggleMenu() {
    var menu = document.getElementById("top-app-menu");
    var icon = document.getElementById("top-menu-icon");
    if (menu.style.display === "none") {
      menu.style.display = "flex";
      icon.style.boxShadow = "0px 0px 0px 3px #e0dfdf";
      icon.style.backgroundColor = "#e0dfdf"
    } else {
      menu.style.display = "none";
      icon.style.boxShadow = "initial";
      icon.style.backgroundColor = "initial"
    }
}