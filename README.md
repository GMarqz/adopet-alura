# Adopet

Solução para o primeiro exercício do curso [JavaScript: implementando CRUD com requisições HTTP](https://cursos.alura.com.br/course/javascript-implementando-crud-requisicoes-http) disponível na [Alura](www.alura.com.br).

![Preview da página](./assets/images/Captura%20de%20tela%202024-12-09%20-%2012.29.13.png)

## Ferramentas utilizadas

- [Bootstrap](https://getbootstrap.com)
- [Typescript](https://www.typescriptlang.org)
- [Json-Server](https://www.npmjs.com/package/json-server)
- [Concurrently](https://www.npmjs.com/package/concurrently)
- [Dog as a servcie (Api de imagens de doguinhos e felinos)](https://www.thedogapi.com)

## Exercício

Utilizar o `json-server` para buscar dados de um arquivo `json`e renderizar esses dados no *frontend*.

[Site usado como referência](https://www.petfinder.com)

## Desafios encontrados

Inicialmente, tentei utilizar o método `forEach()` para renderizar cada `card`. No entanto, para evitar que fotos de cães fossem associadas aos dados de gatos (ou vice-versa), criei a função `geraImagem(especieDoPet)` que gera uma imagem de cão para a espécie '**canina**' ou uma imagem de gato para a espécie '**felina**'.

O problema é `gerarImagem(especieDoPet)` é assincrono e eu não poderia passar `await` na *template string* tampouco guardar o resultado de função assincrona dentro de uma *variável* no `forEach`. 
O código abaixo ilustra essa limitação:

```javascript
 try{
            const pets: Pets[] = await petApi.buscarPet();
            pets.forEach(pet => {
                ❌Isso gera erro porque "await" não funciona aqui
                const imageUrl = await geraImagem(pet.especie);

                $petCards.innerHTML += 
                <div class="card" style="width: 18rem;">
                    <img src="${❌await geraImagem(pet.especie)}" class="card-img-top" alt="Foto do ${pet.nome}">
                    <div class="card-body">
                        <h5 class="card-title">${pet.nome}</h5>
                        <p class="card-text>${pet.raca}</p>
                    </div>
                </div>
            ;
            })

        }
```

O problema é que o `forEach` executa o *callback* **uma única vez para cada item do array**, e ele não "espera" a resolução das `Promises` dentro desse *callback*. Como resultado, `geraImagem` retorna `undefined`, porque o *callback* do `forEach` é executado antes que a Promise de `geraImagem` seja resolvida.
Da pra entender melhor sobre o comportamento do `forEach` [📗aqui](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach).

## Solução

Para solucionar esse problema, substituí o método `forEach` pelo `for...of`, que permite lidar com funções assíncronas utilizando `await`. O `for...of` itera sobre os elementos de forma sequencial, aguardando a resolução da `Promise` em cada iteração antes de seguir para o próximo item.

