<script>
	import '../app.pcss';
	import '@fontsource-variable/nunito-sans';
	import { page } from '$app/stores';

	export let data;
	let title = data.title;

	// import { classes } from '../lib/theme';

	// const { title } = Astro.props;
	const currentRoute = $page.url.pathname;

	const navLinks = [
		{ href: '/leaderboards/ranked_1v1', text: 'Leaderboard' },
		{ href: '/stats', text: 'Stats' },
		{ href: '/social', text: 'Content' },
		{ href: '/api', text: 'API' },
		{ href: '/tools', text: 'Tools' }
		// { href: "/creators", text: "Creators" },
	];
</script>

<svelte:head>
	<title>{title ? `${title} - Stormgate World` : 'Stormgate World'}</title>
</svelte:head>

<div class="sticky top-0 z-10 w-full border-b border-gray-700/50 bg-gray-800/80 backdrop-blur-md">
	<nav
		class="font-display md:min-h-16 mx-auto flex max-w-screen-2xl flex-wrap items-center gap-y-2 py-2 md:py-4"
	>
		<a
			href="/"
			class="basis-full whitespace-nowrap px-4 pr-2 text-xl font-extrabold text-gray-200 md:basis-auto md:px-7 md:pr-3"
		>
			Stormgate World</a
		>

		<div class="flex flex-auto flex-wrap gap-1 gap-y-2 pl-2 pr-4 md:gap-4 md:px-4 md:pr-7">
			{#each navLinks as { href, text }}
				<a
					{href}
					class={`rounded px-2 py-1 text-sm font-bold xs:text-base md:px-3 md:py-1.5 ${
						currentRoute === href ? 'bg-white/5 text-gray-50' : 'text-gray-200 hover:bg-white/5 '
					}`}
				>
					{text}
				</a>
			{/each}

			<div class="flex-auto"></div>
			<a
				href="https://playstormgate.com"
				target="_blank"
				class="hidden whitespace-nowrap rounded-md border-white/20 bg-gray-100/20 px-6 py-2 text-sm font-bold text-gray-100 transition hover:bg-gray-100/30 sm:block"
				data-class="bg-white rounded-full text-sm mr-4 px-6 py-2 border text-black my-6 inline-block font-bold border-white hover:bg-gray-100 transition"
			>
				Official Website
			</a>
		</div>
	</nav>
</div>

<slot />
