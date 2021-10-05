const errorElement = document.getElementById('error');
const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
let messages = []


if (password.value.length <= 6) {
    messages.push('Password must be longer than 6 characters')
}

if (password.value.length >= 15) {
    messages.push('Password must be less than 15 characters')
}

if (password.value === 'password') {
    messages.push('Password cannot be "password"')
}

if (messages.length > 0){
    e.preventDefault()  
    errorElement.innerText = messages.join(', ')
}

})

