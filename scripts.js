// index.html
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

// history.html
function hideHistory(allHistoryId) {
    $(allHistoryId).removeClass('d-block');
    $(allHistoryId).addClass('d-none');
}

function showHistory(historyId) {
    $(historyId).removeClass('d-none');
    $(historyId).addClass('d-block');
}

function activatedButton(buttonId, historyId) {
    $(buttonId).addClass('activate');
    showHistory(historyId);
}

function desactivateButton(allButtonId, allHistoryId) {
    $(allButtonId).removeClass('activate');
    hideHistory(allHistoryId);
}

function onClickTimeline(allButtonId, allHistoryId) {
    $(allButtonId).click((event) => {
        const buttonId = `#${event.target.id}`;
        const historyId = `#history-${buttonId.split('-')[1]}`;
        desactivateButton(allButtonId, allHistoryId);
        activatedButton(buttonId, historyId);
    });
}


$(function () {
    changeIconBurgerMenu();
    displayTooltip();
    onClickTimeline('[id^="date-"]', '[id^="history-"]');
});
