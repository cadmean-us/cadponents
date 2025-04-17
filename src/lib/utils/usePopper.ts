import { createPopper, type Instance, type Options } from '@popperjs/core';

interface PopperElementAction {
	destroy: () => void;
}

interface PopperTooltipAction {
	update: (newParams: Partial<Options>) => void;
	destroy: () => void;
}

type UsePopperElement = (element: Element) => PopperElementAction;
type UsePopperTooltip = (element: HTMLElement, params?: Partial<Options>) => PopperTooltipAction;

export default function createPopperAction(): [UsePopperElement, UsePopperTooltip] {
	let popperElement: Element | null = null;
	let popperTooltip: HTMLElement | null = null;
	let popperParams: Partial<Options> | undefined;
	let popper: Instance | null = null;

	function initialisePopper(): void {
		if (popperElement && popperTooltip) {
			popper = createPopper(popperElement, popperTooltip, popperParams);
		}
	}

	function destroyPopper(): void {
		if (popper) {
			popper.destroy();
			popper = null;
		}
	}

	function usePopperElement(element: Element): PopperElementAction {
		popperElement = element;
		initialisePopper();
		return {
			destroy() {
				popperElement = null;
				destroyPopper();
			}
		};
	}

	function usePopperTooltip(element: HTMLElement, params?: Partial<Options>): PopperTooltipAction {
		popperTooltip = element;
		popperParams = params;
		initialisePopper();

		return {
			update(newParams: Partial<Options>) {
				popperParams = newParams;
				if (popper) {
					popper.setOptions(popperParams);
				}
			},
			destroy() {
				popperTooltip = null;
				destroyPopper();
			}
		};
	}

	return [usePopperElement, usePopperTooltip];
}
