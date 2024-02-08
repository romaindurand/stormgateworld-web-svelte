<script lang="ts">
	import type { Content } from '$lib';
	import Timeago from './Timeago.svelte';
	import NewsMeta from './NewsMeta.svelte';
	import RedditMeta from './RedditMeta.svelte';
	import TwitterMeta from './TwitterMeta.svelte';
	import YoutubeMeta from './YoutubeMeta.svelte';
	import ToolMeta from './ToolMeta.svelte';

	export let data: Content;

	const isStormgatenexus = data.source == 'news' && data.author_url?.includes('stormgatenexus.com');
</script>

<!--  -->
<div
	class={`group flex flex-col overflow-hidden rounded-xl border border-gray-800 bg-gray-900/80 shadow-sm backdrop-blur transition focus-within:border-orange-500 hover:border-orange-500 hover:shadow-xl ${
		isStormgatenexus && '!focus-within:!border-[#ffae14] !bg-[#0d1e2a] hover:!border-[#ffae14]'
	}`}
>
	{#if data.image_url?.length}
		<a
			href={data.url}
			rel="noopener ugc"
			target="_blank"
			class="relative overflow-hidden rounded-t-xl focus:outline-none"
		>
			<img
				src={data.image_url}
				alt=""
				class="object- h-full w-full object-cover transition-transform group-focus-within:scale-105 group-hover:scale-105"
			/>
		</a>
	{/if}
	{#if data.image_url?.length}
		<div
			class="pointer-events-none absolute inset-0 bg-cover bg-center opacity-[.15] blur-xl"
			style="background-image: url({data.image_url})"
		/>
	{/if}
	<div class="flex flex-auto flex-col p-6">
		{#if data.source && ['twitter'].includes(data.source)}
			<a
				class:list={[
					'text-gray-100 whitespace-pre-wrap text-md line-clamp-5',
					data.image_url ? 'line-clamp-4' : 'line-clamp-[12]'
				]}
				style="word-break: break-word;"
				href={data.url}
				rel="noopener ugc"
				target="_blank"
				tabindex="-1"
			>
				{(data.description ?? data.title).trim()}
			</a>
		{:else}
			<a
				class={`font-display text-md mb-2 font-bold ${
					data.image_url ? 'line-clamp-3' : 'line-clamp-5'
				} ${isStormgatenexus && 'text-[#ffae14]'}`}
				href={data.url}
				rel="noopener ugc"
				target="_blank"
				tabindex="-1"
			>
				{data.title}
			</a>
			<p
				style="word-break: break-word;"
				class={`line-clamp-2 text-sm text-gray-100 ${
					data.image_url ? 'line-clamp-2' : 'line-clamp-[7]'
				}`}
			>
				{data.description}
			</p>
		{/if}
		<div class="flex-auto"></div>
		<div class="mt-4 flex gap-4 text-sm">
			{#if data.source === 'reddit'}
				<RedditMeta {data} />
			{:else if data.source === 'twitter'}
				<TwitterMeta {data} />
			{:else if data.source === 'youtube'}
				<YoutubeMeta {data} />
			{:else if data.source === 'news'}
				<NewsMeta {data} />
			{:else if data.source === 'tool'}
				<ToolMeta {data} />
			{:else}
				<slot />
			{/if}

			{#if data.published_at}
				<span>
					<Timeago date={new Date(data.published_at)} format="short" />
				</span>
			{/if}
		</div>
	</div>
</div>
