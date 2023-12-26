import {
  DECK_MAX_CARD_AMOUNT,
  DECK_MAX_DUPLICATE_CARD_AMOUNT,
  DECK_MIN_CARD_AMOUNT,
} from "./constant";
import {
  maxCardInDeckError,
  maxDuplicateCardInDeckError,
} from "./error-service";

type DeckProfileType = "profile1" | "profile2" | "profile3";

interface IDeckDetail {
  profileID: DeckProfileType;
  cardList: ICardDetail[];
}

export class DeckService {
  deck: IDeckDetail;
  constructor(profile: DeckProfileType) {
    this.deck = {
      profileID: profile,
      cardList: [],
    };
  }
  cards() {
    return this.deck.cardList;
  }
  count() {
    return this.cards().length;
  }
  addCard(card: ICardDetail) {
    if (this.count() >= DECK_MAX_CARD_AMOUNT) {
      throw maxCardInDeckError;
    }
    if (
      this.cards().filter((s) => s.id === card.id).length >=
      DECK_MAX_DUPLICATE_CARD_AMOUNT
    ) {
      throw maxDuplicateCardInDeckError;
    }

    this.cards().push(card);
    return this;
  }
  valid() {
    return this.count() < DECK_MIN_CARD_AMOUNT;
  }
  removeCard(card: ICardDetail) {
    const index = this.cards().findIndex((obj) => obj.id === card.id);

    if (index > -1) {
      this.cards().splice(index, 1);
    }
    return this;
  }
  clear() {
    this.deck.cardList = [];
    return this;
  }
}

function getDeckService(profile: DeckProfileType): DeckService {
  if (globalThis.deckService) return globalThis.deckService;
  const service = new DeckService(profile);
  globalThis.deckService = service;
  return globalThis.deckService;
}
const deckService = getDeckService("profile1");
export default deckService;
