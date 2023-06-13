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

function desactivatedButton(allButtonId, allHistoryId) {
    $(allButtonId).removeClass('activate color-date');
    hideHistory(allHistoryId);
}

function uncoloredBar() {
    $('[id^="bar-"]').removeClass('color-bar');
}

function coloredDate(allButtonId, activatedButtonId) {
    const activatedDate = activatedButtonId.split('-')[1];
    $(allButtonId).each((index, id) => {
        const date = $(id).attr('id').split('-')[1];
        if (date < activatedDate) {
            $(`#date-${date}`).addClass('color-date');
            coloredBar(index + 1);
        }
    });
}

function coloredBar(indexButton) {
    $('[id^="bar-"]').each((index, id) => {
        const numBar = $(id).attr('id').split('-')[1];
        if (numBar <= indexButton) $(`#bar-${numBar}`).addClass('color-bar');
    });
}

function onClickTimeline(allButtonId, allHistoryId) {
    $(allButtonId).click((event) => {
        const buttonId = `#${event.target.id}`;
        const historyId = `#history-${buttonId.split('-')[1]}`;
        desactivatedButton(allButtonId, allHistoryId);
        activatedButton(buttonId, historyId);
        uncoloredBar();
        coloredDate(allButtonId, buttonId);
    });
}


$(function () {
    changeIconBurgerMenu();
    displayTooltip();
    onClickTimeline('[id^="date-"]', '[id^="history-"]');
});
