function changeIconBurgerMenu() {
    const element = "#burger-icon i"
    $('#burger-btn').click(function () {
        if (this.checked) {
            $(element).removeClass('fa-bars');
            $(element).addClass('fa-xmark');
        }
        else {
            $(element).removeClass('fa-xmark');
            $(element).addClass('fa-bars');
        }
    });
}

$(function () {
    changeIconBurgerMenu();
})
