import './style.css'

import * as EventUtils from "./utils/events"
import * as SynthUtils from "./utils/synthesizer"
import * as KEYBINDS from "./keybinds"
import * as DOM from "./dom"

import { Note } from "./utils/note_freqs"

DOM.O_KEYS.forEach(key => {
	const val = parseInt(key.innerHTML);

	key.addEventListener("click", () => {
		SynthUtils.setOctave(val)

		const oNode = document.getElementsByClassName("octave oclick")[0];
		oNode.classList.remove("oclick");
		key.classList.add("oclick");
	});

	EventUtils.addCallback("keyup", KEYBINDS.OCTAVES[key.id], () => {
		key.dispatchEvent(new PointerEvent("oclick"));
	});
});

DOM.P_KEYS.forEach(key => {
	key.addEventListener("pointerdown", (ev) => {
		ev.preventDefault();

		SynthUtils.playNote(key.id as Note);
		key.classList.add("pclick");
	});

	key.addEventListener("pointerup", (ev) => {
		ev.preventDefault();

		SynthUtils.stopNote(key.id as Note);
		key.classList.remove("pclick");
	});

	key.addEventListener("pointerleave", (ev) => {
		ev.preventDefault();
		
		key.dispatchEvent(new PointerEvent("pointerup"));
	});

	EventUtils.addCallback("keydown", KEYBINDS.PKEYS[key.id], () => {
		key.dispatchEvent(new PointerEvent("pointerdown"));
	});

	EventUtils.addCallback("keyup", KEYBINDS.PKEYS[key.id], () => {
		key.dispatchEvent(new PointerEvent("pointerup"));
	});
});

document.addEventListener("keydown", (ev) => {
	EventUtils.execute("keydown", ev.keyCode)
});

document.addEventListener("keyup", (ev) => {
	EventUtils.execute("keyup", ev.keyCode)
});
