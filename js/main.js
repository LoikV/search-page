const select = document.querySelector('#search-select')
const btn = document.querySelector('#search-btn')
const input = document.querySelector('#search-input')
const selectError = document.querySelector('#error-empty__select')
const emptyFieldError = document.querySelector('#error-empty__field');

btn.addEventListener('click', () => {
    if (input.value) {
        switch (select[select.selectedIndex].value) {
            case 'google':
                document.location.href = `https://www.google.com/search?&q=${input.value}`;
                break;
            case 'bing':
                document.location.href = `https://www.bing.com/search?q=${input.value}`;
                break;
            case 'ask':
                document.location.href = `https://ask.com/web?q=${input.value}`;
                break;
            default:
                selectError.hidden = false
        }
    } else
        emptyFieldError.hidden = false

});

select.addEventListener('change', () => {
    selectError.hidden = true
});

input.addEventListener('focus', () => {
    emptyFieldError.hidden = true
});