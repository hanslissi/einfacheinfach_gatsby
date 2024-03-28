import { createContext } from "react";

interface NavContextState {
    spread: boolean;
    setSpread(value: boolean): void;
    toggleSpread: () => void;
}

const defaultState: NavContextState = {
    spread: false,
    setSpread: (value: boolean) => {},
    toggleSpread: () => {}
}

export const NavContext = createContext<NavContextState>(defaultState);