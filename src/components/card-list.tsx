import cardService from "@my-library/card-service";
import useDeckStore from "@my-store/deckStore";
import { useState } from "react";
const CardList = () => {
  const [cards, setCards] = useState(cardService.list());
  return (
    <div className="flex h-full items-center w-full flex-wrap justify-between space-y-6">
      {cards.map((card) => {
        return <ReserveCard card={card} key={card.id} setCards={setCards} />;
      })}
    </div>
  );
};
function ReserveCard({
  card,
}: {
  card: ICardDetail;
  setCards: React.Dispatch<React.SetStateAction<ICardDetail[]>>;
}) {
  const { addCard } = useDeckStore();
  const handleClick = ({
    button,
    buttons,
  }: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (button === 0 && buttons === 1) {
      addCard(card);
    } else if (button === 2 && buttons === 2) {
      addCard(card);
    }
  };
  return (
    <div className="relative">
      {cardService.render(card)}
      <div
        onMouseDown={handleClick}
        onContextMenu={(e) => {
          e.preventDefault();
          return false;
        }}
        className="absolute top-0 w-full h-full border-red-700 border-8 opacity-0 hover:opacity-100 active:opacity-100"
      ></div>
    </div>
  );
}

export default CardList;
