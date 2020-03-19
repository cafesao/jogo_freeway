import { objetos, movimentosAceitos } from './infoJogo.js'
import { verificaPersonagem } from './verificar.js'

export function teclaPressionada(evento) {
  if (movimentosAceitos[evento.key]) {
    movimentosAceitos[evento.key](true) //Abstração
  }
}

export function teclaSolta(evento) {
  if (movimentosAceitos[evento.key]) {
    movimentosAceitos[evento.key](false) //Abstração
  }
}
export function movimentaTudo() {
  function movimentaJogador() {
    if (movimentosAceitos.Up) {
      movimentosAceitos.LogArrowUp()
    }
    if (movimentosAceitos.Down) {
      if (verificaPersonagem()) {
        movimentosAceitos.LogArrowDown()
      }
    }
  }

  function movimentaCarros() {
    function movimentaCarro(carro, atual, max, velocidade) {
      if (atual === 400) {
        if (carro[0] > max) {
          carro[0] -= velocidade
        } else {
          carro[0] = atual
        }
      } else {
        if (carro[0] < max) {
          carro[0] += velocidade
        } else {
          carro[0] = atual
        }
      }
    }

    movimentaCarro(objetos.carro1, 400, -100, objetos.velocidadeCarro1[0])
    movimentaCarro(objetos.carro2, -100, 400, objetos.velocidadeCarro2[0])
    movimentaCarro(objetos.carro3, 400, -100, objetos.velocidadeCarro3[0])
    movimentaCarro(objetos.carro4, -100, 400, objetos.velocidadeCarro4[0])
    movimentaCarro(objetos.carro5, 400, -100, objetos.velocidadeCarro5[0])
    movimentaCarro(objetos.carro6, -100, 400, objetos.velocidadeCarro6[0])
  }

  movimentaJogador()
  movimentaCarros()
}
