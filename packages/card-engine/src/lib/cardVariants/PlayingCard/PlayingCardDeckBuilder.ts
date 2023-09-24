import { Filterable } from "@app/lib/Filterable";
import {
  PLAYING_CARD_SUIT_CODES,
  PLAYING_CARD_VALUE_CODES,
  TPlayingFaceValueCode,
  TPlayingNumericValueCode,
} from "./constants";
import { PlayingCard } from "./PlayingCard";
import { TPlayingCardSuitCode } from "./PlayingCardSuit";
import { TPlayingCardValueCode } from "./PlayingCardValue";

export class PlayingCardDeckBuilder<T extends PlayingCard = PlayingCard>
  implements Filterable<T, PlayingCardDeckBuilder<T>>
{
  private constructor(private _cards: T[]) {}

  static all() {
    const cards = PLAYING_CARD_VALUE_CODES.flatMap((value) =>
      PLAYING_CARD_SUIT_CODES.map((suit) => PlayingCard.for(value).of(suit))
    );
    return new PlayingCardDeckBuilder(cards);
  }

  static face() {
    return PlayingCardDeckBuilder.all().filter(
      (card): card is PlayingCard<TPlayingFaceValueCode> => card.isFace()
    );
  }

  static numeric() {
    return PlayingCardDeckBuilder.all().filter(
      (card): card is PlayingCard<TPlayingNumericValueCode> => card.isNumeric()
    );
  }

  static reds() {
    return PlayingCardDeckBuilder.all().filter(
      (
        card
      ): card is PlayingCard<
        TPlayingCardValueCode,
        Extract<TPlayingCardSuitCode, "HEARTS" | "DIAMOND">
      > => card.isRed()
    );
  }

  static blacks() {
    return PlayingCardDeckBuilder.all().filter(
      (
        card
      ): card is PlayingCard<
        TPlayingCardValueCode,
        Extract<TPlayingCardSuitCode, "CLUBS" | "SPADES">
      > => card.isBlack()
    );
  }

  // TODO: revisit implementation; check if inferred type is possible instead of casting
  filter<S extends T>(
    this: PlayingCardDeckBuilder<T>,
    predicate: (value: T) => value is S
  ) {
    const newCards = this._cards.filter(predicate);
    this._cards = newCards;
    return this as PlayingCardDeckBuilder<S>;
  }

  add(card: T | T[], ...cards: T[]) {
    const mergeCards = () => {
      if (Array.isArray(card)) return card.concat(cards);
      return [card, ...cards];
    };

    this._cards = this._cards.concat(mergeCards());
    return this;
  }

  get cards() {
    return this._cards;
  }
}
