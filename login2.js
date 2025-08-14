function login() {
        var password = document.getElementById('password').value;

        // Tablica przechowująca poprawne hasła
        var correctPasswords = ["Zk_5!s$Vp@q#Rm"]; // Możesz dodać więcej haseł tutaj

        // Sprawdzenie, czy wprowadzone hasło znajduje się w tablicy
        if (password === "") {
            alert("Proszę wprowadzić hasło.");
        } else if (correctPasswords.includes(password)) {
            // Jeśli hasło jest poprawne, przekierowanie na stronę
            window.location.href = 'index2.html';
        } else {
            // Jeśli hasło jest niepoprawne
            alert("Niepoprawne hasło.");
        }
    }
