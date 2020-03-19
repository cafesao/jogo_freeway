import { numeroRandomico } from './randomico.js'

export const canvas = document.querySelector('canvas')
export const pincel = canvas.getContext('2d')

export const movimentosAceitos = {
  Up: false,
  Down: false,

  ArrowUp(info) {
    if (info) {
      if (this.Up === false) {
        movimentosAceitos.Up = true
      }
    } else {
      movimentosAceitos.Up = false
    }
  },
  ArrowDown(info) {
    if (info) {
      if (this.Down === false) {
        movimentosAceitos.Down = true
      }
    } else {
      movimentosAceitos.Down = false
    }
  },
  LogArrowUp() {
    objetos.personagem[1] -= jogador.velocidade
  },
  LogArrowDown() {
    objetos.personagem[1] += jogador.velocidade
  },
}

export const jogador = {
  pontos: 0,
  mortes: 0,
  velocidade: 3,
}

export const objetos = {
  velocidadeCarro1: [numeroRandomico(17, 5)],
  velocidadeCarro2: [numeroRandomico(16, 3)],
  velocidadeCarro3: [numeroRandomico(18, 8)],
  velocidadeCarro4: [numeroRandomico(17, 4)],
  velocidadeCarro5: [numeroRandomico(15, 2)],
  velocidadeCarro6: [numeroRandomico(14, 5)],
  carro1: [400, 35, 50, 30],
  carro2: [-100, 85, 50, 30],
  carro3: [400, 135, 50, 30],
  carro4: [-100, 195, 50, 30],
  carro5: [400, 245, 50, 30],
  carro6: [-100, 290, 50, 30],
  personagem: [numeroRandomico(370, 30), 340, 10, 10],
}
