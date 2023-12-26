import Card from "../lib/card.ts";

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

    public getCard(): Card | null {
        if (this.cards.length === 0) {
            console.log('deck is empty');
            return null;
        }
        const random = Math.floor(Math.random() * this.cards.length);
        return this.cards.splice(random, 1)[0];
    }

    public getCards(howMany: number): Card[] {
        const drawnCards: Card[] = [];
        for (let i = 0; i < howMany; i++) {
            const card = this.getCard();
            if (card) {
                drawnCards.push(card);
            }
        }
        return drawnCards;
    }
}

export default CardDeck;
