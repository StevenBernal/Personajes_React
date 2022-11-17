import { Subs } from "./subs.interfaces";

export interface FormState {
    inputValues: Subs
}

export interface FormProps {
    onNewSub: (newSub:Subs) => void
}