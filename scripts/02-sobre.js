/*SCRIPT DOS DADOS ATUAIS DA VETCARE*/

/*CRIAR A FUNÇÃO ASSÍNCRONA carregarDados*/
async function carregarDados(){
    try{ /*define uma seção para testar se existe erros*/
        const resposta = await fetch("/json/dados.json?ts=" + new Date().getTime()); /*declara a variável "resposta" = realiza requisições HTTP assíncronas, "pausando" a execução de uma função async até que o servidor responda*/

        if(!resposta.ok){
            throw new Error("Erro HTTP: " + resposta.status) /*interrompe a exzecução do código e lança uma exceção customizada*/
        }
        const dados = await resposta.json(); /*armazena o que for enviado pelo arquivo*/

        /*união do HTML com o JSON*/
        document.getElementById("atendimentos").textContent = dados.atendimentos.qtde;
        document.getElementById("veterinarios").textContent = dados.veterinarios.qtde;
        document.getElementById("tutores").textContent = dados.tutores.qtde;
    }
    catch(erro){ /*utilizado para capturar e tratar erros que ocorrem dentro do try*/
        console.error("Erro ao carregar dados.json: ", erro);
    }
}

carregarDados();
setInterval(carregarDados, 3000); /*define intervalo de tempo para carregar dados em 3s (3000ms)*/