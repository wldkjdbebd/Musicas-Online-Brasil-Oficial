window.onload = function() {
    const audio = document.getElementById('audio');
    const playButton = document.getElementById('play-button');
    const songTitle = "Mega Trepa Trepa das Sombras"; // Atualizar com o nome real
    const artistName = "MC Renatinho Falcão, DJ Léo da 17, DJ Wizard"; // Atualizar com o nome real

    // Solicitar permissão para enviar notificações
    Notification.requestPermission().then(permission => {
        if (permission === "granted") {
            showNotification();
        }
    });

    // Tocar música automaticamente
    audio.play().catch(error => {
        console.error("Erro ao tentar tocar a música:", error);
    });

    // Alternar play/pause
    playButton.onclick = function() {
        if (audio.paused) {
            audio.play().catch(error => {
                console.error("Erro ao tentar tocar a música:", error);
            });
            playButton.textContent = '⏸️'; // Ícone de pausa
            showNotification(); // Mostrar notificação ao retomar
        } else {
            audio.pause();
            playButton.textContent = '▶️'; // Ícone de play
        }
    };

    function showNotification() {
        const notification = new Notification("Música Tocando!", {
            body: `${songTitle} - ${artistName}`,
            icon: "Mega Trepa Trepa das Sombras_.jpg" // Ícone da notificação
        });

        // Fechar a notificação após 5 segundos
        setTimeout(() => {
            notification.close();
        }, 5000);
    }
};


