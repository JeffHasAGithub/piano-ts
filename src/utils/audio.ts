type Oscillators = {
	[hertz in number]: OscillatorNode | undefined;
};

const context:	AudioContext			= new AudioContext();
const gainNode: GainNode					= context.createGain();
const bqfNode:	BiquadFilterNode  = context.createBiquadFilter();

let oscillators: Oscillators = {};

bqfNode.connect(gainNode);
gainNode.connect(context.destination);

export function playTone(hz: number, shape: OscillatorType) {
	if (!oscillators[hz]) {
		const osc = context.createOscillator();;
		osc.connect(bqfNode);

		osc.frequency.setValueAtTime(hz, context.currentTime);
		osc.type = shape;
		osc.start();

		oscillators[hz] = osc;
	}
}

export function stopTone(hz: number) {
	if (!oscillators[hz])
		return;

	oscillators[hz]?.stop();
	oscillators[hz] = undefined;
}

export function setGain(g: number) {
	const clamped = clampGain(g);
	gainNode.gain.setValueAtTime(clamped, context.currentTime);
}

export function clearOscillators() {
	Object.values(oscillators).forEach(osc => osc?.stop());
	oscillators = {};
}

// HELPER FUNCS //////////////////////////////////////////////////////////

function clampGain(g: number): number {
	const min = 0;
	const max = 1;

	return Math.min(Math.max(g, min), max);
}
