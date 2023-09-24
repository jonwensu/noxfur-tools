import { PlayingCard } from "./PlayingCard";
import { PlayingCardSuit, TPlayingCardSuitCode } from "./PlayingCardSuit";
import { PlayingCardValue, TPlayingCardValueCode } from "./PlayingCardValue";

export class PlayingCardBuilder<T extends TPlayingCardValueCode> {
  private _value: PlayingCardValue<T>;

  constructor(value: T) {
    this._value = PlayingCardValue.of(value);
  }

  static value<T extends TPlayingCardValueCode>(code: T) {
    return new PlayingCardBuilder<T>(code);
  }

  of<V extends TPlayingCardSuitCode>(s: V) {
    return new PlayingCard(this._value, PlayingCardSuit.of(s));
  }
}
