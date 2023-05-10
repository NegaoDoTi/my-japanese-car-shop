import requests
import sys

def busca_cep(cep):
    request = requests.get(f"https://viacep.com.br/ws/{cep}/json")

    print(request.text)

if __name__ == "__main__":
    busca_cep(sys.argv[1])