$(document).ready(function () {
    let cpt = 0;
    let minuterie = new Date();
    let tmr = null;
    let CompteurCarte = 0;
    let Memoire1 = ""; //Prend en mémoire la première carte tournée
    let Memoire2 = ""; //Prend en mémoire la deuxième carte tournée
    let ColonneTempo = 0;
    let LigneTempo = 0;
    let CompteurPaireTrouvée = 0;
    let RecordCoups = 0;

    $('.colonne').mouseenter(function () {
        $('.colonne').addClass('AnimationHover');
    });

    $('.CarteDos').click(function () {

        let ligne = this.dataset.ligne;
        let colonne = this.dataset.colonne;

        CompteurCarte++;

        if (CompteurCarte == 2) {
            cpt++;
            document.getElementById("Coups").innerHTML = coups + cpt;
        }

        if (CompteurCarte == 1) {
            ColonneTempo = this.dataset.colonne;
            LigneTempo = this.dataset.ligne;
        }

        if (tableau2D[ligne][colonne] == 1) {
            $('[data-ligne="' + ligne + '"][data-colonne="' + colonne + '"]').addClass('Renverser');
            $('[data-ligne="' + ligne + '"][data-colonne="' + colonne + '"]').removeClass('CarteDos');
            $('[data-ligne="' + ligne + '"][data-colonne="' + colonne + '"]').addClass('boussole');
            if (CompteurCarte == 1) {
                Memoire1 = "boussole"
            }
            else {
                Memoire2 = "boussole"
            }
        }
        else if (tableau2D[ligne][colonne] == 2) {
            $('[data-ligne="' + ligne + '"][data-colonne="' + colonne + '"]').addClass('Renverser');
            $('[data-ligne="' + ligne + '"][data-colonne="' + colonne + '"]').removeClass('CarteDos');
            $('[data-ligne="' + ligne + '"][data-colonne="' + colonne + '"]').addClass('cadran');
            if (CompteurCarte == 1) {
                Memoire1 = "cadran"
            }
            else {
                Memoire2 = "cadran"
            }
        }
        else if (tableau2D[ligne][colonne] == 3) {
            $('[data-ligne="' + ligne + '"][data-colonne="' + colonne + '"]').addClass('Renverser');
            $('[data-ligne="' + ligne + '"][data-colonne="' + colonne + '"]').removeClass('CarteDos');
            $('[data-ligne="' + ligne + '"][data-colonne="' + colonne + '"]').addClass('casque-ecoute');
            if (CompteurCarte == 1) {
                Memoire1 = "casque-ecoute"
            }
            else {
                Memoire2 = "casque-ecoute"
            }
        }
        else if (tableau2D[ligne][colonne] == 4) {
            $('[data-ligne="' + ligne + '"][data-colonne="' + colonne + '"]').addClass('Renverser');
            $('[data-ligne="' + ligne + '"][data-colonne="' + colonne + '"]').removeClass('CarteDos');
            $('[data-ligne="' + ligne + '"][data-colonne="' + colonne + '"]').addClass('chapeau');
            if (CompteurCarte == 1) {
                Memoire1 = "chapeau"
            }
            else {
                Memoire2 = "chapeau"
            }
        }
        else if (tableau2D[ligne][colonne] == 5) {
            $('[data-ligne="' + ligne + '"][data-colonne="' + colonne + '"]').addClass('Renverser');
            $('[data-ligne="' + ligne + '"][data-colonne="' + colonne + '"]').removeClass('CarteDos');
            $('[data-ligne="' + ligne + '"][data-colonne="' + colonne + '"]').addClass('chat');
            if (CompteurCarte == 1) {
                Memoire1 = "chat"
            }
            else {
                Memoire2 = "chat"
            }
        }
        else if (tableau2D[ligne][colonne] == 6) {
            $('[data-ligne="' + ligne + '"][data-colonne="' + colonne + '"]').addClass('Renverser');
            $('[data-ligne="' + ligne + '"][data-colonne="' + colonne + '"]').removeClass('CarteDos');
            $('[data-ligne="' + ligne + '"][data-colonne="' + colonne + '"]').addClass('lampe');
            if (CompteurCarte == 1) {
                Memoire1 = "lampe"
            }
            else {
                Memoire2 = "lampe"
            }
        }
        else if (tableau2D[ligne][colonne] == 7) {
            $('[data-ligne="' + ligne + '"][data-colonne="' + colonne + '"]').addClass('Renverser');
            $('[data-ligne="' + ligne + '"][data-colonne="' + colonne + '"]').removeClass('CarteDos');
            $('[data-ligne="' + ligne + '"][data-colonne="' + colonne + '"]').addClass('loupe');
            if (CompteurCarte == 1) {
                Memoire1 = "loupe"
            }
            else {
                Memoire2 = "loupe"
            }
        }
        else if (tableau2D[ligne][colonne] == 8) {
            $('[data-ligne="' + ligne + '"][data-colonne="' + colonne + '"]').addClass('Renverser');
            $('[data-ligne="' + ligne + '"][data-colonne="' + colonne + '"]').removeClass('CarteDos');
            $('[data-ligne="' + ligne + '"][data-colonne="' + colonne + '"]').addClass('parapluie');
            if (CompteurCarte == 1) {
                Memoire1 = "parapluie"
            }
            else {
                Memoire2 = "parapluie"
            }
        }

        $('[data-ligne="' + ligne + '"][data-colonne="' + colonne + '"]').removeClass('Renverser2');
        $('[data-ligne="' + ligne + '"][data-colonne="' + colonne + '"]').addClass('Renverser');

        if (CompteurCarte == 2 && Memoire1 == Memoire2) { //deuxième carte tournée pareille
            CompteurCarte = 0;
            CompteurPaireTrouvée++;

            // Vérifier si le joueur a gagné.
            if (CompteurPaireTrouvée >= 8) {
                $('.PartieGagnéeInvisible').addClass('PartieGagnéeVert');
                $('.PartieGagnéeInvisible').removeClass('PartieGagnéeInvisible');
                document.getElementById("MTemps").innerHTML = minuterie.getSeconds() - 1 + "s";
                clearInterval(tmr);
                minuterie.setMinutes(0);
                minuterie.setSeconds(0);

                // Changer le record de coups.
                if (RecordCoups == 0) {
                    document.getElementById("Record").innerHTML = coups + cpt;
                    RecordCoups = coups + cpt;
                }
                else if (RecordCoups < coups + cpt)
                    document.getElementById("Record").innerHTML = RecordCoups;
                else if (RecordCoups > coups + cpt) {
                    document.getElementById("Record").innerHTML = coups + cpt;
                    RecordCoups = coups + cpt;
                }
            }
        }
        else if (CompteurCarte == 2 && Memoire1 != Memoire2) { // deuxième carte tournée différente  
            document.getElementById("Erreurs").innerHTML++;
            CompteurCarte = 0;
            setTimeout(function () {
                $('[data-ligne="' + ligne + '"][data-colonne="' + colonne + '"]').removeClass('Renverser');
                $('[data-ligne="' + ligne + '"][data-colonne="' + colonne + '"]').addClass('Renverser2');
                $('[data-ligne="' + ligne + '"][data-colonne="' + colonne + '"]').removeClass(Memoire2);
                $('[data-ligne="' + ligne + '"][data-colonne="' + colonne + '"]').addClass('CarteDos');
                $('[data-ligne="' + LigneTempo + '"][data-colonne="' + ColonneTempo + '"]').removeClass('Renverser');
                $('[data-ligne="' + LigneTempo + '"][data-colonne="' + ColonneTempo + '"]').addClass('Renverser2');
                $('[data-ligne="' + LigneTempo + '"][data-colonne="' + ColonneTempo + '"]').removeClass(Memoire1);
                $('[data-ligne="' + LigneTempo + '"][data-colonne="' + ColonneTempo + '"]').addClass('CarteDos');
            }, 1000);
        }
    });

    //------------------------------------
    //Auteur: Thierry Bertrand, Michael Meilleur
    //Description: Minuterie
    //Date: 2022-04-19
    //-------------------------------------
    function AfficherTemps() {
        if (minuterie.getMinutes() < 10 && minuterie.getSeconds() < 10) {
            $('#minuterie').html("0" + minuterie.getMinutes() + ":0" + minuterie.getSeconds());
            minuterie.setSeconds(minuterie.getSeconds() + 1); // Augmente le temps.
        }
        else if (minuterie.getMinutes() < 10 && minuterie.getSeconds() >= 10) {
            $('#minuterie').html("0" + minuterie.getMinutes() + ":" + minuterie.getSeconds());
            minuterie.setSeconds(minuterie.getSeconds() + 1); // Augmente le temps.
        }
        else {
            $('#minuterie').html(minuterie.getMinutes() + ":" + minuterie.getSeconds());
            minuterie.setSeconds(minuterie.getSeconds() + 1); // Augmente le temps.
        }
        if (minuterie.getMinutes() == 0 && minuterie.getSeconds() == 0) {
            clearInterval(tmr);
        }
    }

    $('#Commencer').click(function () {
        cpt = 0;
        document.getElementById("Coups").innerHTML = 0;
        document.getElementById("MTemps").innerHTML = minuterie.getSeconds() - 1 + "s";
        document.getElementById("Erreurs").innerHTML = 0;
        clearInterval(tmr);
        minuterie.setMinutes(0);
        minuterie.setSeconds(0);
        $('#Commencer').html('Recommencer');
        tmr = setInterval(AfficherTemps, 1000);
        $('.colonne').removeClass('chat chapeau casque-ecoute parapluie loupe lampe cadran boussole');
        $('.colonne').addClass('CarteDos');
        $('#Gagner').removeClass('PartieGagnéeVert');
        $('#Gagner').addClass('PartieGagnéeInvisible');
        RemplirTableau2D();
        CompteurPaireTrouvée = 0;
        $('[data-ligne="' + ligne + '"][data-colonne="' + colonne + '"]').removeClass('Renverser2');
        $('[data-ligne="' + ligne + '"][data-colonne="' + colonne + '"]').addClass('Renverser');
    })

    $('#Solutionner').click(function () {
        clearInterval(tmr);
        minuterie.setMinutes(0);
        minuterie.setSeconds(0);
        for (var ligne = 0; ligne < LIGNES; ligne++) {
            for (var colonne = 0; colonne < COLONNES; colonne++) {
                if (tableau2D[ligne][colonne] == 1) {
                    $('[data-ligne="' + ligne + '"][data-colonne="' + colonne + '"]').addClass('Renverser');
                    $('[data-ligne="' + ligne + '"][data-colonne="' + colonne + '"]').removeClass('CarteDos');
                    $('[data-ligne="' + ligne + '"][data-colonne="' + colonne + '"]').addClass('boussole');
                }
                else if (tableau2D[ligne][colonne] == 2) {
                    $('[data-ligne="' + ligne + '"][data-colonne="' + colonne + '"]').addClass('Renverser');
                    $('[data-ligne="' + ligne + '"][data-colonne="' + colonne + '"]').removeClass('CarteDos');
                    $('[data-ligne="' + ligne + '"][data-colonne="' + colonne + '"]').addClass('cadran');
                }
                else if (tableau2D[ligne][colonne] == 3) {
                    $('[data-ligne="' + ligne + '"][data-colonne="' + colonne + '"]').addClass('Renverser');
                    $('[data-ligne="' + ligne + '"][data-colonne="' + colonne + '"]').removeClass('CarteDos');
                    $('[data-ligne="' + ligne + '"][data-colonne="' + colonne + '"]').addClass('casque-ecoute');
                }
                else if (tableau2D[ligne][colonne] == 4) {
                    $('[data-ligne="' + ligne + '"][data-colonne="' + colonne + '"]').addClass('Renverser');
                    $('[data-ligne="' + ligne + '"][data-colonne="' + colonne + '"]').removeClass('CarteDos');
                    $('[data-ligne="' + ligne + '"][data-colonne="' + colonne + '"]').addClass('chapeau');
                }
                else if (tableau2D[ligne][colonne] == 5) {
                    $('[data-ligne="' + ligne + '"][data-colonne="' + colonne + '"]').addClass('Renverser');
                    $('[data-ligne="' + ligne + '"][data-colonne="' + colonne + '"]').removeClass('CarteDos');
                    $('[data-ligne="' + ligne + '"][data-colonne="' + colonne + '"]').addClass('chat');
                }
                else if (tableau2D[ligne][colonne] == 6) {
                    $('[data-ligne="' + ligne + '"][data-colonne="' + colonne + '"]').addClass('Renverser');
                    $('[data-ligne="' + ligne + '"][data-colonne="' + colonne + '"]').removeClass('CarteDos');
                    $('[data-ligne="' + ligne + '"][data-colonne="' + colonne + '"]').addClass('lampe');
                }
                else if (tableau2D[ligne][colonne] == 7) {
                    $('[data-ligne="' + ligne + '"][data-colonne="' + colonne + '"]').addClass('Renverser');
                    $('[data-ligne="' + ligne + '"][data-colonne="' + colonne + '"]').removeClass('CarteDos');
                    $('[data-ligne="' + ligne + '"][data-colonne="' + colonne + '"]').addClass('loupe');
                }
                else if (tableau2D[ligne][colonne] == 8) {
                    $('[data-ligne="' + ligne + '"][data-colonne="' + colonne + '"]').addClass('Renverser');
                    $('[data-ligne="' + ligne + '"][data-colonne="' + colonne + '"]').removeClass('CarteDos');
                    $('[data-ligne="' + ligne + '"][data-colonne="' + colonne + '"]').addClass('parapluie');
                }
            }
        }
    })
})

// Constantes
const LIGNES = 4;
const COLONNES = 4;

// Variables globales.
let tableau2D = [ // 4 x 4
    [],
    [],
    [],
    []
];

//------------------------------------
//Auteur: Thierry Bertrand, Michael Meilleur
//Description: Remplir le tableau avec des chiffres de 1 à 8.
//Date: 2022-04-20
//-------------------------------------
function RemplirTableau2D() {
    let chiffre = 1;
    for (var ligne = 0; ligne < 2; ligne++) {
        for (var colonne = 0; colonne < COLONNES; colonne++) {
            tableau2D[ligne][colonne] = chiffre;
            chiffre++;
        }
    }
    chiffre = 1;
    for (var ligne = 2; ligne < LIGNES; ligne++) {
        for (var colonne = 0; colonne < COLONNES; colonne++) {
            tableau2D[ligne][colonne] = chiffre;
            chiffre++;
        }
    }

    InitialiserTableau();
}



