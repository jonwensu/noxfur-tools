export const NUMERIC_VALUES = {
  ACE: {
    name: "Ace",
    numericValue: 1,
    symbol: "A",
  },
  TWO: {
    name: "Two",
    numericValue: 2,
    symbol: "2",
  },
  THREE: {
    name: "Three",
    numericValue: 3,
    symbol: "3",
  },
  FOUR: {
    name: "Four",
    numericValue: 4,
    symbol: "4",
  },
  FIVE: {
    name: "Five",
    numericValue: 5,
    symbol: "5",
  },
  SIX: {
    name: "Six",
    numericValue: 6,
    symbol: "6",
  },
  SEVEN: {
    name: "Seven",
    numericValue: 7,
    symbol: "7",
  },
  EIGHT: {
    name: "Eight",
    numericValue: 8,
    symbol: "8",
  },
  NINE: {
    name: "Nine",
    numericValue: 9,
    symbol: "9",
  },
  TEN: {
    name: "Ten",
    numericValue: 10,
    symbol: "T",
  },
} as const;

export type TPlayingNumericValueCode = keyof typeof NUMERIC_VALUES;

export const FACE_VALUES = {
  JACK: {
    name: "Jack",
    numericValue: 11,
    symbol: "J",
  },
  QUEEN: {
    name: "Queen",
    numericValue: 12,
    symbol: "Q",
  },
  KING: {
    name: "King",
    numericValue: 13,
    symbol: "K",
  },
} as const;

export type TPlayingFaceValueCode = keyof typeof FACE_VALUES;

export const PLAYING_CARD_VALUES = {
  ...NUMERIC_VALUES,
  ...FACE_VALUES,
} as const;

export const PLAYING_CARD_VALUE_CODES = Object.keys(
  PLAYING_CARD_VALUES
) as Array<keyof typeof PLAYING_CARD_VALUES>;

export const PLAYING_CARD_SUITS = {
  HEARTS: {
    name: "Hearts",
    color: "RED",
    symbol: "H",
  },
  DIAMONDS: {
    name: "Diamonds",
    color: "RED",
    symbol: "D",
  },
  SPADES: {
    name: "Spades",
    color: "BLACK",
    symbol: "S",
  },
  CLUBS: {
    name: "Clubs",
    color: "BLACK",
    symbol: "C",
  },
} as const;

export const PLAYING_CARD_SUIT_CODES = Object.keys(PLAYING_CARD_SUITS) as Array<
  keyof typeof PLAYING_CARD_SUITS
>;
