//IMAGENS E SONS DO JOGO
let imagemDaEstrada
let imagemDoAtor
let imagemDoCarro
let imagemCarro2
let imagemCarro3

let somDaTrilha
let somDaColisao
let somDoPonto


function preload(){
  imagemDaEstrada = loadImage("Imagens/estrada.png")
  imagemDoAtor = loadImage("Imagens/ator-1.png")
  imagemDoCarro = loadImage("Imagens/carro-1.png")
  imagemDoCarro2 = loadImage("Imagens/carro-2.png")
  imagemDoCarro3 = loadImage("Imagens/carro-3.png")
  imagensDosCarros = [imagemDoCarro, imagemDoCarro2, imagemDoCarro3, imagemDoCarro, imagemDoCarro2, imagemDoCarro3]
  
  somDaTrilha = loadSound("sons/trilha.mp3")
  somDaColisao = loadSound("sons/colidiu.mp3")
  somDoPonto = loadSound ("sons/pontos.wav")
}




