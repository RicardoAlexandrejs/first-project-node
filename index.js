const express = require('express')
const uuid = require('uuid')

const port = 3000
const app = express()
app.use(express.json())

/* 
query params => meusite.com/users?name=ricardo&age=30 // exemplo de busca //Filtro 
Route params =>  /users/2 // utilizado para BUSCAR, DELETAR ou ATUALIZAR ALGO ESPECÍFICO
Request body => {"name":"Rodolfo", "Age":}

GET => Busca informação no back-end
POST => Cria informação no back -End
PUT / PATCH => Alterar / Atualizar informação no Back-end
DELETE => Deletar informação no back-end

Middleware => INTERCEPTADOR => Tem o poder de parar ou alterar dados de requisição

*/

// Projeto prático para testar

const users = []
// array de teste - criado apenas em Amb. de desenvolvimento para teste, NUNCA deve ser criada em Amb de produção
const checkUserId = (request, response, next) => {
    const { id } = request.params // guardando o id encontrado em uma variavel 

    const index = users.findIndex(user => user.id === id) // busca o numero da posição do id encontrado

    if (index < 0) { // se ID não existir retorna a resposta
        return response.status(404).json({ error: "User not Found" })
    }

    request.userIndex = index
    request.userId = id

    next()
}

app.get('/users', (request, response) => { // rota para buscar e exibe todos os usuários 
    return response.json(users)
})

app.post('/users', (request, response) => { // rota para criar novos usuários
    const { name, age } = request.body
    //console.log(uuid.v4())// testando a biblioteca, verificando a função dela

    const user = { id: uuid.v4(), name, age }
    users.push(user) // adicionando o novo usuario no array de teste

    return response.status(201).json(user)
})

app.put('/users/:id', checkUserId, (request, response) => { // rota para atualizar os usuarios pelo ID
    const { name, age } = request.body // guardando os dados enviado pelo body em uma variavel

    const index = request.userIndex // utilizando o indice da função checkUserId
    const id = request.userId // uilizando o id da função checkUserId

    const updatedUser = { id, name, age } // variavel que armazenará os novos dados

    //console.log(index) // testando para  verificar se ele retorna a posição do id encontrado

    users[index] = updatedUser // encontrado o id atualiza com as informações da variavel updatedUser

    return response.json(updatedUser)
})

app.delete('/users/:id', checkUserId, (request, response) => { // rota para DELETAR os usuarios pelo ID
    const index = request.userIndex // utilizando o indice da função checkUserId

    users.splice(index, 1)

    return response.status(204).json()
})

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})