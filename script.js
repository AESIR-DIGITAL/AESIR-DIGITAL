document.addEventListener('DOMContentLoaded', () => {
    // Gestion du menu hamburger
    const menuButton = document.querySelector('.mobile-menu-button');
    const menu = document.querySelector('.mobile-menu');

    menuButton.addEventListener('click', () => {
        menu.classList.toggle('hidden');
    });

    // Validation et gestion du formulaire de contact
    const contactForm = document.querySelector('#contact form');
    
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Empêche l'envoi du formulaire par défaut

        // Récupération des valeurs des champs du formulaire
        const name = document.querySelector('#name').value.trim();
        const email = document.querySelector('#email').value.trim();
        const message = document.querySelector('#message').value.trim();

        let valid = true;

        // Validation simple : vérifie que les champs ne sont pas vides
        if (!name || !email || !message) {
            alert('Veuillez remplir tous les champs.');
            valid = false;
        }

        // Vous pouvez ajouter ici d'autres validations (ex : format de l'email)

        if (valid) {
            // Ici, implémentez l'envoi des données du formulaire (ex : via fetch API)
            console.log('Formulaire valide, prêt à être envoyé.');
            // contactForm.submit(); // Décommentez cette ligne pour permettre l'envoi du formulaire
        }
    });
});
