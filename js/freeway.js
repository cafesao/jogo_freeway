import { desenharFundo, desenhaImagens, loadImage } from './desenhar.js'
import { movimentaTudo, teclaPressionada, teclaSolta } from './movimento.js'
import { verificaCarro, verificaPersonagem } from './verificar.js'
import { objetos } from './infoJogo.js'

export let intervalo

export async function iniciaJogo() {
  objetos.personagem[1] = 340
  objetos.carro1[0] = 400
  objetos.carro2[0] = -100
  objetos.carro3[0] = 400
  objetos.carro4[0] = -100
  objetos.carro5[0] = 400
  objetos.carro6[0] = -100

  const personagem = await loadImage('../image/personagem.png')
  const carroImage1 = await loadImage('../image/car1.png')
  const carroImage2 = await loadImage('../image/car2.png')
  const carroImage3 = await loadImage('../image/car3.png')
  const carroImage4 = await loadImage('../image/car4.png')
  const carroImage5 = await loadImage('../image/car5.png')
  const carroImage6 = await loadImage('../image/car6.png')

  function jogo() {
    desenhaImagens(
      carroImage1,
      carroImage2,
      carroImage3,
      carroImage4,
      carroImage5,
      carroImage6,
      personagem,
    )
    movimentaTudo()
    verificaCarro()
    verificaPersonagem()
  }
  document.onkeydown = teclaPressionada
  document.onkeyup = teclaSolta

  intervalo = setInterval(jogo, 16.66)
}

desenharFundo()
iniciaJogo()
