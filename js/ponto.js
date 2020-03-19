import { objetos, jogador } from './infoJogo.js'
import { reiniciar } from './verificar.js'
import { numeroRandomico } from './randomico.js'
import { somPonto } from './som.js'

export function pontuar() {
  function novaFase() {
    objetos.velocidadeCarro1[0] = numeroRandomico(17, 5)
    objetos.velocidadeCarro2[0] = numeroRandomico(16, 3)
    objetos.velocidadeCarro3[0] = numeroRandomico(18, 8)
    objetos.velocidadeCarro4[0] = numeroRandomico(17, 4)
    objetos.velocidadeCarro5[0] = numeroRandomico(15, 2)
    objetos.velocidadeCarro6[0] = numeroRandomico(14, 5)

    objetos.personagem[0] = numeroRandomico(370, 30)
    reiniciar()
  }
  jogador.pontos += 1
  somPonto.play()
  novaFase()
}
