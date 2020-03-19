import { objetos } from './infoJogo.js'

export function verificarColisao(x, y, w, h) {
  function collideRectRect(x, y, w, h, x2, y2, w2, h2) {
    if (x + w >= x2 && x <= x2 + w2 && y + h >= y2 && y <= y2 + h2) {
      return true
    }
    return false
  }
  return collideRectRect(...objetos.personagem, x, y, w, h)
}
