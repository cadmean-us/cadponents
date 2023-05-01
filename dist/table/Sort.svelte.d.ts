/** @typedef {typeof __propDef.props}  SortProps */
/** @typedef {typeof __propDef.events}  SortEvents */
/** @typedef {typeof __propDef.slots}  SortSlots */
export default class Sort extends SvelteComponentTyped<{
    sortDirection?: "none" | "ascending" | "descending" | undefined;
    sort?: (() => void) | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
    get sort(): () => void;
}
export type SortProps = typeof __propDef.props;
export type SortEvents = typeof __propDef.events;
export type SortSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        sortDirection?: "none" | "ascending" | "descending" | undefined;
        sort?: (() => void) | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
