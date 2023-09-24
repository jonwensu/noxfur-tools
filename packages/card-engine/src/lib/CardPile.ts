import { Card } from "@lib/Card";
import { Filterable } from "./Filterable";

export class CardPile<T extends Card> implements Filterable<T, CardPile<T>> {
  constructor(private _cards: T[]) {}

  static of<T extends Card>(card: T | T[], ...cards: T[]): CardPile<T> {
    if (Array.isArray(card)) return new CardPile(card.concat(cards));

    return new CardPile([card, ...cards]);
  }

  static empty<T extends Card>(): CardPile<T> {
    return new CardPile([]);
  }

  isEmpty() {
    return this._cards.length === 0;
  }

  cards(): T[] {
    return this._cards;
  }

  draw(amount = 1): CardPile<T> {
    if (this.isEmpty()) return CardPile.empty();

    return new CardPile(
      this._cards.splice(0, Math.min(this._cards.length, amount))
    );
  }

  filter(this: CardPile<T>, predicate: (v: T) => boolean): CardPile<T> {
    this._cards = this._cards.filter(predicate);
    return this;
  }
}
