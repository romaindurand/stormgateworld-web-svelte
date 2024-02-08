<script lang="ts">
	import { formatNumber, type TwitterContent } from '$lib';

	export let data: TwitterContent;
</script>

<span class="inline-flex items-center text-orange-400">
	<i class="ti ti-heart mr-1 w-4"></i>
	{formatNumber(data.metadata?.likes_count)}
</span>
<span class="inline-flex items-center text-orange-400">
	<i class="ti ti-repeat mr-1 w-4"></i>
	{formatNumber(data.metadata?.retweets_count)}
</span>
<span class="inline-flex items-center truncate">
	<img src="websites/twitter.com.png" alt="" class="mr-2 h-3" />
	{data.author}
</span>
