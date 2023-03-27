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

function displayTooltip() {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
}


$(function () {
    changeIconBurgerMenu();
    displayTooltip();
})
