import { canvas, pincel } from './infoJogo.js'
import {
  desenharFundo,
  desenhaPersonagem,
  desenhaImagens,
  loadImage,
} from './desenhar.js'

async function iniciaJogo() {
  const personagem = await loadImage('../image/personagem.png')
  const carroImage1 = await loadImage('../image/car1.png')
  const carroImage2 = await loadImage('../image/car2.png')
  const carroImage3 = await loadImage('../image/car3.png')
  const carroImage4 = await loadImage('../image/car4.png')
  const carroImage5 = await loadImage('../image/car5.png')
  const carroImage6 = await loadImage('../image/car6.png')

  desenhaImagens(
    carroImage1,
    carroImage2,
    carroImage3,
    carroImage4,
    carroImage5,
    carroImage6,
    personagem,
  )
}

desenharFundo()
iniciaJogo()
