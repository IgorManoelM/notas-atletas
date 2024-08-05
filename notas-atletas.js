let atletas =[
    {
        nome:"Cesar Abascal",
        notas:[10, 9.34, 8.42, 10, 7.88]
    },
    {
        nome:"Fernando Puntel",
        notas:[8, 10, 10, 7, 9.33]
    },
    {
        nome:"Daiane Jelinsky",
        notas:[7, 10, 9.5, 9.5,8]
    },
    {
        nome:"Bruno Castro",
        notas:[10, 10, 10,9,9.5]
    }
];
function calcularMediaNotas(notas){
    notas.sort((a,b)=>a-b);
    let notasValidas=notas.slice(1,-1);
    let soma = notasValidas.reduce((acc,nota)=>acc+nota,0);
    let media=soma/notasValidas.length;

    return media;
}

function exibirResultados(atletas){
    atletas.forEach(atleta=>{
        let notasOrdenadas=atleta.notas.slice().sort((a,b)=>a-b);
        let media = calcularMediaNotas(atleta.notas);

        console.log(`Atleta:${atleta.nome}`);
        console.log(`Notas Obtidas:${notasOrdenadas.join(`,`)}`);
        console.log(`Média Válida:${media.toFixed(6)}`);
        console.log();
    })
}
exibirResultados(atletas)