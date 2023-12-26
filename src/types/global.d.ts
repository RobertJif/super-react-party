/* eslint-disable no-var */
import { CardService } from "@my-library/card-service";
import { DeckService } from "@my-library/deck-service";
export interface global {}
declare global {
  type IComponentProps = {
    children: React.ReactNode;
  };

  // Category
  type CardMonsterType = "normal" | "effect" | "fusion" | "ritual";
  type CardSpellType = "spell";
  type CardTrapType = "trap";
  type CardType = CardMonsterType | CardSpellType | CardTrapType;

  // Attributes
  type CardMonsterAttributeType =
    | "dark"
    | "light"
    | "earth"
    | "fire"
    | "water"
    | "wind";
  type CardSpellAttributeType = "spell";
  type CardTrapAttributeType = "trap";
  type CardAttributeType =
    | CardMonsterAttributeType
    | CardSpellAttributeType
    | CardTrapAttributeType;
  type CardMonsterRaceType =
    | "aqua"
    | "beast"
    | "beast-warrior"
    | "creator-god"
    | "cyberse"
    | "dinosaur"
    | "divine-beast"
    | "dragon"
    | "fairy"
    | "fiend"
    | "fish"
    | "insect"
    | "machine"
    | "plant"
    | "psychic"
    | "pyro"
    | "reptile"
    | "rock"
    | "sea serpent"
    | "spellcaster"
    | "thunder"
    | "warrior"
    | "winged beast"
    | "wyrm"
    | "zombie";
  type TrapCardVariantType = "counter" | "normal" | "continuous";
  type SpellCardVariantType =
    | "normal"
    | "field"
    | "equip"
    | "continuous"
    | "quick-play"
    | "ritual";
  // Card Details
  interface IMonsterCardDetail {
    id: number;
    category: CardMonsterType;
    level: number;
    attribute: CardMonsterAttributeType;
    name: string;
    description: string;
    attack: number;
    defense: number;
    race: CardMonsterRaceType;
    artUrl: string;
  }

  interface ISpellCardDetail {
    id: number;
    category: CardSpellType;
    variant: SpellCardVariantType;
    attribute: "spell";
    name: string;
    description: string;
    artUrl: string;
  }

  interface ITrapCardDetail {
    id: number;
    category: CardTrapType;
    variant: TrapCardVariantType;
    attribute: "trap";
    name: string;
    description: string;
    artUrl: string;
  }
  type ICardDetail = IMonsterCardDetail | ISpellCardDetail | ITrapCardDetail;
  namespace globalThis {
    var cardService: CardService;
    var deckService: DeckService;
  }
}
