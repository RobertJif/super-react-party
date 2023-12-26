import CardList from "@my-component/card-list";
import "./App.css";
import DeckCardList from "@my-component/deck-card-list";

function App() {
  return (
    <div className="flex">
      <div className="basis-1/2">
        <CardList />
      </div>

      <div className="basis-1/2">
        <DeckCardList />
      </div>
    </div>
  );
}

export default App;
