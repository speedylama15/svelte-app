<script>
	import { enhance } from "$app/forms";

	console.log("LAYOUT LOAD");

	const changeThemeAction = ({ action }) => {
		const theme = action.searchParams.get("theme");

		if (theme) {
			document.documentElement.setAttribute("data-theme", theme);
		}
	};
</script>

<main>
	<nav>
		<a href="/">SVELTEAPP</a>

		<a href="/about">About</a>

		<form method="POST" use:enhance={changeThemeAction}>
			<button formaction="/?/setTheme&theme=dark">Dark</button>
			<button formaction="/?/setTheme&theme=light">Light</button>
		</form>
	</nav>

	<slot />
</main>

<style>
</style>
