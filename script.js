// gets element by its id
var menuItems = document.getElementById("menuItems");

// initially set menus max height to 0(collapsed state)
menuItems.style.maxHeight = "0px";

// function to toogle menu height
function menutoggle() {
  if (menuItems.style.maxHeight == "0px") {
    menuItems.style.maxHeight = "200px";
  } else {
    menuItems.style.maxHeight = "0px";
  }
}
