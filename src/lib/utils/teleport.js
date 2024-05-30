export function teleport(node, name) {
	
	let teleportContainer = document.querySelector(name);
	teleportContainer.appendChild(node);

	return {
		destroy() {
			node.remove();
		}
	}
}