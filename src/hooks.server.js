export async function handle({ event, resolve }) {
	console.log("HOOK");

	let theme;
	const existingTheme = event.cookies.get("theme");
	const newTheme = event.url.searchParams.get("theme");

	// TODO: this means the user either deleted the cookie or visited the site for the first time
	if (!existingTheme) {
		event.cookies.set("theme", "dark", { path: "/" });
		theme = existingTheme;
	} else if (newTheme) {
		event.cookies.set("theme", newTheme, { path: "/" });
		theme = newTheme;
	}

	if (theme) {
		return await resolve(event, {
			transformPageChunk: ({ html }) => {
				html.replace('data-theme=""', `data-theme="${theme}"`);
			},
		});
	}

	return await resolve(event);
}
