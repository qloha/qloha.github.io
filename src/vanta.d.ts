declare module 'vanta/dist/vanta.net.min' {
	import type * as THREE from 'three';

	interface VantaNetSettings {
		el: HTMLElement | string;
		THREE: typeof THREE;
		mouseControls?: boolean;
		touchControls?: boolean;
		minHeight?: number;
		minWidth?: number;
		scale?: number;
		scaleMobile?: number;
		color?: number;
		backgroundColor?: number;
		points?: number;
		maxDistance?: number;
		spacing?: number;
		showDots?: boolean;
	}

	interface VantaEffect {
		destroy: () => void;
		setOptions: (options: Partial<VantaNetSettings>) => void;
		resize: () => void;
	}

	const NET: (options: VantaNetSettings) => VantaEffect;
	export default NET;
}