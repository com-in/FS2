let currentTop = 70;
const promptBoxes = [];
function showPrompt(message, isSuccess) {
    const promptBox = document.createElement('div');
    promptBox.className = 'prompt-box' + (isSuccess ? '' : ' error');
    promptBox.style.top = currentTop + 'px';
    promptBox.innerHTML = `
        <span>${message}</span>
    `;
    document.body.appendChild(promptBox);
    promptBoxes.push(promptBox);
    currentTop += 70;
    setTimeout(() => {
        promptBox.classList.add('show');
    }, 10);
    setTimeout(() => {
        closePrompt({ currentTarget: promptBox });
    }, 3000);
}
function closePrompt(event) {
    const promptBox = event.currentTarget;
    const index = promptBoxes.indexOf(promptBox);
    if (index !== -1) {
        promptBoxes.splice(index, 1);
        currentTop -= 70;
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                promptBox.classList.remove('show');
                promptBox.addEventListener('transitionend', () => {
                    promptBox.remove();
                    adjustPositions();
                }, { once: true });
            });
        });
    }
}
function adjustPositions() {
    promptBoxes.forEach((box, index) => {
        box.style.top = 70 + index * 70 + 'px';
    });
}
