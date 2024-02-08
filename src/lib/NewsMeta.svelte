<script lang="ts">
	import type { Content } from '$lib';

	export let data: Content;

	const isStormgatenexus = data.source == 'news' && data.author_url.includes('stormgatenexus.com');
	function prefixUrl(url: string) {
		if (url.startsWith('http')) {
			return url;
		}
		return `https://${url}`;
	}
</script>

{#if isStormgatenexus}
	<a
		class="inline-flex items-center"
		href="https://stormgatenexus.com"
		rel="noopener ugc"
		target="_blank"
	>
		<img src="websites/stormgatenexus.com.png" class="mr-2 h-4" alt="Stormgate Nexus" />
		<span>Stormgate Nexus</span>
	</a>
{:else}
	<span class="inline-flex items-center text-orange-400">
		<i class="ti ti-rss w-4" />
	</span>

	{#if data.author_url}
		<a
			class="inline-flex items-center whitespace-nowrap"
			href={prefixUrl(data.author_url)}
			rel="noopener ugc"
			target="_blank"
		>
			{#if data.author_image_url}<img
					src={data.author_image_url}
					alt="avatar"
					class="mr-2 h-3"
				/>{/if}
			{data.author}
		</a>
	{:else}
		<span class="truncate">
			{#if data.author_image_url}<img
					src={data.author_image_url}
					alt="avatar"
					class="mr-2 h-3"
				/>{/if}
			{data.author}
		</span>
	{/if}
{/if}
