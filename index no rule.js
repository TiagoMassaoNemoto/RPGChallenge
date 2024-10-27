//Digite o nome
let nome = "Fulano";
//Digite a experiencia
var experiencia = 4076;

var rank = nivel(experiencia);

console.log("O Herói de nome " + nome + " está no nível de " + rank);

function nivel (XP)
{
    var rank = "";

    if (XP <= 1000)
        {rank = "Ferro"};
    
    if (1001 <= XP && XP <= 2000)
        {rank = "Bronze"};
    
    if (2001 <= XP && XP <= 5000)
        {rank = "Prata"};
    
    if (5001 <= XP && XP <= 7000)
        {rank = "Ouro"};
    
    if (7001 <= XP && XP <= 8000)
        {rank = "Platina"};
    
    if (8001 <= XP && XP <= 9000)
        {rank = "Ascendente"};
    
    if (9001 <= XP && XP <= 10000)
        {rank = "Imortal"};
    
    if (XP >= 10001)
        {rank = "Radiante"};

    console.log(rank)
    return rank;
}






