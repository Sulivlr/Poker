import Card from "../cards/card.tsx";

class CardDeck {
    private cards: Card[];
    constructor() {
        this.cards = [];

        const ranks: string[] = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const suits: string[] = ['hearts', 'diamonds', 'clubs', 'spades'];

        for (const suit of suits) {
            for (const rank of ranks) {
                const card = new Card(rank, suit);
                this.cards.push(card);
            }
        }
    }
}