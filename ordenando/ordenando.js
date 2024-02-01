swap = (vetor, pos1, pos2) => {
    [vetor[pos1] , vetor[pos2]] = [vetor[pos2], vetor[pos1]];
};

shuffle = (vetor, quant) => {
    for ( let i = 0; i < quant; i++){
        const pos1 = Math.floor(Math.random() * vetor.length);
        const pos2 = Math.floor(Math.random() * vetor.length);
        swap(vetor, pos1, pos2);
    }
};

bubble_sort = (vetor) => {
    const n = vetor.length;
    for (let i = 0; i < n - 1; i++){
        for (let j = 0; j < n - i - 1; j++){
            if (vetor[j] > vetor[j + 1]) {
                swap(vetor, j, j + 1)
            }
        }
    }
};

selection_sort = (vetor) => {
    const n = vetor.length;
    for (let i = 0; i < n - 1; i++){
        let minIndex = i;
        for (let j = i + 1; j < n; j++){
            if (vetor[j] < vetor[minIndex]) {
                minIndex = j
            }
        }
        if (minIndex !== i ){
            swap(vetor, i, minIndex);
        }
    }
};

quick_sort = (vetor, start, end) => {
    if (start < end) {
        const indexPivot = particionamento(vetor, start, end, vetor[end]);
        quick_sort(vetor, start, indexPivot - 1);
        quick_sort(vetor, indexPivot + 1, end);
    }
};

particionamento = (vetor, start, end, pivot) => {
    let i = start - 1;

    for (let j = start; j < end; j++) {
        if (vetor[j] <= pivot){
            i++
            swap(vetor, i, j)
        }
    }

    swap(vetor, i + 1, end);
    return i + 1;
}

function add(){
    let campo = document.getElementById('valor');
    let lista = document.getElementById('valores');

    var node = document.createElement('li')
    var texto = document.createTextNode(campo.value);
    node.appendChild(texto);

    lista.append(node)

    campo.value = '';
}

function ordenar(){
    let lista = document.getElementById('valores');
    let vetor = []
    for (let i = 0; i < lista.children.length; i++){
        let valor = parseInt(lista.children[i].innerHTML);

        vetor.push(valor);
    }

    let select = document.getElementById('opcoes');
    
    switch(select.value){
        case 'Bubble':
            bubble_sort(vetor);
            break;
        case 'Selection':
            selection_sort(vetor);
            break;
        case 'Quick':
            quick_sort(vetor, 0, vetor.length - 1)
    }
    
    let novaLista = vetor.map(valor => `<li>${valor}</li>`).reduce((acc, cur) => acc + cur, '')

    lista.innerHTML = novaLista;
}

function misturar(){
    let lista = document.getElementById('valores');
    let vetor = []
    for (let i = 0; i < lista.children.length; i++){
        let valor = parseInt(lista.children[i].innerHTML);

        vetor.push(valor);
    }

    shuffle(vetor, vetor.length);

    let novaLista = vetor.map(valor => `<li>${valor}</li>`).reduce((acc, cur) => acc + cur, '')

    lista.innerHTML = novaLista;
}