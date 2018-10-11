document.ondragstart = test;
//запрет на перетаскивание 
document.onselectstart = test;
//запрет на выделение элементов страницы
document.oncontextmenu = test;
//запрет на выведение контекстного меню
function test() {
    return false
}

window.onkeydown = function (e) {
    if (e.keyCode >= 112 && e.keyCode <= 123) return false;
    if (e.keyCode == 73 || e.keyCode == 17 || e.keyCode == 16) return false;
};
window.onkeypress = function (e) {
    if (e.keyCode >= 112 && e.keyCode <= 123) return false;
    if (e.keyCode == 73 || e.keyCode == 17 || e.keyCode == 16) return false;
};

