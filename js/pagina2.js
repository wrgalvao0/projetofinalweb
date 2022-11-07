function calcularPontos() {

    var pontuacao = 0; //salva o pontuacao

    var questionsArr = ['opcaoq1', 'opcaoq2', 'opcaoq3', 'opcaoq4', 'opcaoq5'];

    var k = 0; //usado para checar se todas as questões foram respondidas


    var questoesCorretasEnviadas = []; // guarda o numero das questoes corretas que foram enviadas


    var questoesIncorretasEnviadas = []; // guarda o numero das questoes incorretas enviadas


    var indiceQuestoesCorretas = 0; //indice para poder percorrer o array de questoes corretas


    var indiceQuestoesErradas = 0; //indice para poder percorrer o array de questoes incorretas



    // para cada elemento das perguntas, executa o loop
    questionsArr.forEach((element, index) => {

        var e = document.getElementsByName(element); // retorna um array de 4 elementos, por que cada questão tem 4 opções


        for (var j = 0; j < e.length; j++) {

            if (e[j].checked) {

                // guarda o id do radio button selecionado.

                k = k + 1; //checando se as 5 questões foram respondidas, se não, emite um alerta

                // checando se a opção selecionada é correta ou não
                // o id da opção correta é 'correta1', 'correta2', etc

                if (e[j].id == ("correta" + (index + 1))) {

                    // se a opção selecionada for a correta, o radio button vai ter o id
                    // id="correta<numero>"
                    pontuacao++; //incrementa a pontuacao

                    //guarda o numero de questoes corretas no array de questões corretas
                    questoesCorretasEnviadas[indiceQuestoesCorretas] = (index + 1);

                    indiceQuestoesCorretas++; // incrementa o index das questoes corretas enviadas
                }
                else {
                    // se a opção selecionada for a incorreta, ela não tem o atributo de id
                    // guardas as incorretas no array de incorretas
                    questoesIncorretasEnviadas[indiceQuestoesErradas] = (index + 1);

                    indiceQuestoesErradas++; //incrementa o índice
                }
            }
        }
    });

    // Mostrando o alerta para o usuário
    if (k == 5) {

        // se as 5 questões estiverem corretas
        //alert("Quiz das eleições : \n Respostas enviadas com sucesso!");
        if (pontuacao > 0 && pontuacao < 5) {
            // se a pontuacao estiver entre 0 e 5, então mostra todas as corretas e incorretas

            var mostrarResultado = "Quiz das eleições : \nSua pontuação foi : " + pontuacao + " \n \n Você acertou: \n ";


            questoesCorretasEnviadas.forEach(element => {

                // concatena os valores das questões
                mostrarResultado = mostrarResultado.concat("Pergunta : " + element + "\n");

            });

            // concatena as questões erradas
            mostrarResultado = mostrarResultado.concat(" \n Você errou as questões : \n ");


            questoesIncorretasEnviadas.forEach(element => {

                //concatena os valores das questoes
                mostrarResultado = mostrarResultado.concat("Pergunta : " + element + "\n");

            });

            //mostra o resultado na tag <p> do html

            document.getElementById("result1").innerText = mostrarResultado;

            //change the "submit button" to "go to homepage button"
            mostrarBotaoInicio();

        }
        else {
            //se a pontuacao for 0 ou 10, não mostra os valores das questões certas ou erradas, só mostra o resultado!

            document.getElementById("result1").innerText = ("Quiz das eleições : \nSua pontuação foi : " + pontuacao + "/5");

            //muda o botão de enviar para um botão para voltar ao inicio
            mostrarBotaoInicio();

        }

    }
    else {
        // se faltar alguma questão para ser respondida envia um alert
        alert("Por favor, responda todas as questões e clique em \n \"Enviar Quiz\" novamente! ");
    }

}

function irParaInicio() {
    // quando clicado, vai para a página inicial
    window.location.assign("index.html"); //vai para a página de inicio
}

function mostrarBotaoInicio() {
    // acha o botão de enviar quizz, para alterar o texto dele
    document.getElementById("hp").innerText = "Voltar ao inicio";

    //altera o valor de "calcularPontos()" para "irParaInicio()"
    document.getElementById('hp').setAttribute("onClick", "irParaInicio()");
}