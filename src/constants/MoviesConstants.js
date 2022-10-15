export const LOADING_STATUS = {
  SUCCESSFULLY: "SUCCESSFULLY",
  LOADING: "LOADING",
  ERROR: "ERROR",
  NOT_FOUND: "NOT_FOUND",
};
export const BREAKPOINTS = {
  desktop: {
    minWidth: 1280,
    maxWidth: Infinity,
    cardsInRow: 3,
    loadCardsCount: 3,
    initialAmount: 12,
  },
  tablet: {
    minWidth: 481,
    maxWidth: 1279,
    cardsInRow: 2,
    loadCardsCount: 2,
    initialAmount: 8,
  },
  phone: {
    minWidth: 0,
    maxWidth: 480,
    cardsInRow: 1,
    loadCardsCount: 2,
    initialAmount: 5,
  },
};
