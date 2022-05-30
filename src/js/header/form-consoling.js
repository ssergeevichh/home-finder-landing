export default function outputFormData(formSelector) {
    $(formSelector).on('submit', function (e) {
        e.preventDefault();
        console.log($(this).find('input[name="search"]').val());
    });
}