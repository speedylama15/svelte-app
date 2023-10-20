import { redirect } from "@sveltejs/kit";

export const actions = {
	setTheme: async ({ url, cookies }) => {
		const theme = url.searchParams.get("theme");

		if (theme) {
			cookies.set("theme", theme, {
				path: "/",
			});
		}
	},
};
