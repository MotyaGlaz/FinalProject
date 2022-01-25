document.getElementById("createButton").addEventListener("click", onCreate);
document.getElementById("clearButton").addEventListener("click", onClear);

let container = document.getElementById('pictures');

function onCreate(){
    if (container.innerHTML === ''){
        fetch('pictures.json').then(response => {
            response.json().then(resalt => {
                AddImage(resalt.picture1);
                AddImage(resalt.picture2);
                AddImage(resalt.base64);
            });
        });
    }
}
function AddImage(adres){
    const  picture = new Image();
    picture.src = adres;
    picture.style.height = "400px";
    picture.style.width = "400px";
    picture.style.borderRadius = "8px";
    document.getElementById('pictures').append(picture);
}

function onClear(){
    if (container.innerHTML !== ''){
        container.innerHTML = '';
    }
}