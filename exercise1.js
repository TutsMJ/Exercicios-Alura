 alert("Programa de milhas");
    let desconto = 0;
    let milhas = prompt("Para verificar a quantidade de desconto que você pode obter, digite a quantidade de milhas que você possui:");
    console.log(milhas)
    if (milhas <= 5000) {
        desconto = 0;
        alert("Com sua quantidade de milhas, atualmente você não possui descontos");
    }
        else if (5000 < milhas && milhas <= 30000) {
            desconto = 10;
            alert("Com sua quantidade de milhas, atualmente você possui" + desconto + "% de desconto");
        //Ao utilizar apenas else, não se deve incluir uma condição dentro de parênteses
        //Caso seja necessário incluir uma condição, é preciso utilizar else if
        }
            else if (milhas > 30000) {
                desconto = 20;
                alert("Com sua quantidade de milhas, atualmente você possui " + desconto + "% de desconto");
            }   
    console.log(desconto)
