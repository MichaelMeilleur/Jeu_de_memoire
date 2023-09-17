//------------------------------------
//Auteur: Thierry Bertrand, Michael Meilleur
//Description:Tirer au harsard un chiffre entre min max inclusivement.
//Date: 2022-04-05
//-------------------------------------
function ChoisirHasard(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//------------------------------------
//Auteur: Thierry Bertrand, Michael Meilleur
//Description: Bouger les chiffres dans le tableau2D.
//Date: 2022-04-21
//-------------------------------------
function Permuter(Ax, Ay, Bx, By) {
    let Temporaire = 0;

    Temporaire = tableau2D[Ax][Ay];
    tableau2D[Ax][Ay] = tableau2D[Bx][By];
    tableau2D[Bx][By] = Temporaire;
}

//------------------------------------
//Auteur: Thierry Bertrand, Michael Meilleur
//Description: Mélanger le tableau en partant le jeu.
//Date: 2022-04-21
//-------------------------------------
function InitialiserTableau() {
    let ligne = 3;
    let colonne = 3;
    let Random = 0;

    for (var Cpt = 0; Cpt <= 200; Cpt++) {
        Random = ChoisirHasard(1, 4);
        switch (Random) {
            case 1:
                if (ligne < 3) {
                    Permuter(ligne, colonne, ligne + 1, colonne);
                    ligne += 1;
                }
                break;
            case 2:
                if (ligne > 0) {
                    Permuter(ligne, colonne, ligne - 1, colonne);
                    ligne -= 1;
                }
                break;
            case 3:
                if (colonne < 3) {
                    Permuter(ligne, colonne, ligne, colonne + 1);
                    colonne += 1;
                }
                break;
            case 4:
                if (colonne > 0) {
                    Permuter(ligne, colonne, ligne, colonne - 1);
                    colonne -= 1;
                }
                break;
        }
    }
}