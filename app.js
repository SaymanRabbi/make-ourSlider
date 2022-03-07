const api = `26013793-aa146ff3f440e66301716bdc1`
const loadApi = () => {
    const input = document.getElementById('input');
    const container = document.getElementById('container');
    const inputText = input.value;
    input.value=''
    const url = `https://pixabay.com/api/?key=${api}&q=${inputText}&image_type=photo`
    fetch(url).then(res => res.json()).then(data => showImg(data))
    container.textContent = '';
}
const showImg = (data) => {
    const DataInArray = data.hits
    const container = document.getElementById('container');
    
    DataInArray.forEach(x => {
        console.log(x)
        const div = document.createElement('div');
        div.innerHTML = `<img src="${x.largeImageURL}" alt="" class="bg-cover object-fill h-60">`
        container.appendChild(div)

    })
}