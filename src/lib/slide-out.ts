import { linear } from 'svelte/easing';

type TranstitionReturnType = {
	delay?: number;
	duration?: number;
	easing?: (t: number) => number;
	css?: (t: number, u: number) => string;
	tick?: (t: number, u: number) => void;
};

export default function (
	node: HTMLElement,
	options: Omit<TranstitionReturnType, 'css' | 'tick'>
): TranstitionReturnType {
	return {
		delay: 0,
		duration: 250,
		easing: linear,
		...options,
		css: (_, u) => `
			position: fixed;
			bottom: 0%;
			left: 0;
			margin: 0;
			transform: translateY(${u * 100}%);
		`
	};
}
