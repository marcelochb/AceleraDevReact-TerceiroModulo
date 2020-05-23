'use strict'
// const prompt = require('prompt-sync')();

const fibonacci = (qtd = 350) => {
    const numeros = Array.from(Array(qtd + 1).keys());
    const result = [0, 1];
    let index = 1;
    numeros.forEach(item => {
        if ((result[index - 1] + result[index]) === item) {
            result.push(item);
            index++;
        }
    })
    return result;
}

const isFibonnaci = (num) => {
    const result = fibonacci(num + 1);
    return result.includes(num);
}

module.exports = {
    fibonacci,
    isFibonnaci
}

// const menu = () => {
//     console.log(`
//     1 - Lista Fibonnaci
//     2 - Verifica numero
//     0 - Sair
//     `)
// }

// let opcao;
// while (opcao !== '0') {
//     menu()
//     opcao = prompt("Escolha a opção?")
//     if (opcao === '1') {
//         console.log(`
//         ${fibonacci()}
//         `)
//     };
//     if (opcao === '2') {
//         const numero = prompt("Digite um numero?")
//         console.log(`
//         ${isFibonnaci(Number(numero))
//                 ? 'o numero é fibonnaci'
//                 : 'o numero não é fibonnaci'}

//         `)
//     }
// }



