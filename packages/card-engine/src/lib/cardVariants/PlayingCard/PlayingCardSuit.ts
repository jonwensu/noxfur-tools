import { PLAYING_CARD_SUITS } from "./constants";

export type TPlayingCardSuitMap = typeof PLAYING_CARD_SUITS;
export type TPlayingCardSuitCode = keyof TPlayingCardSuitMap;
export type TPlayingCardSuitEntry<T extends TPlayingCardSuitCode> =
  TPlayingCardSuitMap[T];

export class PlayingCardSuit<
  TCode extends TPlayingCardSuitCode,
  TData extends TPlayingCardSuitEntry<TCode> = TPlayingCardSuitEntry<TCode>
> {
  constructor(
    private _code: TCode,
    private _name: TData["name"],
    private _symbol: TData["symbol"],
    private _color: TData["color"]
  ) {}

  get name() {
    return this._name;
  }

  get color() {
    return this._color;
  }

  get code() {
    return this._code;
  }

  get symbol() {
    return this._symbol;
  }

  static of<T extends TPlayingCardSuitCode>(code: T) {
    const { name, color, symbol } = PLAYING_CARD_SUITS[code];
    return new PlayingCardSuit(code, name, symbol, color);
  }
}
