const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json('Bem-vindo a atividade de exemplo');
});

app.post('/desconto', (req, res) => {
    const { preco } = req.body;
    let desconto = 0;
    if (preco > 1000) {
        desconto = preco * 0.08;
    }
    let precoComDesconto = preco - desconto;
    res.json({ preco, desconto, precoComDesconto });
});

app.post('/inss', (req, res) => {
    const { salario } = req.body;

    if (!salario || salario <= 0) {
        return res.status(400).json({ error: "Salário inválido ou não informado" });
    }

    let desconto = 0;

    if (salario <= 1212.00) {
        desconto = salario * 0.075;
    } else if (salario <= 2427.35) {
        desconto = salario * 0.09;
    } else if (salario <= 3641.03) {
        desconto = salario * 0.12;
    } else if (salario <= 7087.22) {
        desconto = salario * 0.14;
    } else {
        desconto = 7087.22 * 0.14;
    }

    const salarioComDesconto = salario - desconto;

    res.json({ salario, desconto, salarioComDesconto });
});

app.post('/triangulo', (req, res) => {
    const { a, b, c } = req.body;

    if (!a || !b || !c || a <= 0 || b <= 0 || c <= 0) {
        return res.status(400).json({ error: "Todos os lados devem ser valores positivos e maiores que zero." });
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
        return res.status(400).json({ error: "Os valores fornecidos não formam um triângulo." });
    }

    let tipoTriangulo;
    if (a === b && b === c) {
        tipoTriangulo = "EQUILÁTERO";
    } else if (a === b || b === c || a === c) {
        tipoTriangulo = "ISÓSCELES";
    } else {
        tipoTriangulo = "ESCALENO";
    }

    res.json({ tipoTriangulo });
});

app.post('/mercadoria', (req, res) => {
    const { nome, preco } = req.body;

    if (!nome || !preco || preco <= 0) {
        return res.status(400).json({ error: "Nome da mercadoria e preço válido são obrigatórios." });
    }

    let percentualAumento = preco < 1000 ? 5 : 7;
    const aumento = (preco * percentualAumento) / 100;
    const novoPreco = preco + aumento;

    res.json({ preco, percentualAumento, novoPreco});
});

app.post('/maiornumero', (req, res) => {
    const { numeros } = req.body;

    if (!Array.isArray(numeros) || numeros.length !== 6) {
        return res.status(400).json({
            error: "Você deve enviar exatamente 6 números inteiros em um array.",
        });
    }

    if (!numeros.every(Number.isInteger)) {
        return res.status(400).json({
            error: "Todos os valores devem ser números inteiros.",
        });
    }

    const maiorNumero = Math.max(...numeros);

    res.json({
        numeros,
        maiorNumero,
    });
});

app.post('/ordenarnumeros', (req, res) => {
    const { numeros } = req.body;

    if (!Array.isArray(numeros) || numeros.length !== 5) {
        return res.status(400).json({
            error: "Você deve enviar exatamente 5 números inteiros em um array.",
        });
    }

    if (!numeros.every(Number.isInteger)) {
        return res.status(400).json({
            error: "Todos os valores devem ser números inteiros.",
        });
    }

    const numerosOrdenados = [...numeros].sort((a, b) => a - b);

    res.json({
        numerosOrdenados
    });
});

app.post('/compararnumeros', (req, res) => {
    const { numero1, numero2 } = req.body;

    if (!Number.isInteger(numero1) || !Number.isInteger(numero2)) {
        return res.status(400).json({
            error: "Ambos os valores devem ser números inteiros.",
        });
    }

    let maior = numero1 > numero2 ? numero1 : numero2;
    let menor = numero1 < numero2 ? numero1 : numero2;

    res.json({
        maior,
        menor,
    });
});

app.post('/reajustesalarial', (req, res) => {
    const { salarioAtual } = req.body;

    if (typeof salarioAtual !== 'number' || salarioAtual <= 0) {
        return res.status(400).json({
            error: "O salário atual deve ser um número positivo.",
        });
    }

    let percentualAumento = 0;

    if (salarioAtual >= 1500 && salarioAtual < 1750) {
        percentualAumento = 15;
    } else if (salarioAtual >= 1750 && salarioAtual < 2000) {
        percentualAumento = 12;
    } else if (salarioAtual >= 2000 && salarioAtual < 3000) {
        percentualAumento = 9;
    } else if (salarioAtual >= 3000) {
        percentualAumento = 6;
    }

    const aumento = (salarioAtual * percentualAumento) / 100;
    const novoSalario = salarioAtual + aumento;

    res.json({ novoSalario});
});

app.post('/situacaoaluno', (req, res) => {
    const { nota1, nota2, nota3 } = req.body;

    if (
        typeof nota1 !== 'number' || nota1 < 0 || nota1 > 10 ||
        typeof nota2 !== 'number' || nota2 < 0 || nota2 > 10 ||
        typeof nota3 !== 'number' || nota3 < 0 || nota3 > 10
    ) {
        return res.status(400).json({
            error: "Todas as notas devem ser números entre 0 e 10.",
        });
    }

    const media = (nota1 + nota2 + nota3) / 3;

    let situacao;
    if (media >= 6) {
        situacao = "Aprovado";
    } else if (media >= 4) {
        situacao = "colocado em recuperação";
    } else {
        situacao = "Reprovado";
    }

    res.json({
        situacao
    });
});

app.post('/calculardesconto', (req, res) => {
    const { tipoPeca, preco } = req.body;

    if (typeof preco !== 'number' || preco <= 0) {
        return res.status(400).json({
            error: "O preço deve ser um número positivo.",
        });
    }

    if (!['camisa', 'bermuda', 'calca'].includes(tipoPeca.toLowerCase())) {
        return res.status(400).json({
            error: "O tipo de peça deve ser 'camisa', 'bermuda' ou 'calca'.",
        });
    }

    const descontos = {
        camisa: 0.2,
        bermuda: 0.1,
        calca: 0.15,
    };

    const desconto = preco * descontos[tipoPeca.toLowerCase()];
    const precoFinal = preco - desconto;

    res.json({ precoFinal });
});


app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});
