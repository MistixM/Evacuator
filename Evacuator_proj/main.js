const btns = document.querySelectorAll(
    ".accordion-element"
);

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        const content = btn.nextElementSibling;

        btn.classList.toggle('active');

        if(content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
})