<script lang="ts">
	import { formatNumber, type RedditContent } from '$lib';

	export let data: RedditContent;
</script>

<span class="inline-flex items-center text-orange-400">
	<i class="ti ti-arrow-up mr-1 w-4"></i>
	{formatNumber(data.metadata.upvotes_count - data.metadata.downvotes_count)}
</span>
<a
	class="inline-flex items-center truncate"
	href={`https://reddit.com/r/${data.author_url}`}
	target="_blank"
	rel="noopener ugc"
>
	<img src="websites/reddit.com.png" alt="reddit" class="mr-2 h-3" />
	r/{data.author}
</a>
