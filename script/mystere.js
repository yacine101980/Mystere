function show(element) {
    element.style.display = '';
}

function hide(element) {
    element.style.display = 'none';
}

function new_game() { // fonction qui montre l'écran de sélection du mode de jeu
    show(game_selection);
    hide(game1);
    hide(game2);
    message1.innerText = "";
}

function start_player_guess_game() {
    computer_number = Math.floor(Math.random() * (100 - 1)) + 1;
    hide(game_selection);
    hide(restart_button1);
    show(game1);
}

function try_event() {
        let my_number = parseInt(player_input.value, 10);
        if ( my_number<computer_number ) {
            message1.innerText = "Non, c'est plus grand.";
        } else if ( my_number>computer_number ) {
            message1.innerText = "Non, c'est plus petit.";
        } else if ( my_number==computer_number ) {
            message1.innerText = "Bravo, vous avez trouvé !";
            show(restart_button1);
        }
        player_input.value = "";
}

min = 0;
max = 100;
function start_computer_guess_game() {
    hide(game_selection);
    hide(restart_button2);
    show(game2);
    show(smaller_button);
    show(bigger_button);
    show(found_button);
    message2.innerText = "Est-ce que c'est " + Math.floor((min + max) / 2) + " ?"
}

function smaller_event() {
    max = Math.floor((min + max) / 2);
    start_computer_guess_game();
}

function bigger_event() {
    min = Math.floor((min + max) / 2);
    start_computer_guess_game();
}

function found_event() {
    hide(smaller_button);
    hide(bigger_button);
    hide(found_button);
    min = 0;
    max = 100;
    show(restart_button2);
}



