export default function outputFormData(formSelector) {
    const form = document.querySelector(formSelector);
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log(form.elements.search.value);
    })
}