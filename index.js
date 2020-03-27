const textInput = document.querySelector('#meme-text')
const memeForm = document.querySelector("#meme-text-form")
const currentMeme = document.querySelector('img')
const button = document.querySelector('#btn')

const submitMeme = e => {
    e.preventDefault();
    const params = {
        template_id: 129242436,
        text0: textInput.value,
        text1: '',
        username: 'Gingertonic',
        password: 'password'
    }

    const formData = createFormData(params)

    const config = {
        body: formData,
        method: "POST"
    }

    fetch('https://api.imgflip.com/caption_image', config)
        .then(res => res.json())
        .then(json => {
            renderImage(json.data.url)

        })
}

const createFormData = object => {
    const formData = new FormData();
    Object.keys(object).forEach(key => formData.append(key, object[key]));
    return formData;
}

const renderImage = imageUrl => {
    currentMeme.src = imageUrl
}

const getMessage = () => {
    // fetch('http://algakovic.eu.pythonanywhere.com/')
    fetch('https://api.github.com/users/Gingertonic')
        .then(r => r.json()).then(console.log)
}

memeForm.onsubmit = submitMeme
button.onclick = getMessage
