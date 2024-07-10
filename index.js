let oddEven = 0;
let letter = '';

let player = '';

let player1 = document.querySelector('.player1');
let player2 = document.querySelector('.player2');

let Table = [['','',''],['','',''],['','','']];
let TableUni = [];

const cells = document.querySelectorAll('.row');

function disableRegion(target){
    target.removeEventListener('click', handlePlayer);
}  

function handlePlayer(event){
    const cell = event.currentTarget ;
    let cellRegion = cell.dataset.region.split(".");

    if(oddEven%2 == 0){
        letter = 'o';
        player = 'Azul';
        player1.classList.add('player');
        player2.classList.remove('player');

    }else{
        letter = 'x';
        player = 'Vermelho';
        player2.classList.add('player');
        player1.classList.remove('player');
    }
    oddEven++

    cell.textContent = `${letter}`;
    Table[cellRegion[0]][cellRegion[1]] = letter;

    TableUni = Table.flat();

    console.log(player)
    disableRegion(cell);

    if(TableUni.every((element) => element != '')){
        alert("Deu velha!");
        location.reload();
    }
    else{
        if(winRegions().length > 0){
            win();
        }
    }
    
}


function winRegions(){
    const wins = [];
    if((Table[0][0] != '') && (Table[0][0] === Table[0][1]) && (Table[0][0] === Table[0][2]) && (Table[0][1] != '') && (Table[0][1] === Table[0][2])){wins.push(['0.0', '0.1', '0.2'])}
    else if((Table[1][0] != '') && (Table[1][0] === Table[1][1]) && (Table[1][0] === Table[1][2]) &&(Table[1][1] != '') &&  (Table[1][1] === Table[1][2])){wins.push(['1.0', '1.1', '1.2'])}
    else if((Table[2][0] != '') && (Table[2][0] === Table[2][1]) && (Table[2][0] === Table[2][2]) && (Table[2][1] != '') && (Table[2][1] === Table[2][2])){wins.push(['2.0','2.1','2.1'])}

    else if((Table[0][0] != '') && (Table[0][0] === Table[1][0]) && (Table[0][0] === Table[2][0]) && (Table[1][0] != '') && (Table[1][0] === Table[2][0])){wins.push(['0.0','1.0','2.0'])}
    else if((Table[0][1] != '') && (Table[0][1] === Table[1][1]) && (Table[0][1] === Table[2][1]) && (Table[1][1] != '') && (Table[1][1] === Table[2][1])){wins.push(['0.1','1.1','2.1'])}
    else if((Table[0][2] != '') &&(Table[0][2] === Table[1][2]) && (Table[0][2] === Table[2][2]) && (Table[1][2] != '') && (Table[1][2] === Table[2][2])){wins.push(['0.2','1.2', '2.2'])}

    else if((Table[0][0] != '') &&(Table[0][0] === Table[1][1]) && (Table[0][0] === Table[2][2]) && (Table[1][1] != '') && (Table[1][1] === Table[2][2])){wins.push(['0.0', '1.1', '2.2'])}
    else if((Table[0][2] != '') && (Table[0][2] === Table[1][1]) && (Table[0][2] === Table[2][0]) && (Table[1][1] != '') &&(Table[1][1] === Table[2][0])){wins.push(['0.2','1.1','2.0'])}

    return wins
    
}

function win(){
    alert(`Jogador ${player.toUpperCase()} ganhou!`);

    setInterval(() => {
        location.reload();
    },1500)
    
}

const playButton = document.querySelector('#playButton').addEventListener('click', () => {

    cells.forEach((cell) => {
        cell.addEventListener('click', handlePlayer);
    })

})
