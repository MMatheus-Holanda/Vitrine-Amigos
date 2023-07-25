class Migos {
    constructor(foto, nome, profissao, hobby){
        this.foto = foto;
        this.nome = nome;
        this.profissao = profissao;
        this.hobby = hobby;
    }

    get fotoMigo() {
        return this.foto
    }

    set fotoMigo(foto){
        return this.foto = foto
    }

    get nomeMigo() {
        return this.nome
    }

    set nomeMigo(nome){
        return this.nome = nome
    }

    get profissaoMigo(){
        return this.profissao
    }

    set profissaoMigo(profissao){
        return this.profissao = profissao
    }

    get hobbyMigo(){
        return this.hobby 
    }

    set hobbyMigo(hobby){
        return this.hobby = hobby
    }
}

let matheus = new Migos ('Fotos Migos/Eu.jpg', 'Matheus Holanda', 'Programador', 'Dj de Techno');
let vitoria = new Migos ('Fotos Migos/Mozao.jpg', 'Vitoria Mitsue', 'Psicóloga', 'Jogadora de handebol');
let luis = new Migos ('Fotos Migos/Bola.jpg', 'Luis Felipe', 'Chef de cozinha', 'Automobilismo');
let isabela = new Migos ('Fotos Migos/Isa.jpg', 'Isabela Nunes', 'Programadora', 'Marceneira');
let jhonatas = new Migos ('Fotos Migos/Jhow.jpg', 'Jhonatas Monge', 'Auxiliar financeiro', 'Instrumentista e Artista');
let luiza = new Migos ('Fotos Migos/Lui.jpg', 'Luiza Passerini', 'Psicóloga', 'Fotógrafa');
let joao = new Migos ('Fotos Migos/Jao.jpg', 'João Pedro', 'Publicitário', 'Automobilismo');
let giovanna = new Migos ('Fotos Migos/Gih.jpg', 'Giovanna Lucena', 'Veterinária', 'Blogueira');

let img = document.getElementById('imgMigo')
let nome = document.getElementById('nomeMigo')
let profissao = document.getElementById('profissaoMigo')
let hobby = document.getElementById('hobbyMigo')
let display2 = document.getElementById('display2')

function matheusData(){
    img.src = matheus.foto
    nome.innerText = matheus.nome
    profissao.innerText = matheus.profissao
    hobby.innerText = matheus.hobby
    display2.style.display = 'flex'
}

function vitoriaData(){
    img.src = vitoria.foto
    nome.innerText = vitoria.nome
    profissao.innerText = vitoria.profissao
    hobby.innerText = vitoria.hobby
    display2.style.display = 'flex'
}

function luisData(){
    img.src = luis.foto
    nome.innerText = luis.nome
    profissao.innerText = luis.profissao
    hobby.innerText = luis.hobby
    display2.style.display = 'flex'
}

function isabelaData(){
    img.src = isabela.foto
    nome.innerText = isabela.nome
    profissao.innerText = isabela.profissao
    hobby.innerText = isabela.hobby
    display2.style.display = 'flex'
}

function jhonatasData(){
    img.src = jhonatas.foto
    nome.innerText = jhonatas.nome
    profissao.innerText = jhonatas.profissao
    hobby.innerText = jhonatas.hobby
    display2.style.display = 'flex'
}

function luizaData(){
    img.src = luiza.foto
    nome.innerText = luiza.nome
    profissao.innerText = luiza.profissao
    hobby.innerText = luiza.hobby
    display2.style.display = 'flex'
}

function joaoData(){
    img.src = joao.foto
    nome.innerText = joao.nome
    profissao.innerText = joao.profissao
    hobby.innerText = joao.hobby
    display2.style.display = 'flex'
}

function giovannaData(){
    img.src = giovanna.foto
    nome.innerText = giovanna.nome
    profissao.innerText = giovanna.profissao
    hobby.innerText = giovanna.hobby
    display2.style.display = 'flex'
}






