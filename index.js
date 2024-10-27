//Digite o nome
let nome = "Fulano";
//Digite a experiencia
var experiencia = 4076;

let nivel = "";

if (experiencia <= 1000)
    {nivel = "Ferro"};

if (1001 <= experiencia && experiencia <= 2000)
    {nivel = "Bronze"};

if (2001 <= experiencia && experiencia <= 5000)
    {nivel = "Prata"};

if (5001 <= experiencia && experiencia <= 7000)
    {nivel = "Ouro"};

if (7001 <= experiencia && experiencia <= 8000)
    {nivel = "Platina"};

if (8001 <= experiencia && experiencia <= 9000)
    {nivel = "Ascendente"};

if (9001 <= experiencia && experiencia <= 10000)
    {nivel = "Imortal"};

if (experiencia >= 10001)
    {nivel = "Radiante"};

console.log("O Herói de nome " + nome + " está no nível de " + nivel);

