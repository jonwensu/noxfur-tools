import { PlayingCard } from "./cardVariants";

export * from "./Card";
export * as cardVariants from "./cardVariants";
export * from "./CardPile";

const x = PlayingCard.for("JACK").of("DIAMONDS");
const xx = x.name;
