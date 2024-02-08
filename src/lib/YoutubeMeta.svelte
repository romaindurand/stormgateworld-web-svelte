<script lang="ts">
	import { formatNumber, type YoutubeContent } from '$lib';

	export let data: YoutubeContent;
</script>

<span class="inline-flex items-center text-orange-400">
	<i class="ti ti-eye mr-1 w-4"></i>
	{formatNumber(data.metadata?.views_count)}
</span>
<!--
<a class="inline-flex items-center text-orange-400">
  <i class="ti ti-thumb-up mr-1 w-4"></i>
  {formatNumber(data.metadata?.likes_count)}
</a>
-->
{#if data.author}
	<span class="inline-flex items-center truncate">
		<img src="websites/youtube.com.png" alt="" class="mr-2 h-3" />
		{data.author}
	</span>
{/if}
