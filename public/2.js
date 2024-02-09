async function shuffleDeck() {
    const url = 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1';
    try {
        const response = await fetch(url);
        const data = await response.json();
        const deckId = data.deck_id;

        const deckContainer = document.getElementById('deck-container');
        deckContainer.textContent = `Deck ID: ${deckId}`;
    } catch (error) {
        console.error('Ошибка получения данных:', error);
    }
}