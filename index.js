const textInput = document.querySelector('#meme-text')
const memeForm = document.querySelector("#meme-text-form")
const currentMeme = document.querySelector('img')

const submitMeme = e => {
    e.preventDefault();
    const params = {
        template_id: 129242436,
        text0: textInput.value,
        text1: '',
        username: IMGFLIP_USERNAME,
        password: IMGFLIP_PASSWORD
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

memeForm.onsubmit = submitMeme
