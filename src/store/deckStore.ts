import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface DeckState {
  name: string;
  cardList: ICardDetail[];
  addCard: (card: ICardDetail) => void;
}

const useDeckStore = create<DeckState>()(
  devtools(
    persist(
      (set) => ({
        cardList: [],
        name: "Starter Deck",
        addCard: (card) =>
          set((state) => {
            const cardList = state.cardList;
            cardList.push(card);
            return { cardList };
          }),
      }),
      {
        name: "deck-store",
      }
    )
  )
);
export default useDeckStore;
