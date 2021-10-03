const subMenu = document.getElementsByClassName('title')

console.log(subMenu)
subMenu.addEventListener("mouseover", function(event) {
  subMenu.classList.remove('close')
  console.log("asdf")
});