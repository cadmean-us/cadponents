/** @typedef {typeof __propDef.props}  CadmeanProps */
/** @typedef {typeof __propDef.events}  CadmeanEvents */
/** @typedef {typeof __propDef.slots}  CadmeanSlots */
export default class Cadmean extends SvelteComponentTyped<{
    [x: string]: never;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type CadmeanProps = typeof __propDef.props;
export type CadmeanEvents = typeof __propDef.events;
export type CadmeanSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: never;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
