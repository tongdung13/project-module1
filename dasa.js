function saveData(data) {
    localStorage.setItem('money', data);
}

function loadData () {
    if (localStorage.hasOwnProperty('money')) {
        return +localStorage.getItem('money');
    } else {
        return 1000000;
    }
}

function resetMoney(data) {
    localStorage.setItem('money', 1000000);

}

