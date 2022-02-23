const tecnologia = [
    "python", "javascript", "java", "ruby", "swift", "smartphone", "xbox", "linux", "popos", "playstation", "pendrive", "android", "windows", "macos"
]

const musica = [
    "beatles", "pantera", "blacksabbath", "metallica", "ufo", "motorhead", "rainbow", "mutantes", "slayer", "darksideofthemoon", "revolver", "ledzeppelin", "cream", "megadeth",
]

let tema = ""
let escolha = 0
const letras__erradas = []
const letras__corretas = []

while (escolha != 1 || escolha != 2) {
    escolha = prompt("Escolha um tema: \n[1] tecnologia\n[2] música")
    const subtittle = document.querySelector(".subtittle")
    if (escolha == 1) {
        subtittle.innerHTML += " o tema é tecnologia, esse tema inclui:<br> Linguagens de programação, sistemas operacionais e dispositivos."
        tema = tecnologia
        break
    } else if (escolha == 2) {
        subtittle.innerHTML += " o tema é música, esse tema inclui:<br> Bandas de rock e alguns albuns."
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
    } else if (isUpper(ascii)){
        upper()
    } else if (isnumber(ascii)){
        numero()
    }
    atualizar__jogo()
})

function atualizar__jogo() {
    mostrar__letras__erradas()
    mostrar__letras__corretas()
    desenhar__forca()
    checar__jogo()
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
    certas.innerHTML = ""
    const letras__separadas = palavra.split("").forEach(letra =>{
        if (letras__corretas.includes(letra)) {
            certas.innerHTML += `<span>${letra}</span>`
        } else {
            certas.innerHTML += `<span>_</span>`
        }
    })
}

function desenhar__forca() {
    const partes__corpo = document.querySelectorAll(".partes-corpo")
    for(let i = 0; i < letras__erradas.length; i++) {
        partes__corpo[i].style.display = "block"
    }
}

function checar__jogo() {
    let mensagem = ""
    const certas = document.querySelector('.letras-certas')
    const partes__corpo = document.querySelectorAll(".partes-corpo")
    if (letras__erradas.length === partes__corpo.length) {
        mensagem = "Fim de jogo! Vocẽ perdeeu!"
    } else if (palavra === certas.innerText) {
        mensagem = "Parabéns! Você ganhou!"
    } if (mensagem) {
        document.querySelector('#mensagem').innerHTML = mensagem
        document.querySelector('.popup-container').style.display = "flex"
    }
}

function reiniciar__jogo() {
    window.location.reload()
}

function letra__repetida() {
    const aviso = document.querySelector(".letra-repetida")
    aviso.classList.add('show')
    setTimeout(() => {
        aviso.classList.remove('show')
    }, 1000)
}

function numero() {
    const aviso = document.querySelector(".numero")
    aviso.classList.add('show')
    setTimeout(() => {
        aviso.classList.remove('show')
    }, 1000)
}

function upper() {
    const aviso = document.querySelector(".upper")
    aviso.classList.add('show')
    setTimeout(() => {
        aviso.classList.remove('show')
    }, 1000)
}

function isletra(ascii) {
    const letra = ascii.charCodeAt(0)
    return letra>= 97 && letra <= 122
}

function isUpper(ascii) {
    const letra = ascii.charCodeAt(0)
    return letra>= 65 && letra <= 90
}

function isnumber(ascii) {
    const letra = ascii.charCodeAt(0)
    return letra>= 48 && letra <= 57
}