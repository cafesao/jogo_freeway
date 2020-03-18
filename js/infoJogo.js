export const canvas = document.querySelector('canvas')
export const pincel = canvas.getContext('2d')

export const jogador = {}

export const objetos = {
  carro1: [-143, -250, 30, 50],
  carro2: [65, -250, 30, 50],
  carro3: [15, -265, 35, 60],
  carro4: [15, -250, 30, 50],
  carro5: [65, -250, 30, 50],
  carro6: [-145, -250, 30, 50],
  personagem: [Math.floor(Math.random() * 300) - 180, 143, 25, 30],
}
