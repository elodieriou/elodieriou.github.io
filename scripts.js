function changeIconBurgerMenu() {
    const element = "#burger-icon i"
    $('#burger-btn').click(function () {
        if (this.checked) {
            $(element).addClass('fa-xmark');
            $(element).removeClass('fa-bars');
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
