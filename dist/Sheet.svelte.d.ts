import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        /**
             * The direction the sheet will fly in from
             * @type {"top" | "right" | "bottom" | "left"}
             */ direction?: string | undefined;
        toggleVisibility?: (() => void) | undefined;
        open?: (() => void) | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type SheetProps = typeof __propDef.props;
export type SheetEvents = typeof __propDef.events;
export type SheetSlots = typeof __propDef.slots;
export default class Sheet extends SvelteComponentTyped<SheetProps, SheetEvents, SheetSlots> {
    get toggleVisibility(): () => void;
    get open(): () => void;
}
export {};
