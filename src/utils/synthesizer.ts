import * as NFreqUtils from "./note_freqs"
import * as AudioUtils from "./audio"

let octave = 4;

export function playNote(note: NFreqUtils.Note) {
	const hz = NFreqUtils.getFreq(octave, note);
	AudioUtils.playTone(hz, "triangle");
}

export function stopNote(note: NFreqUtils.Note) {
	const hz = NFreqUtils.getFreq(octave, note);
	AudioUtils.stopTone(hz);
}

export function setVolume(vol: number) {
	AudioUtils.setGain(vol);
}

export function setOctave(oct: number) {
	octave = oct;
}

export function getOctave() {
	return octave;
}
