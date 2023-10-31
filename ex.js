function mostrarPopUp(exercicio, calcularFuncao) {
    const popUp = window.open("", `PopUp${exercicio}`, "width=300, height=100");
    if (popUp) {
        const campoTexto = document.createElement("input");
        campoTexto.type = "text";
        campoTexto.placeholder = "Digite aqui:";
        popUp.document.body.appendChild(campoTexto);
        const botao = popUp.document.createElement("button");
        botao.textContent = "Calcular";
        botao.addEventListener("click", () => calcularFuncao(popUp, campoTexto));
        popUp.document.body.appendChild(botao);

        const divResultado = popUp.document.createElement("div");
        divResultado.id = "resultado";
        popUp.document.body.appendChild(divResultado);
    } else {
        alert("O bloqueio de pop-ups pode estar impedindo a abertura do pop-up. Verifique as configurações do seu navegador.");
    }
}

function mostrarPopUp2() {
    const popUp = window.open("", "PopUpExercicio2", "width=400, height=200");
    if (popUp) {
        const form = popUp.document.createElement("form");

        const input1 = popUp.document.createElement("input");
        input1.type = "text";
        input1.name = "coordenadas0";

        const label1 = popUp.document.createElement("label");
        label1.textContent = "Coordenadas do ponto 1: ";

        const input2 = popUp.document.createElement("input");
        input2.type = "text";
        input2.name = "coordenadas1";

        const label2 = popUp.document.createElement("label");
        label2.textContent = "Coordenadas do ponto 2: ";

        const input3 = popUp.document.createElement("input");
        input3.type = "text";
        input3.name = "coordenadas2";

        const label3 = popUp.document.createElement("label");
        label3.textContent = "Coordenadas do ponto 3: ";

        const input4 = popUp.document.createElement("input");
        input4.type = "text";
        input4.name = "coordenadas3";

        const label4 = popUp.document.createElement("label");
        label4.textContent = "Coordenadas do ponto 4: ";

        form.appendChild(label1);
        form.appendChild(input1);
        form.appendChild(document.createElement("br"));
        form.appendChild(label2);
        form.appendChild(input2);
        form.appendChild(document.createElement("br"));
        form.appendChild(label3);
        form.appendChild(input3);
        form.appendChild(document.createElement("br"));
        form.appendChild(label4);
        form.appendChild(input4);
        form.appendChild(document.createElement("br"));

        const botao = popUp.document.createElement("button");
        botao.textContent = "Calcular";
        botao.addEventListener("click", function (event) {
            event.preventDefault();
            calcular2(popUp, input1.value, input2.value, input3.value, input4.value);
        });
        form.appendChild(botao);

        const divResultado = popUp.document.createElement("div");
        divResultado.id = "resultado";
        divResultado.style.display = "block";
        form.appendChild(divResultado);

        // Adiciona uma mensagem ao elemento divResultado
        divResultado.innerHTML = `Aguardando entrada do usuário...`;
        popUp.document.body.appendChild(form);
    } else {
        alert("O bloqueio de pop-ups pode estar impedindo a abertura do pop-up. Verifique as configurações do seu navegador.");
    }
}
    


function calcular2(popUp, x1, y1, x2, y2) {
    // Calcula a distância euclidiana entre os pontos
    const D = Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));

    // Atualiza o conteúdo do elemento divResultado
    const divResultado = popUp.document.querySelector("#resultado");
    divResultado.innerHTML = `A distância euclidiana entre os pontos é: ${D}`;

    // Retorna true para permitir que o formulário seja enviado
    return true;
}





function calcular1(popUp, campoTexto) {
    const X = campoTexto.value;
    let soma = 0;
    for (let num = 1; num < X; num++) {
        if (X % num == 0) {
            soma += num;
        }
    }
    const divResultado = popUp.document.querySelector("#resultado");
    divResultado.innerHTML = `A soma dos divisores de ${X} é = ${soma}`;
}

function calcular3(popUp, campoTexto) {
    const frase = campoTexto.value;
    const palavras = frase.toLowerCase().match(/\b[a-zA-Zçéáíóúâêôû]+\b/g);

    const contagem = {};
    palavras.forEach((palavra) => {
        if (contagem[palavra]) {
            contagem[palavra]++;
        } else {
            contagem[palavra] = 1;
        }
    });

    let resultado = "";
    for (const palavra in contagem) {
        resultado += `${palavra} (${contagem[palavra]}), `;
    }

    resultado = resultado.slice(0, -2); // Remover a última vírgula

    const divResultado = popUp.document.querySelector("#resultado");
    divResultado.innerHTML = `Contagem de palavras na frase: ${resultado}`;
}


function calcular4(popUp, campoTexto) {
    const entrada = campoTexto.value;
    const linhas = entrada.split(';');
    const numLinhas = linhas.length;

    if (numLinhas > 0) {
        const numColunas = linhas[0].trim().split(' ').length; // Remova espaços em branco do início e do final da linha

        let matrizValida = true;

        for (let i = 1; i < numLinhas; i++) {
            const linhaAtual = linhas[i].trim().split(' '); // Remova espaços em branco do início e do final da linha
            if (linhaAtual.length !== numColunas) {
                matrizValida = false;
                break;
            }
        }

        if (matrizValida) {
            const divResultado = popUp.document.querySelector("#resultado");
            divResultado.innerHTML = `Essa é uma matriz de dimensão ${numLinhas} x ${numColunas}.`;
        } else {
            alert("A matriz não tem um formato válido. Verifique as linhas e colunas.");
        }
    } else {
        alert("Nenhuma matriz encontrada na entrada.");
    }
}


function calcular5(popUp, campoTexto) {
    const N = parseInt(campoTexto.value);
    if (!isNaN(N) && N >= 1) {
        const fibonacci = [0, 1];
        for (let i = 2; i < N; i++) {
            const next = fibonacci[i - 1] + fibonacci[i - 2];
            fibonacci.push(next);
        }

        const divResultado = popUp.document.querySelector("#resultado");
        divResultado.innerHTML = `Os primeiros ${N} números da sequência de Fibonacci: ${fibonacci.join(', ')}`;
    } else {
        alert("Entrada inválida. Forneça um número inteiro positivo.");
    }
}


