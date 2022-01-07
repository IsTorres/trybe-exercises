class TV:
    def __init__(self, tamanho):
        self.volume = 50
        self.canal = 1
        self.tamanho = tamanho
        self.ligada = False

    def aumenta_volume(self):
        if self.volume <= 99:
            self.volume += 1

    def abaixa_volume(self):
        if self.volume >= 1:
            self.volume -= 1

    def mod_canal(self, canal):
        if canal <= 1 or canal >= 99:
            raise ValueError('Canal inexistente')

        if type(canal) != int:
            raise TypeError('Use apenas números')

        self.canal = canal

    def liga_desliga(self):
        self.ligada = not self.ligada


controle_remoto = TV.liga_desliga
