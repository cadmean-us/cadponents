/** @typedef {typeof __propDef.props}  TableProps */
/** @typedef {typeof __propDef.events}  TableEvents */
/** @typedef {typeof __propDef.slots}  TableSlots */
export default class Table extends SvelteComponentTyped<{
    headers: any;
    rows: any;
    sortable?: boolean | undefined;
}, {
    onActionsClick: CustomEvent<any>;
} & {
    [evt: string]: CustomEvent<any>;
}, {
    panel: {};
    header: {
        header: any;
    };
    cell: {
        row: any;
        cell: any;
        rowIndex: any;
        cellIndex: any;
    };
    body: {};
}> {
}
export type TableProps = typeof __propDef.props;
export type TableEvents = typeof __propDef.events;
export type TableSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        headers: any;
        rows: any;
        sortable?: boolean | undefined;
    };
    events: {
        onActionsClick: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        panel: {};
        header: {
            header: any;
        };
        cell: {
            row: any;
            cell: any;
            rowIndex: any;
            cellIndex: any;
        };
        body: {};
    };
};
export {};
