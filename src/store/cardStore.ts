import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface CardState {
  cardMap: Map<number, ICardDetail>;
  cardList: ICardDetail[];
}

const useCardStore = create<CardState>()(
  devtools(
    persist(
      () => ({
        cardList: cardService.list(),
        cardMap: cardService.maps(),
      }),
      {
        name: "card-store",
      }
    )
  )
);
export default useCardStore;
