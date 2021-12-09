function showMenu() {
  let menu = document.getElementById('right_nav_item')

  if (menu.classList.contains("open")) {
    menu.classList.remove("open")
  } else {
    menu.classList.add("open")
  }
}