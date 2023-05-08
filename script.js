const frm = document.querySelector("form")
const res1 = document.querySelector("#res1")
const res2 = document.querySelector("#res2")

let resposta = ""
let numContas = 0
let valTotal = 0

frm.addEventListener("submit", (e) => {
    const descricao = frm.inputDescricao.value
    const valor = Number(frm.inputValor.value)

    numContas++ //adiciona valores ao contador e acumulador
    valTotal = valTotal + valor //ou valTotal += valor
    resposta = resposta + descricao + " - R$: " + valor.toFixed(2) + "\n"
    res1.innerText = `${resposta}----------------------------`
    res2.innerText = `${numContas} Conta(s) - Total R$: ${valTotal.toFixed(2)}`

    frm.inputDescricao.value = ""
    frm.inputValor.value = ""
    frm.inputDescricao.focus()

    e.preventDefault()
})