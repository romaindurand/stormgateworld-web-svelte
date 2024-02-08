<script lang="ts">
	import Card from '$lib/Card.svelte';
	import Timeago from '$lib/Timeago.svelte';
	import NewsMeta from '$lib/NewsMeta.svelte';
	import RedditMeta from '$lib/RedditMeta.svelte';
	import Box from '$lib/Box.svelte';
	import { styles } from '$lib/theme.js';
	import Bookmarks from '$lib/Bookmarks.svelte';
	import Leaderboard from '$lib/Leaderboard.svelte';
	// import Timeago from '../components/Timeago.astro';
	// import RedditMeta from '../components/sources/RedditMeta.astro';
	// import Card from '../components/Card.astro';
	// import unescape from 'lodash/unescape';
	// import NewsMeta from '../components/sources/NewsMeta.astro';
	// import { Image } from 'astro:assets';
	// import { Leaderboard } from '../components/views/Leaderboard';
	// import { styles } from '../lib/theme';

	export let data;
	$: news = data.news;
	$: social = data.social;
</script>

<div class="absolute top-0 -z-0 h-[800px] w-full">
	<img src="hero.png" alt="" class="absolute h-full w-full object-cover" />
	<div class="absolute inset-0 bg-gradient-to-b from-transparent to-gray-950"></div>
</div>
<section class="relative mx-auto max-w-screen-2xl px-4">
	<main>
		<div class="px-2 pb-6 pt-12">
			<img src="stormgate-logo-white.png" alt="Stormgate Logo" class="-ml-2 h-16 w-auto" />
			<p class="my-6 text-2xl font-bold">Get ready for the launch of Stormgate!</p>

			<p class="my-4 max-w-xl text-lg font-medium leading-relaxed">
				News, gameplay footage, community content and more – all in one place. Stormgate World
				gathers the best of Reddit, News, YouTube, and other social media for you to enjoy. And
				soon: Leaderboards!
			</p>
		</div>

		<div class="my-8 flex flex-col gap-8 lg:flex-row">
			<div class="flex-auto">
				<Box title={'Latest News'}>
					<div class="space-y-6">
						{#each news as data}
							<div
								class="-mx-4 flex flex-col gap-6 rounded-xl px-4 py-4 transition-all hover:bg-gray-200/10 xl:flex-row"
							>
								<div class="flex-auto space-y-4">
									<a href={data.url} target="_blank" rel="noopener">
										<h2 class="font-display max-w-prose text-xl font-bold text-gray-50">
											{data.title}
										</h2>
									</a>
									{#if data.description}
										<p class="line-clamp-2 max-w-prose leading-relaxed text-gray-100">
											{data.description}
										</p>
									{/if}
									<div class="flex flex-wrap gap-3 text-sm text-gray-300">
										{#if data.source === 'reddit'}
											<RedditMeta {data} />
										{:else}
											<NewsMeta {data} />
										{/if}
										{#if data.published_at}
											<span class="block truncate">
												<Timeago date={new Date(data.published_at)} />
											</span>
										{/if}
									</div>
								</div>
								{#if data.image_url}
									<a
										href={data.url}
										target="_blank"
										rel="noopener"
										class="order-first xl:order-last"
									>
										<img
											src={unescape(data.image_url)}
											alt={data.title}
											class="aspect-video h-40 rounded-lg object-cover xl:h-24"
										/>
									</a>
								{/if}
							</div>
						{/each}
					</div>
					<div class="pt-6 text-center">
						<a class="text-white hover:text-gray-100" href="/social">
							View More News <span aria-hidden="true">→</span>
						</a>
					</div>
				</Box>
			</div>
			<div class="flex-shrink-0 flex-grow basis-1/3 space-y-8">
				<div>
					<Leaderboard limit={15} hideUi />
					<div class="mt-4 flex justify-end">
						<a href="/leaderboards/ranked_1v1" class={`${styles.button.base} ${styles.button.md}`}
							>View full Leaderboard →</a
						>
					</div>
				</div>
				<Box title="Stay On Top of the Hype!">
					<p class="text-md my-4 max-w-xl font-medium leading-relaxed">
						Tired of clicking through dozens of websites and social media accounts to find the
						latest news about Stormgate?
					</p>

					<p class="text-md my-4 max-w-xl font-medium leading-relaxed">
						Our <a href="/social" class="font-semibold underline">Social Feed</a> aggregates everything
						you see to know in single place.
					</p>
				</Box>
				<!-- <Box title="About the Game">
            <p class="text-md my-4 max-w-xl font-medium leading-relaxed">
              Developed by the talented Blizzard-veterans at FrostGiant Studios, Stormgate® is a highly anticipated
              free-to-play RTS Game coming to PC, with a private beta in mid-2023. Play solo or co-op in a futuristic
              settings with The Human Resistance, The Demonic Invaders and other to be revealed factions.
            </p>

            <p class="text-md max-w-xl font-medium leading-relaxed">
              On <em>Stormgate World</em>, you can find recent updates, community links, and other stuff to get you
              excited about the game.
            </p>
            <a
              href="https://playstormgate.com"
              target="_blank"
              class="my-6 mr-4 inline-block rounded-full border border-white bg-white px-6 py-2 text-sm font-bold text-black transition hover:bg-gray-100"
            >
              Sign up for beta
            </a>
            <a
              href="/tldr"
              class="my-6 inline-block rounded-full border border-white bg-transparent px-6 py-2 text-sm font-bold text-white transition hover:bg-white/20"
            >
              Learn more
            </a>

            <p class="text-sm text-gray-200">
              This is fan-made website brought to you by the creators of
              <a class="underline" href="https://aoe4world.com" target="_blank">AoE4 World</a>, the biggest community
              site for Age of Empires IV.
            </p>
          </Box> -->
				<Box title={'Bookmarks'}>
					<Bookmarks />
				</Box>
			</div>
		</div>
		<div class="mt-20">
			<div class="my-4 flex flex-col items-center">
				<h3 class="font-display flex-auto text-center text-4xl font-bold text-white/70">
					<a href="/social">
						S<img
							src="/portal.svg"
							class="inline h-[0.7em] opacity-70"
							aria-hidden="true"
							alt="o"
						/>cial Feed
					</a>
				</h3>
				<p class="my-4 max-w-prose text-center text-lg">
					Everything everywhere posted about Stormgate, all at once
				</p>
			</div>
			<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
				{#each social as c}
					<Card data={c} />
				{/each}
			</div>
			<div class="pt-6 text-center">
				<a class="text-white hover:text-gray-100" href="/social">
					View More <span aria-hidden="true">→</span>
				</a>
			</div>
		</div>
	</main>
</section>
