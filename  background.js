// Écoute lorsque l'extension est activée
chrome.runtime.onInstalled.addListener(() => {
  console.log('Extension installée ou mise à jour!');
});

// Écoute un événement depuis la fenêtre contextuelle (popup)
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.message === 'getActiveTabId') {
    // Récupère l'onglet actif et envoie son ID à la fenêtre contextuelle
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      const activeTabId = tabs.length ? tabs[0].id : null;
      sendResponse({ activeTabId });
    });
    return true; // Pour indiquer à Chrome que sendResponse sera appelé asynchronement
  }
});
