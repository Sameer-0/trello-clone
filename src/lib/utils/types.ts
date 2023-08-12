export type task = {
	id: number;
	title: string;
	description?: any | null; // optional field, can be undefined or null.
	scheduleDate: string;
	prority: string;
	createdDate: string;
};

export type boardColumns = {
	id: number;
	name: string;
	tasks: task[];
};
