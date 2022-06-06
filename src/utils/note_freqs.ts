export type Note = "C" | "C#" | "D" | "D#" | "E" | "F" | "F#" | "G" | "G#" | "A" | "A#" | "B";

export type Freqs = {
	[note in Note]: number;
}

const notes = Array<Freqs>(9);
notes[0] = <Freqs>{};
notes[0]["C"]		= 16.35;
notes[0]["C#"]	= 17.32;
notes[0]["D"]		= 18.35;
notes[0]["D#"]	= 19.45;
notes[0]["E"]		= 20.60;
notes[0]["F"]		= 21.83;
notes[0]["F#"]	= 23.12;
notes[0]["G"]		= 24.50;
notes[0]["G#"]	= 25.96;
notes[0]["A"]		= 27.50;
notes[0]["A#"]	= 29.14;
notes[0]["B"]		= 30.87;

notes[1] = <Freqs>{};
notes[1]['C']		= 32.70;
notes[1]['C#']	= 34.65;
notes[1]['D']		= 36.71;
notes[1]['D#']	= 38.89;
notes[1]['E']		= 41.20;
notes[1]['F']		= 43.65;
notes[1]['F#']	= 46.25;
notes[1]['G']		= 49.00;
notes[1]['G#']	= 51.91;
notes[1]['A']		= 55.00;
notes[1]['A#']	= 58.27;
notes[1]['B']		= 61.74;

notes[2] = <Freqs>{};
notes[2]['C']		= 65.41;
notes[2]['C#']	= 69.30;
notes[2]['D']		= 73.42; 
notes[2]['D#']	= 77.78;
notes[2]['E']		= 82.41;
notes[2]['F']		= 87.31;
notes[2]['F#']	= 92.50;
notes[2]['G']		= 98.00;
notes[2]['G#']	= 103.83;
notes[2]['A']		= 110.00;
notes[2]['A#']	= 116.54;
notes[2]['B']		= 123.47;

notes[3] = <Freqs>{};
notes[3]['C']		= 130.81;
notes[3]['C#']	= 138.59;
notes[3]['D']		= 146.83;
notes[3]['D#']	= 155.56;
notes[3]['E']		= 164.81;
notes[3]['F']		= 174.61;
notes[3]['F#']	= 185.00;
notes[3]['G']		= 196.00;
notes[3]['G#']	= 207.65;
notes[3]['A']		= 220.00;
notes[3]['A#']	= 233.08;
notes[3]['B']		= 246.94;

notes[4] = <Freqs>{};
notes[4]['C']		= 261.63;
notes[4]['C#']	= 277.18;
notes[4]['D']		= 293.66;
notes[4]['D#']	= 311.13;
notes[4]['E']		= 329.63;
notes[4]['F']		= 349.23;
notes[4]['F#']	= 369.99;
notes[4]['G']		= 392.00;
notes[4]['G#']	= 415.30;
notes[4]['A']		= 440.00;
notes[4]['A#']	= 466.16;
notes[4]['B']		= 493.88;

notes[5] = <Freqs>{};
notes[5]['C']		= 523.25;
notes[5]['C#']	= 554.37;
notes[5]['D']		= 587.33;
notes[5]['D#']	= 622.25;
notes[5]['E']		= 659.25;
notes[5]['F']		= 698.46;
notes[5]['F#']	= 739.99;
notes[5]['G']		= 783.99;
notes[5]['G#']	= 830.61;
notes[5]['A']		= 880.00;
notes[5]['A#']	= 932.33;
notes[5]['B']		= 987.77;

notes[6] = <Freqs>{};
notes[6]['C']		= 1046.50;
notes[6]['C#']	= 1108.73;
notes[6]['D']		= 1174.66;
notes[6]['D#']	= 1244.51;
notes[6]['E']		= 1318.51;
notes[6]['F']		= 1396.91;
notes[6]['F#']	= 1479.98;
notes[6]['G']		= 1567.98;
notes[6]['G#']	= 1661.22;
notes[6]['A']		= 1760.00;
notes[6]['A#']	= 1864.66;
notes[6]['B']		= 1975.33;

notes[7] = <Freqs>{};
notes[7]['C']		= 2093.00;
notes[7]['C#']	= 2217.46;
notes[7]['D']		= 2349.32;
notes[7]['D#']	= 2489.02;
notes[7]['E']		= 2637.02;
notes[7]['F']		= 2793.83;
notes[7]['F#']	= 2959.96;
notes[7]['G']		= 3135.96;
notes[7]['G#']	= 3322.44;
notes[7]['A']		= 3520.00;
notes[7]['A#']	= 3729.31;
notes[7]['B']		= 3951.07;

notes[8] = <Freqs>{};
notes[8]['C']		= 4186.01;
notes[8]['C#']	= 4434.92;
notes[8]['D']		= 4698.63;
notes[8]['D#']	= 4978.03;
notes[8]['E']		= 5274.04;
notes[8]['F']		= 5587.65;
notes[8]['F#']	= 5919.91;
notes[8]['G']		= 6271.93;
notes[8]['G#']	= 6644.88;
notes[8]['A']		= 7040.00;
notes[8]['A#']	= 7458.62;
notes[8]['B']		= 7902.13;

export function getFreq(oct: number, note: Note): number {
	if (oct < 0 || oct > 8)
		throw Error("Not a valid octave");
	if (notes[oct][note] === undefined)
		throw Error("Not a valid note");

	return notes[oct][note];
}
