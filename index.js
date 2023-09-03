
document.addEventListener('click', (event) => {
    if (event.target.className === 'color-item-text') {
        let copyText = document.getElementById(event.target.id).innerHTML
        console.log(copyText)
        document.addEventListener('copy', function (e) {
            e.clipboardData.setData('text/plain', copyText);
            e.preventDefault();
        }, true);
        document.execCommand('copy');
        alert('copied text: ' + copyText);
    } else if (event.target.tagName === "BUTTON") {
        getScheme()
    }
})

function getScheme() {
    const scheme = document.getElementById('scheme-select').value
    const colorPicker = document.getElementById('color-picker').value.slice(1)
    fetch(`https://www.thecolorapi.com/scheme?hex=${colorPicker}&mode=${scheme}&count=6`)
        .then((response) => response.json())
        .then(data => {
            const colors = data.colors
            renderScheme(colors)
        })
}

function renderScheme(colorsArr) {
    const colorContainer = colorsArr.map((color => `
        <div class="color-item" style="background:${color.hex.value}"></div>
    `)).join("")
    const colorTextContainer = colorsArr.map((color, index) => `
        <div class="color-item-text" id=${index}>${color.hex.value}</div>
    `).join("")
    document.querySelector('.color-result').innerHTML = colorContainer
    document.querySelector('.color-code').innerHTML = colorTextContainer
}

function copyToClip(event) {
    if (event.target.className === 'color-item-text') {
        let copyText = document.getElementById(event.target.id).innerHTML
        console.log(copyText)
        document.addEventListener('copy', function (e) {
            e.clipboardData.setData('text/plain', copyText);
            e.preventDefault();
        }, true);
        document.execCommand('copy');
        alert('copied text: ' + copyText);
    }
}

getScheme()