const tecnologia = [
    "python", "javascript", "java", "ruby", "swift", "node", "react", "linux", "pop os", "ubuntu", "fedora", "android", "windows", "mac os"
]

const musica = [
    "beatles", "nirvana", "black sabbath", "metallica", "ufo", "motorhead", "rainbow", "led zeppelin", "slayer", "anthrax", "misfits", "2pac", "eminem", "nwa",
]

let tema = ""
let escolha = 0

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

console.log(palavra)