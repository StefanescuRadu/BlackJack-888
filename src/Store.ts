import {atom} from "jotai";

//initial nameState
export const BET = atom<number | null>(null);
export const BALANCE = atom<number>(10);
export const SESSION_ID = atom<string | null>(null);
export const ROUND_ENDED = atom<boolean>(true);
export const PLAYER_CARDS = atom<any[] >([]);
export const DEALER_CARDS = atom<any[] >([]);
export const BET_VALUES = atom<[] | null>([]);
export const WIN_AMOUNT = atom<number | null>(null);
export const TOTAL_WIN_AMOUNT = atom<number | null>(null);
export const ROUNDS_PLAYED = atom<number | null>(null);
