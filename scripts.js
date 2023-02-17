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
    const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
    const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))
    const popover = new bootstrap.Popover('.popover-dismiss', {
        trigger: 'focus'
    })
})
