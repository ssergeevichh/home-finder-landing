export function sendToServer(formData) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.4) {
                return reject(new Error('Something went wrong...'))
            } else {
                resolve(formData)
            }
        }, 2000);

    })

}