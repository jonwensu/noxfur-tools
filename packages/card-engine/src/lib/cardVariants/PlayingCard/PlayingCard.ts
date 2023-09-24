import { Card } from "@app/lib/Card";
import { PlayingCardBuilder } from "./PlayingCardBuilder";
import {
  PlayingCardSuit,
  TPlayingCardSuitCode,
  TPlayingCardSuitEntry,
} from "./PlayingCardSuit";
import {
  PlayingCardValue,
  TPlayingCardValueCode,
  TPlayingCardValueEntry,
} from "./PlayingCardValue";
import { TPlayingFaceValueCode, TPlayingNumericValueCode } from "./constants";

const FACE = ["JACK", "QUEEN", "KING"] satisfies TPlayingFaceValueCode[];

export class PlayingCard<
  TValueCode extends TPlayingCardValueCode = TPlayingCardValueCode,
  TSuitCode extends TPlayingCardSuitCode = TPlayingCardSuitCode,
  TValueEntry extends TPlayingCardValueEntry<TValueCode> = TPlayingCardValueEntry<TValueCode>,
  TSuitEntry extends TPlayingCardSuitEntry<TSuitCode> = TPlayingCardSuitEntry<TSuitCode>,
  TName extends string = `${TValueEntry["name"]} of ${TSuitEntry["name"]}`
> extends Card {
  constructor(
    private _value: PlayingCardValue<TValueCode>,
    private _suit: PlayingCardSuit<TSuitCode>
  ) {
    super(`${_value.name} of ${_suit.name}`);
  }

  public get value() {
    return this._value;
  }

  set value(v: PlayingCardValue<TValueCode>) {
    this._value = v;
  }

  get suit() {
    return this._suit;
  }

  get name() {
    return super.name as TName;
  }

  set suit(v: PlayingCardSuit<TSuitCode>) {
    this._suit = v;
  }

  get symbol() {
    const { symbol: valueSymbol } = this._value;
    const { symbol: suitSymbol } = this._suit;
    return `${valueSymbol}${suitSymbol}` as const;
  }

  static for<T extends TPlayingCardValueCode>(code: T) {
    return PlayingCardBuilder.value(code);
  }

  isFace() {
    return FACE.some((f) => f === this._value.code);
  }

  isNumeric(
    this: PlayingCard<TValueCode, TSuitCode>
  ): this is PlayingCard<TPlayingNumericValueCode, TSuitCode> {
    return !this.isFace();
  }

  isBlack() {
    return ["SPADES", "CLUBS"].some((f) => f === this._value.code);
  }

  isRed() {
    return !this.isBlack();
  }
}
