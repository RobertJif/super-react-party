import { useMemo } from "react";

function Card({ children }: IComponentProps) {
  return (
    <div className="min-h-[var(--card-base-height)] min-w-[var(--card-base-width)] relative">
      {children}
    </div>
  );
}

type IHeaderProps = IComponentProps;
function Header({ children }: IHeaderProps) {
  return (
    <div className="absolute top-11 ml-10 pl-5 h-[90px] w-[calc(var(--card-base-width)-88px)] flex justify-between">
      {children}
    </div>
  );
}

function Label({ name }: Pick<ICardDetail, "name">) {
  const textScale = 24 / name.length;
  const style = textScale > 1 ? {} : { transform: `scaleX(${textScale})` };
  return (
    <p
      style={style}
      className={`font-semibold text-7xl whitespace-nowrap pt-1 origin-top-left max-w-[500px]`}
    >
      {name}
    </p>
  );
}

function DetailBox({ children }: IComponentProps) {
  return (
    <div className="h-[228px] w-[704px] absolute bottom-[75px] left-[50px] pt-1 px-2 flex flex-col">
      {children}
    </div>
  );
}

function Description({ description }: { description: string }) {
  const textScale = 250 / description.length;
  const style = textScale > 1 ? {} : { transform: `scaleY(${textScale})` };

  return (
    <span
      style={style}
      className="text-3xl leading-7 font-medium font-sans mt-1 origin-top"
    >
      {description}
    </span>
  );
}

function Race({
  race,
  category,
}: Pick<IMonsterCardDetail, "race" | "category">) {
  const texts = useMemo(() => {
    if (!race) return;
    return race.split("-")?.map((race, index) => {
      return (
        <span className="capitalize text-5xl font-yugioh" key={`race-${index}`}>
          {index > 0 ? ` ${race}` : race}
        </span>
      );
    });
  }, [race]);

  return (
    <div className="text-4xl font-bold">
      [{texts} /{" "}
      <span className="capitalize text-5xl font-yugioh">{category}</span>]
    </div>
  );
}
function Attribute({ attribute }: Pick<ICardDetail, "attribute">) {
  return (
    <div className="flex items-center w-[68px] mr-4">
      <img
        src={`card/attribute/${attribute.toLowerCase()}.png`}
        width={68}
        height={68}
        alt={`card-attribute-${attribute}`}
      />
    </div>
  );
}

function Art({ artUrl }: Pick<ICardDetail, "artUrl">) {
  return (
    <div className="absolute top-[215px] w-[617px] ml-[95px] h-[828px]">
      <img src={artUrl} width={617} height={828} />
    </div>
  );
}

function Frame({ category }: Pick<ICardDetail, "category">) {
  return (
    <div className="absolute -z-50">
      <img className="relative" src={`card/border.webp`} alt="card-border" />
      <img
        className="absolute top-0 p-[3%]"
        src={`card/frame/${category}.jpg`}
        alt={`card-frame-${category}`}
      />
    </div>
  );
}

function Power({
  attack,
  defense,
}: Pick<IMonsterCardDetail, "attack" | "defense">) {
  return (
    <div className="w-full h-8 absolute bottom-4 right-0 px-4 pt-1 text-5xl font-bold flex flex-col ">
      <div className="border-t-2 border-t-black mb-2" />
      <div className="flex space-x-4 w-full px-2 justify-end">
        <p>ATK/{attack}</p>
        <p>DEF/{defense}</p>
      </div>
    </div>
  );
}
function Level({ children }: IComponentProps) {
  return (
    <div className="flex absolute top-[140px] w-[650px] ml-[76px] justify-end space-x-[4.5px]">
      {children}
    </div>
  );
}

function Star({ level }: Pick<IMonsterCardDetail, "level">) {
  const stars = useMemo(() => {
    const res = [];
    for (let i = 0; i < level; i++) {
      res.push(<img src="card/level/star.webp" key={`level-${i}`} />);
    }
    return res;
  }, [level]);
  return stars;
}
function Variant({
  variant,
  category,
}:
  | Pick<ISpellCardDetail, "variant" | "category">
  | Pick<ITrapCardDetail, "variant" | "category">) {
  return (
    <div className="text-5xl font-bold flex items-center -mt-2">
      <span className="inline">[</span>
      <span className="text-6xl capitalize font-yugioh mt-1">
        {category} Card
      </span>
      {variant !== "normal" && (
        <div className="w-[45px] h-[45px] ml-2 mt-3">
          <img src={`card/variant/${variant}.png`} width={45} height={45} />
        </div>
      )}
      <span className="inline">]</span>
    </div>
  );
}

Header.Label = Label;
Header.Attribute = Attribute;
DetailBox.Description = Description;
DetailBox.Race = Race;
DetailBox.Power = Power;
Level.Variant = Variant;
Level.Star = Star;
Card.Header = Header;
Card.Frame = Frame;
Card.Level = Level;
Card.Art = Art;
Card.DetailBox = DetailBox;
export default Card;
