var leave = false; // L'utilisateur ne souhaite pas quitter par défaut.

function options() {
    console.log("1 : Lister les contacts\n2 : Ajouter un contact\n0 : Quitter");
}
var contacts = []; // Déclaration du tableau contacts.
var Contact = {
    // Initialisation du prototype des contacts
    init: function (nom, prenom, numero) {
        this.nom = nom;
        this.prenom = prenom;
        this.numero = numero;
    },

    decrire: function () {
        var description = "Nom : " + this.nom + ", prénom : " + this.prenom + ", numéro de téléphone : " + this.numero;
        return description;
    }
};

function lister() {
    console.log("Liste de vos contacts :");
    contacts.forEach(function (contact) {
        console.log(contact.decrire());
    })
}
// Ajout des contacts de base
var contact1 = Object.create(Contact);
contact1.init("Féracin", "Zoé", "0491877154");

var contact2 = Object.create(Contact);
contact2.init("Hage", "Rosalie", "0470326941");

contacts.push(contact1);
contacts.push(contact2);

console.log("Bienvenue dans votre gestionnaire de contacts !");
while (!leave) {
    console.log("Choisissez une action :");
    options();
    var choix = Number(prompt("Choisissez une option :"));
    switch (choix) {
        case 1:
            console.clear();
            lister();
            break;
        case 2:
            console.clear();
            console.log("Suivez les instructions à l'écran")
            var nouveauContact = Object.create(Contact);
            nouveauContact.nom = prompt("Entrez un Nom :");
            nouveauContact.prenom = prompt("Entrez un prénom :");
            nouveauContact.numero = String(prompt("Entrez un numéro de téléphone :"));
            contacts.push(nouveauContact);
            console.log("Félicitations, vous avez crée un contact du nom de " + nouveauContact.prenom + " " + nouveauContact.nom + " !");
            break;
        case 0:
            leave = true;
            console.clear();
            console.log("Vous avez bien quitté le gestionnaire de contacts.")
            break;
        default:
            console.clear();
            console.log("Merci d'entrer une option valide.");
    }
}
