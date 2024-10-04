function sortear() {
    //pegando os valores do input html
    let qtd = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    //variável que usarei para exibir a resposta no final
    let res = document.getElementById('resultado')
    
    //criando um array para aramzenar os numeros sorteados
    const numeros = []; 

    console.log(numeros.length)

    sortearNumeros();
    
    resposta();

    function sortearNumeros() {
        for (let i = 0; i < qtd; i++) {
            numeros[i] = Math.floor(Math.random() * (ate - de) + de);
        }
    }

    function resposta() {
        let amplitude = ate - de;
        if (qtd <= amplitude) {
            res.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${numeros}</label>`;
        } else {
            alert("A quantidade de números que você quer sortear é maior que amplitude do mínimo e máximo") 
        }
    }   
}