const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Com qual frequencia você usa o chat de inteligencia artificial para fazer trabalhos de escola ?",
        alternativas: [
            {
                texto: "Faço isso sempre.",
                afirmacao: "Não quero ficar sem nota nas materias."
            },
            {
                texto: "Não faço isso.",
                afirmacao: "Pois eu uso para fazer pesquisas especificas."
            }
        ]
    },
    {
        enunciado: "O quão dependente vc está da INTELIGENCIA ARTIFICIAL?",
        alternativas: [
            {
                texto: "Sou muito dependente da IA.",
                afirmacao: "Não consigo utilizar meu imaginario e conhecimentos."
            },
            {
                texto:"Não sou dependente.",
                afirmacao: "Consigo utilizar minhas capacidades."
            }
        ]
    },
    {
        enunciado: "você acha que as IAs tem defeitos?",
        alternativas: [
            {
                texto:" Não.",
                afirmacao: "As IAs são perfeitas e não erram."
            },
            {
                texto: "Sim.",
                afirmacao:"Qualquer maquina pode dar defeitos e respostas errdas."
            }
        ]
    },
    {
        enunciado: "você confiaria em uma IA para gazer suas coisas, como marcar agendas e ter asseso a tudo  da sua vida?",
        alternativas: [
            {
                texto:"Deixaria sem nenhum problema.",
                afirmacao: "confiaria pios nao tenho problemas com isso."
            },
            {
                texto: "não dexaria.",
                afirmacao: "por que eu não teria como controlar essa situação."
            }
        ]
    },
    {
        enunciado: "Você desligaria todas as IAs? ",
        alternativas: [
            {
                texto:"não.",
                afirmacao: "Infelizmente passei a utilizar a IA para fazer todas."
            },
            {
                texto: "sim.",
                afirmacao: "Porque eu não utilizo muito. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
