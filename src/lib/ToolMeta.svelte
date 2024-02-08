<script lang="ts">
	import type { ToolContent } from '$lib';
	import { styles } from './theme';

	export let data: ToolContent;
</script>

{#each data.metadata?.tags as tag}
	<div class={styles.tag.base}>{tag}</div>
{/each}
