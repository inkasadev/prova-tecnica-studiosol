# Prova Técnica Studio Sol

O problema consiste em receber um número através de uma requisição e implementar
um jogo para acertar este número através de palpites. ​Ao errar um palpite, será
informado se o número obtido é maior ou menor do que o palpite feito. O palpite
realizado ou ​status code​ de erro de requisição devem ser exibidos na tela no
formato de LED de 7 segmentos. O palpite será obtido como entrada em um campo de
texto, que deverá ser processado apenas quando o botão ENVIAR for clicado.

Para solucionar o problema proposto, você deverá implementar a solução
utilizando, HTML, CSS e Javascript.

![Screenshot_0](readme/screenshot_0.png)

## Instalação

```sh
$ npm install
```

Você pode conferir o projeto finalizado
[clicando aqui](https://prova-tecnica-studiosol.surge.sh/).

## Implementação

| Legenda                       |
| ----------------------------- |
| ✅ Implementado               |
| 🔳 Implementado com ressalvas |
| ⬜ Não implementado           |

### Segmentos:

- ✅ O display pode conter números não-negativos de 1 a 3 algarismos.
- ✅ O valor numérico exibido nos segmentos deve representar o palpite realizado
  ou o status code obtido quando a requisição falhar.
- ✅ Só deve ser apresentada a quantidade de algarismos necessária (O número 29
  precisar ser exibido sem zero à esquerda).
- ✅ Você deve implementar sua própria solução para exibir os segmentos. Não
  serão aceitas bibliotecas de terceiros para esta etapa. Em especial, ​**NÃO**​
  utilize uma fonte pronta para exibir os segmentos. Botão ​NOVA PARTIDA​:
- ✅ O botão ficará visível apenas quando houver erro ao receber o número ou
  quando o jogador acertou o palpite

### Campo de entrada:

- ✅ Mostrar o texto "Digite o palpite" como placeholder
- ✅ O valor deve aparecer nos segmentos assim que o botão ​ENVIAR ​for clicado
  e o input deve ser resetado para o estado inicial.
- ✅ O botão de enviar deverá ficar desabilitado quando houve erro ao receber o
  número ou quando o jogador acertou o palpite. O usuário deve clicar em "NOVA
  PARTIDA" neste caso.

![Screenshot_1](readme/screenshot_1.png)

### Pontos extras:

- 🔳 Testes automatizados​
  - Esse projeto não possui testes ponta a ponta, mas o projeto da lib
    [Studio Led](https://github.com/inkasadev/studioled) possui testes
    unitários.
- ✅ Configuração de bundler​

## Biblioteca Studio Led:

No teste diz que não podemos utilizar bibliotecas criadas por terceiros para
criar a lógica do LED display. A biblioteca Studio LED foi criada por mim para
esse teste. Vocês podem obter mais informações sobre ela nos links abaixo:

- github: https://github.com/inkasadev/studioled
- npm: https://www.npmjs.com/package/studioled

## Comentários e documentação

O código deste projeto está completamente comentado. A lógica do programa se
baseia em alterar o display LED criado pela lib Studio Led de acordo com o
número informado pelo usuário quando comparado ao número obtido pela requisição.
Além disso, é informado ​em um texto acima do LED​ os resultados possíveis:

- "Erro": quando houver erro na requisição
- "É menor": quando o palpite enviado é ​maior​ que o número obtido
- "É maior": quando o palpite enviado é ​menor​ que o número obtido
- "Você acertou!!!": quando o palpite enviado é igual ao número obtido

Por fim, é exibido na tela um botão NOVA PARTIDA quando o usuário acerta ou
quando ocorre um erro de requisição. Quando o usuário clica nesse botão uma nova
partida é criada obtendo outro número aleatório por meio de uma nova requisição.

![Screenshot_2](readme/screenshot_2.png)

## Versionamento

Usamos [SemVer](http://semver.org/) para versionamento. Para as versões
disponíveis, veja as
[tags neste repositório](https://github.com/inkasadev/prova-tecnica-studiosol/tags).

## Autor

| ![Phillipe Martins](https://avatars.githubusercontent.com/u/7750404?v=4&s=150) |
| :----------------------------------------------------------------------------: |
|               [Phillipe Martins](https://github.com/inkasadev/)                |

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo
[LICENSE.md](LICENSE.md) para detalhes.
