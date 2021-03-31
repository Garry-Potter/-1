var creditTotal = 1000;
функция credit(elementID, resultID) {
    пусть val = document.getElementById(elementID).value;
    пусть resultElement = document.getElementById(resultID);

    val = parseInt(val);
    creditTotal -= val;

    переключатель (true) {
        case creditTotal > 0:
            resultElement.textContent = 'сумма задолженности: ' + creditTotal;
            перерыв;
        case creditTotal < 0:
            resultElement.textContent = 'сумма переплаты: ' + (creditTotal + -0);
            перерыв;
        case creditTotal === 0:
            resultElement.textContent = 'задолженность отсутствует';
    }