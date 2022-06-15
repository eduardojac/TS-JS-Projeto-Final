// Aplicação Salada de Frutas
let frutas = []
let quantidades = []
let calorias = 0
let carboidratos = 0
let proteinas = 0
let gorduras = 0

async function saladaDeFrutas() {
    for (let i = 0; i < 3; i++) {
        let fruta = prompt('Digite a fruta ' + (i + 1) + ': ')
        let quantidade = parseFloat(prompt('Digite a quantidade de ' + fruta + ' a ser adicionada'))
        frutas.push(fruta)
        quantidades.push(quantidade)
    }

    for (let i = 0; i < frutas.length; i++) {
        const response = await fetch(`https://www.fruityvice.com/api/fruit/${frutas[i]}`)
        const data = await response.json()
        calorias += data.nutritions.calories * quantidades[i]
        carboidratos += data.nutritions.carbohydrates * quantidades[i]
        proteinas += data.nutritions.protein * quantidades[i]
        gorduras += data.nutritions.fat * quantidades[i]
    }
    console.log("Sua salada de frutas tem um total de: \n" +
        calorias.toFixed(1) + " calorias\n" +
        carboidratos.toFixed(1) + " carboidratos\n" +
        proteinas.toFixed(1) + " proteínas\n" +
        gorduras.toFixed(1) + " gorduras")

}

saladaDeFrutas()

