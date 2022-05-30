export default function initModal(modalSelector, btnSelector, modalOptions) {
    $(btnSelector).on('click', function () {
        $(modalSelector).modal(modalOptions);
    })
}