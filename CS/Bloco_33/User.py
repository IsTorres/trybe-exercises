class User:
    # construtor
    def __init__(self, name, email, password):
        # atributos
        self.name = name
        self.email = email
        self.password = password

    def reset_password(self):
        print("Envia email de redefinição de senha")

# instância
meu_user = User("Ismael Torres", "ismael@email.com", "xesquelede")

# print(meu_user)
# print(meu_user.name)
# meu_user.reset_password()

# crie entidades = Abstração 
# não preciso saber como o método funciona = Encapsulamento
