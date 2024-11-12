
document.querySelectorAll('input').forEach(input => {
    input.addEventListener('blur', () => {
        if (input.value !== '') {
            input.classList.add('used');
        } else {
            input.classList.remove('used');
        }
    });
});
