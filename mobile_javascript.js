/*Code to expand or shrink the navbar as and when the user presses the cross or hamburger button */
var sidemenu = document.getElementById('sidemenu');

function navbar_expand() {
    sidemenu.style.right = "0";
}
function navbar_shrink() {
    sidemenu.style.right = "-200px";
}