import { PLAYING_CARD_VALUES } from "./constants";

export type TPlayingCardValueMap = typeof PLAYING_CARD_VALUES;
export type TPlayingCardValueCode = keyof TPlayingCardValueMap;
export type TPlayingCardValueEntry<T extends TPlayingCardValueCode> =
  TPlayingCardValueMap[T];

export class PlayingCardValue<
  TCode extends TPlayingCardValueCode,
  TData extends TPlayingCardValueEntry<TCode> = TPlayingCardValueEntry<TCode>
> {
  constructor(
    private _code: TCode,
    private _name: TData["name"],
    private _numericValue: TData["numericValue"],
    private _symbol: TData["symbol"]
  ) {}

  get name() {
    return this._name;
  }

  get code() {
    return this._code;
  }

  get numericValue() {
    return this._numericValue;
  }

  get symbol() {
    return this._symbol;
  }

  static of<T extends TPlayingCardValueCode>(code: T) {
    const { name, numericValue, symbol } = PLAYING_CARD_VALUES[code];
    return new PlayingCardValue(code, name, numericValue, symbol);
  }
}
