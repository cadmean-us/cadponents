export function isString (value: any) {
	return typeof value === 'string' || value instanceof String
}

export function isNumber (value: any) {
	return typeof value === 'number' || value instanceof Number
}

export function isBoolean (value: any) {
	return typeof value === 'boolean' || value instanceof Boolean
}

export function isArray (value: any) {
	return Array.isArray(value)
}

export function isObject (value: any) {
	return value !== null && typeof value === 'object'
}

export function isFunction (value: any) {
	return typeof value === 'function'
}