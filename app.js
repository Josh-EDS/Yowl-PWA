let deferredPrompt;

window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();
  deferredPrompt = event; // Stocke l'événement pour plus tard
  console.log("👍 Événement 'beforeinstallprompt' détecté !");
});

// Pour tester l'installation manuellement
function installerPWA() {
  if (deferredPrompt) {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then(choice => {
      console.log(choice.outcome === 'accepted' ? '✅ PWA installée !' : '❌ Installation annulée');
      deferredPrompt = null; // Réinitialiser après utilisation
    });
  } else {
    console.log("⚠️ Aucun événement 'beforeinstallprompt' capturé.");
  }
}
