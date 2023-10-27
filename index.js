function calculateWinLossBalance(victory, defeat) {
    let result = victory - defeat;
    return result;
}

function getRank(victory, defeat) {
    const balance = calculateWinLossBalance(victory, defeat);
    let rank = "";

    if (balance < 10) {
        rank = "Ferro";
    }
     
    else if (balance >= 11 && balance <= 20) {
        rank = "Bronze";
    }
     
    else if (balance >= 21 && balance <= 50) {
        rank = "Prata";
    }
     
    else if (balance >= 51 && balance <= 80) {
        rank = "Ouro";
    }
     
    else if (balance >= 81 && balance <= 90) {
        rank = "Diamante";
    }
     
    else if (balance >= 91 && balance <= 100) {
        rank = "Lendário";
    }
     
    else {
        rank = "Imortal";
    }

    return rank;
}

const victories = 90;
const defeats = 10;
const balance = calculateWinLossBalance(victories, defeats);
const heroRank = getRank(victories, defeats);

console.log(`O Herói tem saldo de ${balance} e está no nível de ${heroRank}`);
