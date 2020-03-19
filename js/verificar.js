import { verificarColisao } from './colisao.js'
import { objetos, jogador } from './infoJogo.js'
import { intervalo, iniciaJogo } from './freeway.js'
import { pontuar } from './ponto.js'
import { somColidiu } from './som.js'

export function reiniciar() {
  clearInterval(intervalo)
  document.onkeydown = null
  document.onkeyup = null
  iniciaJogo()
}

export function verificaPersonagem() {
  let personagem = verificarColisao(0, 5, 400, 25)

  if (personagem) {
    pontuar()
  } else if (objetos.personagem[1] < 340) {
    return true
  }
  return false
}

export function verificaCarro() {
  let carro1 = verificarColisao(objetos.carro1[0], objetos.carro1[1], 50, 25)
  let carro2 = verificarColisao(objetos.carro2[0], objetos.carro2[1], 50, 25)
  let carro3 = verificarColisao(objetos.carro3[0], objetos.carro3[1], 50, 25)
  let carro4 = verificarColisao(objetos.carro4[0], objetos.carro4[1], 50, 25)
  let carro5 = verificarColisao(objetos.carro5[0], objetos.carro5[1], 50, 25)
  let carro6 = verificarColisao(objetos.carro6[0], objetos.carro6[1], 50, 25)

  if (carro1 || carro2 || carro3 || carro4 || carro5 || carro6) {
    reiniciar()
    jogador.mortes += 1
    somColidiu.play()
  }
}
