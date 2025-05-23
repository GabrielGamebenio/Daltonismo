// Adiciona um evento de mudança ao elemento com o id 'color-filter'
document.getElementById('color-filter').addEventListener('change', function() {
    // atribui o valor da propriedade value do elemento atual à variável filterClass.
    const filterClass = this.value; /*váriavel constante*/

    // Seleciona todas as imagens com a classe 'filter-image'
    const images = document.querySelectorAll('.filter-image');

    // Para cada imagem selecionada... método de array que executa uma função para cada elemento do array.
    images.forEach(img => {
        // Remove todas as classes existentes da imagem, exceto 'filter-image'
        img.className = 'filter-image'; // Reset the class

        // Se a classe selecionada não for 'default' (ou seja, uma opção de filtro foi selecionada)...
        if (filterClass !== 'default') {
            // Adiciona a classe selecionada à imagem
            img.classList.add(filterClass);
        }
    });
});

document.getElementById("aumentar").addEventListener("click", function(){
    mudarTamanho(1);
});
 
document.getElementById("diminuir").addEventListener("click", function(){
    mudarTamanho(-1);
});
 
function mudarTamanho(step){
    var currentFontSize = parseFloat(getComputedStyle(document.body).fontSize);
    var novoTamanho = currentFontSize + step;
    document.body.style.fontSize = novoTamanho + "px";
}
