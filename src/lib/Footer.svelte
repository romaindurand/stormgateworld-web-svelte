<footer class="mt-8 border-t border-white/10 p-4 md:p-6">
	<div class="mx-auto">
		<nav
			class="flex columns-2 flex-wrap justify-center gap-x-8 gap-y-2 pb-6 sm:space-x-12"
			aria-label="Footer"
		>
			<a href="/api" class="text-sm leading-6 text-gray-100 hover:text-white">API</a>
			<a href="/privacy" class="text-sm leading-6 text-gray-100 hover:text-white">Privacy</a>
			<a href="/about" class="text-sm leading-6 text-gray-100 hover:text-white">About</a>
			<a
				href="https://twitter.com/StormgateWorld"
				target="_blank"
				class="text-sm leading-6 text-gray-100 hover:text-white"
			>
				<i class="ti ti-brand-twitter-filled"></i>
				Twitter
			</a>
			<a href="/rss.xml" target="_blank" class="text-sm leading-6 text-gray-100 hover:text-white">
				<i class="ti ti-rss"></i>
				RSS Feed
			</a>
		</nav>
	</div>
	<div class="flex flex-col items-center gap-4">
		<p class="text-center text-sm leading-5 text-gray-400">
			Stormgate World is a fan-made website and not affiliated with
			<a href="https://playstormgate.com/" class="hover:underline">Stormgate</a>
			or
			<a href="https://frostgiant.com/" class="hover:underline">Frost Giant Studios</a>.
		</p>
		<div
			class="flex flex-auto justify-center whitespace-nowrap text-gray-600 lg:flex-none lg:justify-end"
		>
			<span>Made by</span>
			<a
				href="https://casuals.co"
				class="text-gray-500 hover:text-gray-300"
				target="_blank"
				rel="noopener"
			>
				<img
					src="thecasuals.svg?raw"
					alt="the casuals"
					class="-mt-1 ml-1 inline-block h-4 fill-current"
				/>
			</a>
		</div>
	</div>
</footer>

<div
	class="animate-in fade-in slide-in-from-bottom-full fixed bottom-2 left-2 right-2 z-40 hidden max-w-2xl flex-col rounded-lg border border-gray-700 bg-gray-900/70 opacity-100 shadow-2xl backdrop-blur-xl duration-300 md:flex-row lg:bottom-4 lg:left-4"
	id="consent-banner"
>
	<div
		class="flex-auto border-b border-gray-800 p-5 leading-snug text-gray-100 md:border-b-0 md:border-r"
	>
		<p class="inline-block text-sm font-semibold text-gray-200 md:text-base">
			Can we track your activity on our site?
		</p>
		<p class="mt-2 inline-block text-sm text-gray-300">
			We use cookies and other technologies to measure traffic. <a
				href="/privacy"
				class="text-gray-200">Privacy Policy</a
			>.
		</p>
	</div>
	<div class="flex flex-row md:flex-col">
		<button
			class="order-2 min-w-[120px] basis-1/2 border-l border-gray-800 p-2 text-green-500 hover:bg-gray-800/50 md:order-none md:border-b md:border-l-0"
			id="accept-button"
		>
			Accept
		</button>
		<button class="min-w-[120px] basis-1/2 p-2 text-red-500 hover:bg-gray-800/50" id="reject-button"
			>Reject</button
		>
	</div>
</div>
