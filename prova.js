/*1.Desafio: Conversor de Horários
Ao efetuar a compra de sua refeição no Ifood o sistema, após confirmação do pagamento, envia seu pedido ao restaurante, que ao aceitá-lo registra esse momento e lhe retorna o horário de previsão da sua entrega. Esse recurso, apesar de interessante começou a gerar uma quantidade significativa de reclamações na Central de Atendimento, pois os clientes ficaram um pouco confusos com os horários indicados para a entrega. Ao investigar o problema, o time de desenvolvimento entendeu que os horários apresentados estavam no formato de 12hs (AM/PM), sendo que o correto seria utilizar o formato de 24hs. Sua missão: criar um algoritmo capaz de fazer essa conversão! Para isso, crie uma função que receba um horário qualquer, respeitando o formato 12hs (06:15:25PM) e retorne o equivalente (18:15:25).*/

function converterHorario(horario) {
    
    const partes = horario.match(/(\d+):(\d+):(\d+)([APM]+M)/);
    let hora = parseInt(partes[1], 10);
    const minuto = parseInt(partes[2], 10);
    const segundo = parseInt(partes[3], 10);
    const periodo = partes[4].toUpperCase();
  
    if (periodo === 'PM' && hora !== 12) {
      hora += 12;
    } else if (periodo === 'AM' && hora === 12) {
      hora = 0;
    }
  
    const horario24hs = `${hora.toString().padStart(2, '0')}:${minuto.toString().padStart(2, '0')}:${segundo.toString().padStart(2, '0')}`;
    
    return horario24hs;
  }
  
  const horario12hs = "06:15:25PM";
  const horario24hs = converterHorario(horario12hs);
  console.log(horario24hs);
  
  //2.Desafio: Quantidade de Palavras
  function contarPalavrasCamelCase(frase) {
    
    let contadorPalavras = 1;
  
    for (let i = 0; i < frase.length; i++) {
      
      if (frase.charAt(i) === frase.charAt(i).toUpperCase()) {
       
        contadorPalavras++;
      }
    }
  
    return contadorPalavras;
  }
  
  const frase = "façaMercadoNoIfoodEntregamosTudoOQueVocêPrecisaNaPortaDaSuaCasa";
  const quantidadePalavras = contarPalavrasCamelCase(frase);
  console.log("Quantidade de palavras:", quantidadePalavras);

  //3.Desafio: Número Solitário
  function encontrarNumerosSolitarios(array) {
    const contagem = {}; 
  
    for (const numero of array) {
      if (contagem[numero]) {
        contagem[numero]++;
      } else {
        contagem[numero] = 1;
      }
    }
  
    const numerosSolitarios = [];
    for (const numero in contagem) {
      if (contagem[numero] === 1) {
        numerosSolitarios.push(Number(numero)); 
      }
    }
  
    return numerosSolitarios;
  }
  
  const numeros = [12, 17, 15, 19, 22, 17, 19, 12];
  const solitarios = encontrarNumerosSolitarios(numeros);
  console.log("Números solitários:", solitarios); 

/*
4.Qual é a saída do código a seguir?
let n = 4;
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
        console.log(j);
    }
}
a. Não imprime nada

b. 1 2 3

c. 1 1 2 1 2 3 1 2 3

d. 1 2 3 4

e. 1 1 2 1 2 3 1 2 3 4

Resposta Letra (e) :1121231234  
*/


/*
5.Qual é o resultado da expressão booleana abaixo?
!(true && false) || (false && true)
a. true

b. null

c. false

d. NaN

e. undefined

Resposta: resultado da expressão booleana é true.
*/

/*
6.Qual o valor da saída do código abaixo?
let x = 0;
let a = 0;
let b = -5;
if (a > 0) {
    if (b < 0) {
        x = x + 5;
    } else if (a > 5) {
        x = x + 4;
    } else {
        x = x + 3;
    }
} else {
    x = x + 2;
}
console.log(x);
a) 0

b) 2

c) 3

d) 4

Resposta: (b) 2
*/
  
