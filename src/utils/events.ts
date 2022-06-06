type Signal = "keydown" | "keyup" | "keypress";
type Callback = () => void;

type KeyEvent = {
	[kc: number]: Callback[] | undefined;
}

type Events = {
	[sig in Signal]: KeyEvent;
}

const events: Events = {
	"keydown": {},
	"keyup": {},
	"keypress": {},
};

export function addCallback(sig: Signal, kc: number, cb: Callback) {
	if (events[sig][kc])
		events[sig][kc]?.push(cb);
	else
		events[sig][kc] = [cb];
}

export function rmCallbacks(sig: Signal, kcArr: number[]) {
	kcArr.forEach(kc => events[sig][kc] = undefined);	
}

export function execute(sig: Signal, kc: number) {
	events[sig][kc]?.forEach(cb => cb());
}
