function enviar() {
    let ini = document.querySelector("#txti")
    let fim = document.querySelector("#txtf")
    let inter = document.querySelector("#txtinter")
    let res = document.querySelector(".container-bottom")

    if (ini.value.length == 0 || fim.value.length == 0 || inter.value.length == 0) { // Se a qtd de letras for 0  
            alert("ERRO")
    }
    else {
        res.style.textAlign = "justify"
        res.innerHTML = "Contando:"

        let i = Number(ini.value) // Pega o valor que está dentro de ini e converte em num
        let f = Number(fim.value)
        let int = Number(inter.value)

        if (i < f) { // Contagem Crescente
            for (let conta = i; conta <= f; conta += int) {
                res.innerHTML += ` ${conta},`  // O que ele já tem + algo
            }
        }
        else {
            for (let conta = i; conta >= f + 1; conta -= int) {  // Contagem Regressiva
                res.innerHTML += ` ${conta},`
            }
        }
    }
}

