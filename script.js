let [computer_score,user_score]=[0,0];
let result_ref = document.getElementById("result");
let choices_object = {
    'pedra' : {
        'pedra' : 'draw',
        'tesoura' : 'win',
        'papel' : 'lose'
    },
    'tesoura' : {
        'pedra' : 'lose',
        'tesoura' : 'draw',
        'papel' : 'win'
    },
    'papel' : {
        'pedra' : 'win',
        'tesoura' : 'lose',
        'papel' : 'draw'
    }

}

function checker(input){
    var choices = ["pedra", "papel", "tesoura"];
    var num = Math.floor(Math.random()*3);

    document.getElementById("comp_choice").innerHTML = 
    ` Escolha do Computador <span> ${choices[num].toUpperCase()} </span>`;

    document.getElementById("user_choice").innerHTML = 
    ` Sua Escolha <span> ${input.toUpperCase()} </span>`;

    let computer_choice = choices[num];

    switch(choices_object[input][computer_choice]){
        case 'win':
            result_ref.style.cssText = "background-color: #cefdce; color: #689f38";
            result_ref.innerHTML = "Voce Venceu";
            user_score++;
            break;
        case 'lose':
            result_ref.style.cssText = "background-color: #ffdde0; color: #d32f2f";
            result_ref.innerHTML = "Voce Perdeu";
            computer_score++;
            break;
        default:
            result_ref.style.cssText = "background-color: #e5e5e5; color: #808080";
            result_ref.innerHTML = "Empate";
            break;
    }

    document.getElementById("computer_score").innerHTML = computer_score;
    document.getElementById("user_score").innerHTML = user_score;
}
