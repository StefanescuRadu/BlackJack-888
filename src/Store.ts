import {atom} from "jotai";

//initial nameState
export const BET = atom(null);
export const BALANCE = atom(10);
export const SESSION_ID = atom(null);
export const ROUND_ENDED = atom(true);
export const PLAYER_CARDS = atom< [] >([]);
export const DEALER_CARDS = atom< []>([]);
export const BET_VALUES = atom([]);
export const WIN_AMOUNT = atom(null);
export const TOTAL_WIN_AMOUNT = atom(null);
export const ROUNDS_PLAYED = atom(null);
