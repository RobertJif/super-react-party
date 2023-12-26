import {
  DECK_MAX_CARD_AMOUNT,
  DECK_MAX_DUPLICATE_CARD_AMOUNT,
} from "./constant";

export const maxCardInDeckError = new Error(
  `Cannot have more than ${DECK_MAX_CARD_AMOUNT} in a deck`
);

export const maxDuplicateCardInDeckError = new Error(
  `Cannot have more than ${DECK_MAX_DUPLICATE_CARD_AMOUNT} of the same cards`
);
