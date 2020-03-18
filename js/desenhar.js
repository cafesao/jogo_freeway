import { pincel, canvas, objetos } from './infoJogo.js'

export function desenharFundo() {
  function desenhaListraBranca(y) {
    pincel.fillStyle = 'white'
    for (let x = 0; x < 420; x += 70) {
      pincel.fillRect(x, y, 40, 5)
    }
  }
  function desenhaListraAmarela(y) {
    pincel.fillStyle = 'yellow'
    for (let x = 0; x < 420; x += 70) {
      pincel.fillRect(x, y, 40, 5)
      pincel.fillRect(x, y + 10, 40, 5)
    }
  }
  function desenhaCalcada(y) {
    pincel.fillStyle = 'black'
    pincel.fillRect(0, y, 400, 5)
    pincel.fillRect(0, y + 25, 400, 5)
    pincel.fillStyle = 'rgb(64,64,64)'
    pincel.fillRect(0, y + 5, 400, 20)
  }

  function desenhaRua() {
    desenhaCalcada(0)
    desenhaListraBranca(70)
    desenhaListraBranca(120)
    desenhaListraAmarela(170)
    desenhaListraBranca(230)
    desenhaListraBranca(280)
    desenhaCalcada(325)
  }

  pincel.fillStyle = 'grey'
  pincel.fillRect(0, 0, 400, 400)
  desenhaRua()
}

export function desenhaPersonagem(x, y) {
  const personagem = new Image()
  personagem.src = '../image/galinha.png'
  personagem.onload = () => {
    pincel.drawImage(personagem, x, y, 25, 25)
  }
}

export async function desenhaImagens(
  carroImage1,
  carroImage2,
  carroImage3,
  carroImage4,
  carroImage5,
  carroImage6,
  personagem,
) {
  pincel.translate(canvas.width / 2, canvas.height / 2)
  pincel.rotate((90 * Math.PI) / 180)
  pincel.drawImage(carroImage1, ...objetos.carro1)
  pincel.rotate((180 * Math.PI) / 180)
  pincel.drawImage(carroImage2, ...objetos.carro2)
  pincel.rotate((180 * Math.PI) / 180)
  pincel.drawImage(carroImage3, ...objetos.carro3)
  pincel.rotate((180 * Math.PI) / 180)
  pincel.drawImage(carroImage4, ...objetos.carro4)
  pincel.rotate((180 * Math.PI) / 180)
  pincel.drawImage(carroImage5, ...objetos.carro5)
  pincel.rotate((180 * Math.PI) / 180)
  pincel.drawImage(carroImage6, ...objetos.carro6)
  pincel.rotate((90 * Math.PI) / 180)
  pincel.drawImage(personagem, ...objetos.personagem)
}

export function loadImage(url) {
  return new Promise(r => {
    let i = new Image()
    i.onload = () => r(i)
    i.src = url
  })
}
