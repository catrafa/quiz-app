const getanswer = document.querySelector('[data-js="answer"]');
const answerbutton = document.querySelector('[data-js="button"]');
answerbutton.addEventListener('click', () => {
    getanswer.classList.toggle('hidden');
});