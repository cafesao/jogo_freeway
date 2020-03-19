class sound {
  constructor(src) {
    this.sound = document.createElement('audio')
    this.sound.src = src
    this.sound.setAttribute('preload', 'auto')
    this.sound.setAttribute('controls', 'none')
    this.sound.style.display = 'none'
    document.body.appendChild(this.sound)
    this.play = () => {
      this.sound.play()
    }
    this.stop = () => {
      this.sound.pause()
    }
  }
}

export const somPonto = new sound('../sound/ponto.wav')
export const somColidiu = new sound('../sound/colidiu.mp3')
