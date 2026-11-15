/*SCRIPT DOS DADOS ATUAIS DA VETCARE*/

/*CRIAR A FUNÇÃO ASSÍNCRONA carregarAtendimentos*/
async function carregarAtendimentos(){
    try{ /*define uma seção para testar se existe erros*/
        const respostaAtendimento = await fetch("../dados/Atendimento.json?ts=" + new Date().getTime()); /*declara a variável "resposta" = realiza requisições HTTP assíncronas, "pausando" a execução de uma função async até que o servidor responda*/

        if(!respostaAtendimento.ok){
            throw new Error("Erro HTTP: " + respostaAtendimento.status) /*interrompe a execução do código e lança uma exceção customizada*/
        }
        
        const dados = await respostaAtendimento.json(); /*armazena o que for enviado pelo arquivo*/
        const totalAtendimentos = dados.length;

        /*união do HTML com o JSON*/
        document.getElementById("atendimentos").textContent = totalAtendimentos;
    }
    catch(erro){ /*utilizado para capturar e tratar erros que ocorrem dentro do try*/
        console.error("Erro ao carregar Atendimento.json: ", erro);
    }
}

/*CRIAR A FUNÇÃO ASSÍNCRONA carregarVeterinarios*/
async function carregarVeterinarios(){
    try{ /*define uma seção para testar se existe erros*/
        const respostaVeterinario = await fetch("../dados/Veterinario.json?ts=" + new Date().getTime()); /*declara a variável "resposta" = realiza requisições HTTP assíncronas, "pausando" a execução de uma função async até que o servidor responda*/

        if(!respostaVeterinario.ok){
            throw new Error("Erro HTTP: " + respostaVeterinario.status) /*interrompe a execução do código e lança uma exceção customizada*/
        }
        
        const dados = await respostaVeterinario.json(); /*armazena o que for enviado pelo arquivo*/
        const totalVeterinarios = dados.length;

        /*união do HTML com o JSON*/
        document.getElementById("veterinarios").textContent = totalVeterinarios;
    }
    catch(erro){ /*utilizado para capturar e tratar erros que ocorrem dentro do try*/
        console.error("Erro ao carregar Veterinario.json: ", erro);
    }
}

/*CRIAR A FUNÇÃO ASSÍNCRONA carregarTutores*/
async function carregarTutores(){
    try{ /*define uma seção para testar se existe erros*/
        const respostaTutor = await fetch("../dados/Tutor.json?ts=" + new Date().getTime()); /*declara a variável "resposta" = realiza requisições HTTP assíncronas, "pausando" a execução de uma função async até que o servidor responda*/

        if(!respostaTutor.ok){
            throw new Error("Erro HTTP: " + respostaTutor.status) /*interrompe a execução do código e lança uma exceção customizada*/
        }
        
        const dados = await respostaTutor.json(); /*armazena o que for enviado pelo arquivo*/
        const totalTutores = dados.length;

        /*união do HTML com o JSON*/
        document.getElementById("tutores").textContent = totalTutores;
    }
    catch(erro){ /*utilizado para capturar e tratar erros que ocorrem dentro do try*/
        console.error("Erro ao carregar Tutor.json: ", erro);
    }
}

/*CHAMADA DAS FUNÇÕES carregarAtendimentos, carregarVeterinarios E carregarTutores*/
carregarAtendimentos();
setInterval(carregarAtendimentos, 3000); /*define intervalo de tempo para carregar dados em 3s (3000ms)*/

carregarVeterinarios();
setInterval(carregarVeterinarios, 3000); /*define intervalo de tempo para carregar dados em 3s (3000ms)*/

carregarTutores();
setInterval(carregarTutores, 3000); /*define intervalo de tempo para carregar dados em 3s (3000ms)*/