import { Card, CardPile } from "@lib";

describe("CardPile", () => {
  it("should create an instance with no cards", () => {
    const instance = CardPile.empty();
    expect(instance.cards().length).toBe(0);
  });

  describe("of", () => {
    it("should create an instance with at least 1 card", () => {
      const instance = CardPile.of(new Card("test"));
      expect(instance.cards().length).toBe(1);
      expect(instance.cards()[0].name).toBe("test");
    });

    describe("multiple cards", () => {
      it("should accept multiple individual cards", () => {
        const instance = CardPile.of(new Card("test1"), new Card("test2"));
        expect(instance.cards().length).toBe(2);
        expect(instance.cards()[0].name).toBe("test1");
        expect(instance.cards()[1].name).toBe("test2");
      });
      it("should accept an array of cards", () => {
        const cards = [new Card("test1"), new Card("test2")];
        const instance = CardPile.of(cards);
        expect(instance.cards().length).toBe(2);
        expect(instance.cards()[0].name).toBe("test1");
        expect(instance.cards()[1].name).toBe("test2");
      });
    });
  });

  describe("isEmpty", () => {
    it("should be true when there are no cards", () => {
      const instance = CardPile.empty();
      expect(instance.isEmpty()).toBeTruthy();
    });

    it("should be false when there are cards", () => {
      const instance = CardPile.of(new Card("test"));
      expect(instance.isEmpty()).toBeFalsy();
    });
  });

  describe("draw", () => {
    it("should draw 1 card by default", () => {
      const instance = CardPile.of(new Card("test1"), new Card("test2"));
      const actual = instance.draw();
      expect(actual.cards().length).toBe(1);
    });

    it("should draw specified number of cards", () => {
      const instance = CardPile.of(
        new Card("test1"),
        new Card("test2"),
        new Card("test3")
      );
      const actual = instance.draw(2);
      expect(actual.cards().length).toBe(2);
    });

    it("should draw all cards when specified number is more than remaining", () => {
      const instance = CardPile.of(
        new Card("test1"),
        new Card("test2"),
        new Card("test3")
      );
      const actual = instance.draw(5);
      expect(actual.cards().length).toBe(3);
    });

    it("should draw the last cards added first", () => {
      const instance = CardPile.of(
        new Card("test1"),
        new Card("test2"),
        new Card("test3")
      );
      const actual = instance.draw(5);
      expect(actual.cards().length).toBe(3);
    });

    it("should return empty pile when no cards are available", () => {
      const instance = CardPile.empty();
      const actual = instance.draw();
      expect(actual.isEmpty()).toBeTruthy();
    });
  });
});
