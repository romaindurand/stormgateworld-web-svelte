<script lang="ts">
	export let title: string;
	export let label: string;
	export let classNames: string;
</script>

<div
	class={`relative overflow-x-auto rounded border border-gray-500/40 bg-gray-900/70 p-3 backdrop-blur-md sm:rounded-xl sm:p-4 ${classNames}`}
>
	<div class="sticky left-0 top-0 flex flex-wrap items-center gap-x-5 gap-y-1">
		<h3 class="font-display flex-auto text-xl font-bold text-gray-200">{title}</h3>
		<p class="text-md font-bold text-gray-400">{label}</p>
	</div>
	<div class="mt-3 md:mt-4"><slot /></div>
</div>
