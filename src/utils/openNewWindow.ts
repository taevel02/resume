export default function openNewWindow(href: string | undefined) {
	if(href !== undefined) {
		const win = window.open(href, '_blank');
		win?.focus();
	}
}
