import { sendToServer } from "./sendToServer.service";

export default function handleForm(formSelector) {
    const form = $(formSelector);
    const preloader = form.find('.preload');
    const formFields = form.find('.fields-wrapper');
    function setLoading(value) {
        if (value) {
            formFields.addClass('calling-form--filter-blur');
            preloader.addClass('preload--active');
        } else {
            formFields.removeClass('calling-form--filter-blur');
            preloader.removeClass('preload--active');
        }
    }

    function createErrorMessage(message) {
        const errorMessage = $(`<div class="error-message">${message}</div>`);
        return errorMessage;
    }

    function createSuccessMessage(message) {
        const successMessage = $(`<div class="success-message success-message--active">${message}</div>`);
        setTimeout(() => {
            successMessage.removeClass('success-message--active');
            setTimeout(() => {
                $('.success-message').remove();
            }, 500)

        }, 3000);
        return successMessage;
    }

    form.on('submit', function (e) {
        e.preventDefault();
        const formData = $(this).serializeArray();
        $(this).find('.error-message').remove();
        setLoading(true);

        sendToServer(formData)
            .then((data) => {
                setLoading(false);
                console.log(data);
                form.trigger('reset');
                $('.jquery-modal').append(createSuccessMessage('Success!'));
            })
            .catch((err) => {
                setLoading(false);
                formFields.append(createErrorMessage(err.message));
            })
    })
}