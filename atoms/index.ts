import dayjs, { Dayjs } from "dayjs"
import { atom } from "jotai"
import { Car } from "../types/Car"

export const CarOpenModalAtom = atom<Car | null>(null)
export const isBookCarModalOpenAtom = atom(false)
export const whichCarTabAtom = atom(0)
export const pagesAtom = atom(1)
export const activePageAtom = atom(0)
export const fromDateFilterAtom = atom<Dayjs | null>(dayjs("2021/01/02"))
export const toDateFilterAtom = atom<Dayjs | null>(dayjs("2023/05/28"))
