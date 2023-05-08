//1 -> Escreva na tela todos os números pares de 0 a 100 

for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

//2 -> Criar um algoritmo que percorre um array de números qualquer e retorna a soma total desses números ex: [2, 4, 6, 8] -> Soma: 2 + 4 + 6 + 8 = 20

const array=[2,4,6,8];
let soma=0;

for(let i=0; i<array.length;i++){
    soma=soma+(array[i]);   
}

    console.log(soma);

//3 -> Crie uma função que remova todos os números negativos de um array ex: [-1, 1, -2, 2, -3, 3] -> [1, 2, 3]



const array2 = [-1, 1, -2, 2, -3, 3];

function removeNegativos(array2) {
    return array2.filter(numero => numero >= 0);
  }

const numerosSemNegativos = removeNegativos(array2);
console.log(numerosSemNegativos); 


//Percorra um array de numeros qualquer.. e crie um novo array com todos os numeros do primeiro multiplicado por 2 ex: [1, 2, 3, 4, 5] -> [2, 4, 6, 8, 10]

const array3 = [1, 2, 3, 4, 5];

function multiplica(array3) {
    const resultado = [];
    for (let i = 0; i < array3.length; i++) {
      resultado.push(array3[i] * 2);
    }
    return resultado;
  }

const numerosMultiplicados = multiplica(array3);
console.log(numerosMultiplicados);







