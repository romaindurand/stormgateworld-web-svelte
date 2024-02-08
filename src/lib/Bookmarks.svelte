<script lang="ts">
	import websites from '../data/websites';
</script>

<ul class="flex flex-col">
	{#each websites as website}
		<li
			class="-mx-4 block border-b border-gray-300/30 px-4 py-4 transition last:border-b-0 hover:bg-gray-600"
		>
			<a href={website.url} class="flex items-center gap-6 rounded" target="_blank" rel="noopener">
				<img src={website.icon} alt={website.title} class="rounded-xs h-8 w-8 object-cover" />
				<div>
					<p class="font-display font-bold">{website.title}</p>
					<p class="font-display text-gray-50">{website.subtitle}</p>
				</div>
			</a>
		</li>
	{/each}
</ul>
