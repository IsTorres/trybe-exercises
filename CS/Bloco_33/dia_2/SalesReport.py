from abc import ABC, abstractmethod
import json
import csv


class SalesReport(ABC):
    def __init__(self, export_file):
        self.export_file = export_file
        

    def build(self):
        """ Lógica para a entidade 'se criar',
        ou seja, criar um relatório imprimível. """
        return [
            {
            'Coluna 1': 'Dado 1',
            'Coluna 2': 'Dado 2',
            'Coluna 3': 'Dado 3'
            },
            {
            'Coluna 1': 'Dado A',
            'Coluna 2': 'Dado B',
            'Coluna 3': 'Dado C'
            }
        ]
    @abstractmethod
    def serialize(self):
        raise NotImplementedError

class SalesReportJSON(SalesReport):
    def serialize(self):
        with open(self.export_file + '.json', 'w') as file:
                json.dump(self.build(), file)


class SalesReportCSV(SalesReport):
    def serialize(self):
        with open(self.export_file + '.csv', 'w') as file:
            # sempre bom ter um 'header'
            headres = ['Coluna 1', 'Coluna 2', 'Coluna 3',]
            writer = csv.DictWriter(file, headres)
            writer.writeheader()
            # self.build() é o obj
            for item in self.build():
                writer.writerow(item)


meu_relatorio_de_vendas = SalesReportJSON('meu_relatorio')
meu_relatorio_de_vendas.serialize()

meu_relatorio_de_vendas = SalesReportCSV('meu_relatorio')
meu_relatorio_de_vendas.serialize()