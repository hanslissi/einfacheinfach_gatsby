import { createContext } from "react";

interface NavContextState {
    spread: boolean;
    scrollSpreadLocked: boolean
    setSpread(value: boolean): void;
    toggleSpread: (shouldLockScrollSpread: boolean) => void;
}

const defaultState: NavContextState = {
    spread: false,
    scrollSpreadLocked: false,
    setSpread: (value: boolean) => {},
    toggleSpread: (shouldLockScrollSpread: boolean) => {}
}

export const NavContext = createContext<NavContextState>(defaultState);