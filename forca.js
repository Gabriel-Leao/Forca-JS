const tecnologia = [
    "python", "javascript", "java", "ruby", "swift", "node", "react", "linux", "pop os", "ubuntu", "fedora", "android", "windows", "mac os"
]

const musica = [
    "beatles", "nirvana", "black sabbath", "metallica", "ufo", "motorhead", "rainbow", "led zeppelin", "slayer", "anthrax", "misfits", "tupac", "eminem", "nwa",
]

let tema = ""
let escolha = 0
const letras__erradas = []
const letras__corretas = []

while (escolha != 1 || escolha != 2) {
    escolha = prompt("Escolha um tema: \n[1] tecnologia\n[2] música")
    if (escolha == 1) {
        tema = tecnologia
        break
    } else if (escolha == 2) {
        tema = musica
        break
    } else {
        alert("Opção inválida! Tente novamente")
        continue
    }
}

const sorteio = Math.floor(Math.random() * tema.length)
const palavra = tema[sorteio]

document.addEventListener('keydown', (evento) =>{
    const ascii = evento.key
    if(isletra(ascii)) {
        const letra = evento.key
        if (letras__erradas.includes(letra) || letras__corretas.includes(letra)) {
            letra__repetida()
        } else if (palavra.includes(letra)) {
            letras__corretas.push(letra)
            console.log(`Lista de letras corretas ${letras__corretas}`)
        } else {
            letras__erradas.push(letra)
            console.log(`lista de letras erradas ${letras__erradas}`)
        }
    } else {
        alert("Opção inválida! Tente novamente")
    }
})
console.log(palavra)

function letra__repetida() {
    const aviso = document.querySelector(".letra-repetida")
    aviso.classList.add('show')
    setTimeout(() => {
        aviso.classList.remove('show')
    }, 1000)
}

function isletra(ascii) {
    const letra = ascii.charCodeAt(0)
    return letra>= 97 && letra <= 122
}