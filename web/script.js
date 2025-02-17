const titulo = document.getElementById('titulo');
fetch('http://localhost:3000/')
    .then(resp => resp.json())
    .then(resp => titulo.innerHTML = resp);

function desconto() {
    let resultado0 = document.getElementById('resultado0');
    let dados = {
        preco: Number(document.getElementById('preco').value)
    }
    fetch('http://localhost:3000/desconto', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
    })
        .then(resp => resp.json())
        .then(resp => {
            resultado0.innerHTML = `Preço com desconto: ${resp.precoComDesconto.toFixed(2)}`
        });
}

function inss() {
    let resultado1 = document.getElementById('resultado1');
    let dados = {
        salario: Number(document.getElementById('salario').value)
    }
    fetch('http://localhost:3000/inss', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
    })
        .then(resp => resp.json())
        .then(resp => {
            resultado1.innerHTML = `Salário final: ${resp.salarioComDesconto.toFixed(2)}`
        });
}

function triangulo() {
    let resultado2 = document.getElementById('resultado2');
    let dados = {
        a: Number(document.getElementById('lado1').value),
        b: Number(document.getElementById('lado2').value),
        c: Number(document.getElementById('lado3').value)
    }
    fetch('http://localhost:3000/triangulo', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
    })
        .then(resp => resp.json())
        .then(resp => {
            resultado2.innerHTML = `Tipo de triângulo: ${resp.tipoTriangulo}`
        });
}

function reajustar() {
    let resultado3 = document.getElementById('resultado3');
    let dados = {
        preco: Number(document.getElementById('preco1').value),
        nome: (document.getElementById('nome').value)
    }
    fetch('http://localhost:3000/mercadoria', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
    })
        .then(resp => resp.json())
        .then(resp => {
            resultado3.innerHTML = `O novo preço será: ${resp.novoPreco.toFixed(2)}`
        });
}

function encontrarMaior() {
    let resultado4 = document.getElementById('resultado4');
    let dados = {
        numeros: [
            Number(document.getElementById('num1').value),
            Number(document.getElementById('num2').value),
            Number(document.getElementById('num3').value),
            Number(document.getElementById('num4').value),
            Number(document.getElementById('num5').value),
            Number(document.getElementById('num6').value)
        ]
    }
    fetch('http://localhost:3000/maiornumero', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
    })
        .then(resp => resp.json())
        .then(resp => {
            resultado4.innerHTML = `O maio número é ${resp.maiorNumero}`
        });
}

function ordenarNumeros() {
    let resultado5 = document.getElementById('resultado5');
    let dados = {
        numeros: [
            Number(document.getElementById('num7').value),
            Number(document.getElementById('num8').value),
            Number(document.getElementById('num9').value),
            Number(document.getElementById('num10').value),
            Number(document.getElementById('num11').value)
        ]
    }
    fetch('http://localhost:3000/ordenarnumeros', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
    })
        .then(resp => resp.json())
        .then(resp => {
            resultado5.innerHTML = `Em ordem, os números ficam: ${resp.numerosOrdenados}`
        });
}

function compararNumeros() {
    let resultado6 = document.getElementById('resultado6');
    let dados = {
        numero1: Number(document.getElementById('num12').value),
        numero2: Number(document.getElementById('num13').value)
    }
    fetch('http://localhost:3000/compararnumeros', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
    })
        .then(resp => resp.json())
        .then(resp => {
            resultado6.innerHTML = `O maior é: ${resp.maior}<br>
            O menor é: ${resp.menor}`
        });
}

function calcularReajuste() {
    let resultado7 = document.getElementById('resultado7');
    let dados = {
        salarioAtual: Number(document.getElementById('salario1').value)
    }
    fetch('http://localhost:3000/reajustesalarial', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
    })
        .then(resp => resp.json())
        .then(resp => {
            resultado7.innerHTML = `O salário atual é ${resp.novoSalario.toFixed(2)}`
        });
}

function calcularMedia() {
    let resultado8 = document.getElementById('resultado8');
    let dados = {
        nota1: Number(document.getElementById('nota1').value),
        nota2: Number(document.getElementById('nota2').value),
        nota3: Number(document.getElementById('nota3').value)
    }
    fetch('http://localhost:3000/situacaoaluno', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
    })
        .then(resp => resp.json())
        .then(resp => {
            resultado8.innerHTML = `O aluno foi ${resp.situacao}`
        });
}

function calcularDesconto() {
    let resultado9 = document.getElementById('resultado9');
    let dados = {
        tipoPeca: (document.getElementById('produto').value),
        preco: Number(document.getElementById('preco3').value)
    }
    fetch('http://localhost:3000/calculardesconto', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
    })
        .then(resp => resp.json())
        .then(resp => {
            resultado9.innerHTML = `O preço final é ${resp.precoFinal}`
        });
}