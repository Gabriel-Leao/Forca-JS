const tecnologia = [
    "python", "javascript", "java", "ruby", "swift", "node", "react", "linux", "pop os", "ubuntu", "fedora", "android", "windows", "macos"
]

const musica = [
    "beatles", "nirvana", "blacksabbath", "metallica", "ufo", "motorhead", "rainbow", "mutantes", "slayer", "anthrax", "misfits", "ledzeppelin", "eminem", "nwa",
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
    } else if (isnumber(ascii)){
        alert("Opção inválida! Tente novamente")
    }
    atualizar__jogo()
})

function atualizar__jogo() {
    mostrar__letras__erradas()
    mostrar__letras__corretas()
}

function mostrar__letras__erradas() {
    const erradas = document.querySelector('.letras-erradas')
    erradas.innerHTML = "<h3>Letras erradas</h3>"
    letras__erradas.forEach(letra => {
        erradas.innerHTML += `<span>${letra}</span>`
    })
}

function mostrar__letras__corretas() {
    const certas = document.querySelector('.letras-certas')
    const letras__separadas = palavra.split("")
    console.log(letras__separadas)
}


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

function isnumber(ascii) {
    const letra = ascii.charCodeAt(0)
    return letra>= 48 && letra <= 57
}