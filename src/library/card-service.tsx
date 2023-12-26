import { data as normalMonster } from "./data/normal-monster.json";
import { data as effectMonster } from "./data/effect-monster.json";
import { data as spell } from "./data/spell.json";
import { data as trap } from "./data/trap.json";
import Card from "@my-component/card";

export class CardService {
  #cardMap: Map<number, ICardDetail>;
  #cardList: ICardDetail[] = [];
  constructor() {
    this.#cardMap = new Map<number, ICardDetail>();
    populateCard(this.#cardMap, this.#cardList);
  }
  findDetail(id: number): ICardDetail | undefined {
    return this.#cardMap.get(id);
  }
  count(): number {
    return this.#cardMap.size;
  }
  maps() {
    return this.#cardMap;
  }
  list(
    filterFn: ((card: ICardDetail) => boolean) | undefined = undefined
  ): ICardDetail[] {
    if (filterFn === undefined) {
      return this.#cardList;
    }
    return this.#cardList.filter(filterFn);
  }
  render(card: ICardDetail) {
    switch (card.category) {
      case "normal":
        return (
          <Card key={card.id}>
            <Card.Frame category={card.category} />
            <Card.Header>
              <Card.Header.Label name={card.name} />
              <Card.Header.Attribute attribute={card.attribute} />
            </Card.Header>
            <Card.Level>
              <Card.Level.Star level={card.level} />
            </Card.Level>
            <Card.Art artUrl={card.artUrl} />
            <Card.DetailBox>
              <Card.DetailBox.Race race={card.race} category={card.category} />
              <Card.DetailBox.Description description={card.description} />
              <Card.DetailBox.Power
                attack={card.attack}
                defense={card.defense}
              />
            </Card.DetailBox>
          </Card>
        );

      case "effect":
        return (
          <Card key={card.id}>
            <Card.Frame category={card.category} />
            <Card.Header>
              <Card.Header.Label name={card.name} />
              <Card.Header.Attribute attribute={card.attribute} />
            </Card.Header>
            <Card.Level>
              <Card.Level.Star level={card.level} />
            </Card.Level>
            <Card.Art artUrl={card.artUrl} />
            <Card.DetailBox>
              <Card.DetailBox.Race race={card.race} category={card.category} />
              <Card.DetailBox.Description description={card.description} />
            </Card.DetailBox>
          </Card>
        );

      case "spell":
        return (
          <Card key={card.id}>
            <Card.Frame category={card.category} />
            <Card.Header>
              <Card.Header.Label name={card.name} />
              <Card.Header.Attribute attribute={card.attribute} />
            </Card.Header>
            <Card.Level>
              <Card.Level.Variant
                variant={card.variant}
                category={card.category}
              />
            </Card.Level>
            <Card.Art artUrl={card.artUrl} />
            <Card.DetailBox>
              <Card.DetailBox.Description description={card.description} />
            </Card.DetailBox>
          </Card>
        );

      case "trap":
        return (
          <Card key={card.id}>
            <Card.Frame category={card.category} />
            <Card.Header>
              <Card.Header.Label name={card.name} />
              <Card.Header.Attribute attribute={card.attribute} />
            </Card.Header>
            <Card.Level>
              <Card.Level.Variant
                variant={card.variant}
                category={card.category}
              />
            </Card.Level>
            <Card.Art artUrl={card.artUrl} />
            <Card.DetailBox>
              <Card.DetailBox.Description description={card.description} />
            </Card.DetailBox>
          </Card>
        );

      default:
        console.log("unrecognized card category", card);
    }
  }
}

function getCardService(): CardService {
  if (globalThis.cardService) return globalThis.cardService;
  const service = new CardService();
  globalThis.cardService = service;
  return globalThis.cardService;
}
const cardService = getCardService();

export default cardService;

function populateCard(
  cardMap: Map<number, ICardDetail>,
  cardList: ICardDetail[]
) {
  normalMonster.forEach((s) => {
    const card: ICardDetail = {
      category: "normal",
      id: s.id,
      attack: s.atk,
      defense: s.def,
      attribute: s.attribute as CardMonsterAttributeType,
      description: s.desc,
      name: s.name,
      level: s.level,
      race: s.race.toLowerCase() as CardMonsterRaceType,
      artUrl: s.card_images?.[0]?.image_url_cropped,
    };
    cardList.push(card);
    cardMap.set(s.id, card);
  });
  effectMonster.forEach((s) => {
    const card: ICardDetail = {
      category: "effect",
      id: s.id,
      attack: s.atk,
      defense: s.def,
      attribute: s.attribute as CardMonsterAttributeType,
      description: s.desc,
      name: s.name,
      level: s.level,
      race: s.race.toLowerCase() as CardMonsterRaceType,
      artUrl: s.card_images?.[0]?.image_url_cropped,
    };
    cardList.push(card);
    cardMap.set(s.id, card);
  });
  spell.forEach((s) => {
    const card: ICardDetail = {
      id: s.id,
      category: "spell",
      attribute: "spell",
      description: s.desc,
      name: s.name,
      variant: s.race.toLowerCase() as SpellCardVariantType,
      artUrl: s.card_images?.[0]?.image_url_cropped,
    };
    cardList.push(card);
    cardMap.set(s.id, card);
  });
  trap.forEach((s) => {
    const card: ICardDetail = {
      id: s.id,
      category: "trap",
      attribute: "trap",
      description: s.desc,
      name: s.name,
      variant: s.race.toLowerCase() as TrapCardVariantType,
      artUrl: s.card_images?.[0]?.image_url_cropped,
    };
    cardList.push(card);
    cardMap.set(s.id, card);
  });
}
