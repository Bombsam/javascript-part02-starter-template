document.getElementById("change_color").addEventListener("click", function() {
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.getElementById("blue_div").style.background = "#" + randomColor;
});