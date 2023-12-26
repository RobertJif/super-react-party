import cardService from "@my-library/card-service";
import useDeckStore from "@my-store/deckStore";
const DeckCardList = () => {
  const { cardList } = useDeckStore();
  return (
    <div className="flex w-full flex-wrap justify-between items-start ">
      {cardList.map((card, index) => {
        return <DeckCard card={card} key={index} />;
      })}
    </div>
  );
};

function DeckCard({ card }: { card: ICardDetail }) {
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
export default DeckCardList;
