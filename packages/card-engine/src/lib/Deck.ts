import { CardPile } from "./CardPile";
import {
  PlayingCard,
  PLAYING_CARD_SUIT_CODES,
  PLAYING_CARD_VALUE_CODES,
} from "./cardVariants";

export class Deck extends CardPile<PlayingCard> {
  static complete() {
    const cards = PLAYING_CARD_VALUE_CODES.flatMap((value) =>
      PLAYING_CARD_SUIT_CODES.map((suit) => PlayingCard.for(value).of(suit))
    );
    return CardPile.of(cards);
  }
}
