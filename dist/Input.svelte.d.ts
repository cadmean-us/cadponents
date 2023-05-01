import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        value?: string | undefined;
        id?: string | undefined;
        placeholder?: string | undefined;
        type?: string | undefined;
        label?: string | undefined;
        disabled?: boolean | undefined;
        width?: string | undefined;
        height?: string | undefined;
        style?: string | undefined;
        suffixSrc?: string | undefined;
        suffixSize?: string | undefined;
        suffixText?: string | undefined;
        prefixSrc?: string | undefined;
        prefixSize?: string | undefined;
        prefixText?: string | undefined;
        inputStyle?: string | undefined;
        iconLeftMargin?: string | undefined;
        iconRightMargin?: string | undefined;
        maxWidth?: string | undefined;
    };
    events: {
        blur: FocusEvent;
        click: MouseEvent;
        copy: ClipboardEvent;
        focus: FocusEvent;
        input: Event;
        paste: ClipboardEvent;
        select: Event;
        submit: SubmitEvent;
        keydown: CustomEvent<any>;
        enter: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type InputProps = typeof __propDef.props;
export type InputEvents = typeof __propDef.events;
export type InputSlots = typeof __propDef.slots;
export default class Input extends SvelteComponentTyped<InputProps, InputEvents, InputSlots> {
}
export {};
