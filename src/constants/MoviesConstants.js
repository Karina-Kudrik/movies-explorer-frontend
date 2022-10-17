export const LOADING_STATUS = {
  SUCCESSFULLY: "SUCCESSFULLY",
  LOADING: "LOADING",
  ERROR: "ERROR",
  NOT_FOUND: "NOT_FOUND",
};
export const BREAKPOINTS = {
  desktop: {
    minWidth: 769,
    maxWidth: Infinity,
    cardsInRow: 3,
    loadCardsCount: 3,
    initialAmount: 12,
  },
  tablet: {
    minWidth: 531,
    maxWidth: 768,
    cardsInRow: 2,
    loadCardsCount: 2,
    initialAmount: 8,
  },
  phone: {
    minWidth: 320,
    maxWidth: 530,
    cardsInRow: 1,
    loadCardsCount: 2,
    initialAmount: 5,
  },
};
