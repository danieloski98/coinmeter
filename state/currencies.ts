import { ICurrency } from '@/types/Currency';
import { atom } from 'jotai';

export const currenciesAtom = atom<ICurrency[]>([]);
export const defaultCurrencyAtom = atom((get) => {
    const anime = get(currenciesAtom)
    return anime.filter((item) => item.isDefault)[0];
});
export const calculatorTabAtom = atom<1|2>(1);
  