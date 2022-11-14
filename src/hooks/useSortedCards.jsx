import {useMemo} from "react";


export const useSortedCards = (cards, sort) => {
  const sortedCards = useMemo(() => {
    switch (sort) {
      case 'name':
        return [...cards].sort((a, b) => a['name'].localeCompare(b['name']));
      case 'min':        return [...cards].sort((a, b) => a['price'].replace(/\s+/, '') - b['price'].replace(/\s+/, ''));
        break;
      case 'max':
        return [...cards].sort((a, b) => b['price'].replace(/\s+/, '') - a['price'].replace(/\s+/, ''));
        break;
      default:
        return cards;
    }
  }, [cards, sort])

  return sortedCards;
};
