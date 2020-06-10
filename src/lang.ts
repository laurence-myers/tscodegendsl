export function assertNever(arg: never): never {
	throw new Error(`Unexpected object: ${ (<any> arg).constructor || arg }`);
}
