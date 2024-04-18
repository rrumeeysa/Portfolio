const colorPicker = document.getElementById("colorPicker");
colorPicker.addEventListener("input", function() {
    const selectedColor = colorPicker.value;
    document.body.style.background = selectedColor;
});

let süre = 1000;
        
let Example = [
    "Hello,",
    "you can",
    "reach",
    "me via email",
    "or",
    "number."
];

let siraliIndex = 0;

function siraliCümleler() {
    let listeP = document.getElementById("liste");
    listeP.innerHTML = Example[siraliIndex];
    siraliIndex = (siraliIndex +1) % Example.length;
    setTimeout(siraliCümleler,süre)
}

siraliCümleler();