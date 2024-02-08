<script lang="ts">
	import Widget from './Widget.svelte';
	import { urlencode } from '$lib';
	import { LeaderboardsApi, Race, LeaderboardOrder } from '$api';
	// import { SelectButton, type SelectButtonOption } from '../ui/SelectButton';
	import { classes } from '$lib/theme';
	// import { Pagination } from '../ui/Pagination';
	// import searchIcon from 'lucide-static/icons/search.svg?raw';
	// import { Tooltip } from '../ui/Tooltip';

	// import EsoIcon from '../promos/eso.png?url';
	import type { SelectButtonOption } from './SelectButton.svelte';
	import RankedBadge from './RankedBadge.svelte';
	// import { onMount } from 'svelte';

	export let mode: string = 'ranked_1v1';
	export let faction: Race;
	export let query: string;
	export let page: number = 1;
	export let limit: number;
	export let hideUi: boolean;
	export let order: LeaderboardOrder;

	let count = limit || 100;
	$: count = limit;

	// const [page, setPage] = createSignal(props.page || 1)
	// const [order, setOrder] = createSignal(props.order ?? undefined)
	// const [faction, setFaction] = createSignal(props.faction ?? undefined)
	// const [isPending, start] = useTransition()
	// const [isBrowserNavigation, setIsBrowserNavigation] = createSignal(true)
	// const perPage = 100;
	const infernals = { src: 'game/factions/infernals-small-glow.png' };
	const vanguard = { src: 'game/factions/vanguard-small-glow.png' };

	const factionOptions: SelectButtonOption[] = [
		{ label: 'All Factions', value: 'all' },
		{
			label: 'Infernals',
			value: Race.INFERNALS,
			icon: infernals.src
		},
		{ label: 'Vanguard', value: Race.VANGUARD, icon: vanguard.src }
	];

	// const getFactionOption = (value: string | undefined) =>
	// 	factionOptions.find((option) => option.value === value) || factionOptions[0];

	const getOptions = () => ({
		count,
		page,
		mode,
		race: faction,
		order,
		query
	});
	const options = getOptions();
	const dataPromise = LeaderboardsApi.getLeaderboard(getOptions());
	// const [data] = createResource(getOptions, LeaderboardsApi.getLeaderboard);
	// const [selectedFaction, setSelectedFaction] = createSignal(getFactionOption(props.faction));
	// const totalPages = () => Math.ceil((data()?.total ?? 1000) / count());

	// createEffect(
	// 	on([selectedFaction, query], () =>
	// 		start(() => {
	// 			setPage(1);
	// 			setFaction(
	// 				((f) => (f === 'all' ? undefined : f))(selectedFaction()?.value as Race | 'all')
	// 			);
	// 		})
	// 	)
	// );

	// function updateHistory(options: ReturnType<typeof getOptions>, replace: boolean = false) {
	// 	if (hideUi) return;
	// 	const searchParams = new URLSearchParams(window?.location.search);
	// 	const { page, query, race: faction, order } = options;
	// 	if (order) searchParams.set('order', order);
	// 	else searchParams.delete('order');
	// 	if (faction) searchParams.set('faction', faction);
	// 	else searchParams.delete('faction');
	// 	if (page > 1) searchParams.set('page', page.toString());
	// 	else searchParams.delete('page');
	// 	if (query) searchParams.set('query', query);
	// 	else searchParams.delete('query');

	// 	const newLocation =
	// 		searchParams.toString().length > 0
	// 			? `${window.location.pathname}?${searchParams.toString()}`
	// 			: window.location.pathname;

	// 	if (searchParams.toString() == window.location.search || replace)
	// 		window.history.replaceState(options, '', newLocation);
	// 	else window.history.pushState(options, '', newLocation);
	// }

	// createEffect(() => {
	// 	if (!isBrowserNavigation()) updateHistory(getOptions());
	// });

	// onMount(() => {
	// 	window.addEventListener('popstate', (event) => {
	// 		try {
	// 			const state = event.state as Props;
	// 			setIsBrowserNavigation(true);
	// 			setPage(state.page || 1);
	// 			setSelectedFaction(getFactionOption(state.faction));
	// 			setQuery(state.query || undefined);
	// 		} catch (e) {
	// 			console.error(e);
	// 		} finally {
	// 			window.setTimeout(() => setIsBrowserNavigation(false), 0);
	// 		}
	// 		return;
	// 	});
	// 	updateHistory(getOptions(), true);
	// 	setIsBrowserNavigation(false);
	// });

	// let searchInput!: HTMLInputElement;
</script>

<div>
	<!-- {#if !hideUi}
		<div class="flex flex-wrap justify-between gap-4 py-4">
			<div class="flex flex-wrap justify-between gap-2">
				<SelectButton
					options={factionOptions}
					value={selectedFaction}
					setValue={setSelectedFaction}
					class="flex-auto sm:flex-none"
				/>
				<div class={styles.button.set}>
					<button
						class={classes(
							styles.button.sm,
							styles.button.control,
							'h-full',
							order() !== LeaderboardOrder.MMR ? styles.button.highlighted : 'text-gray-400'
						)}
						onClick={() => start(() => setOrder(LeaderboardOrder.POINTS))}
					>
						RP
					</button>
					<button
						class={classes(
							styles.button.sm,
							styles.button.control,
							'h-full',
							order() === LeaderboardOrder.MMR
								? styles.button.highlighted
								: 'bg-gray-800 text-gray-400'
						)}
						onClick={() => start(() => setOrder(LeaderboardOrder.MMR))}
					>
						MMR
					</button>
				</div>
			</div>
			<div class={classes(styles.button.set, 'flex-auto md:flex-none')}>
				<input
					type="text"
					value={query() ?? ''}
					class={classes(styles.button.sm, 'flex-auto bg-transparent text-white outline-none')}
					placeholder="Search"
					ref={searchInput}
					onKeyDown={(e) => e.key === 'Enter' && setQuery(searchInput?.value)}
				/>
				<button
					class={classes(styles.button.sm, styles.button.control, styles.button.trigger)}
					onClick={() => setQuery(searchInput?.value)}
				>
					<span innerHTML={searchIcon} class="*:w-4 text-gray-200" />
				</button>
			</div>
		</div>
	{/if} -->
	<Widget title="Leaderboard" label="Ranked Beta" classNames="-mx-3 sm:mx-0">
		{#await dataPromise}
			<div>Loading...</div>
		{:then data}
			{#if data?.total == 0}<div class="my-6 text-center text-gray-400">No results found</div>{/if}
			<div class="-mx-3 -mb-3 sm:-mx-4">
				<table
					class="mx-auto w-full table-auto whitespace-nowrap text-left transition-opacity md:text-lg"
				>
					<tbody>
						{#each data?.entries as entry}
							<tr>
								<td
									class="text-md border-b border-gray-700/50 py-2 pr-0.5 text-right font-extrabold text-gray-400 md:pr-2 md:text-lg"
								>
									{entry.rank}.
								</td>
								<td class="border-b border-gray-700/50 pr-0.5 md:pr-2">
									<img
										src={entry.race === 'infernals' ? infernals.src : vanguard.src}
										alt={entry.race}
										class="h-6 w-6"
									/>
								</td>
								<td
									class="max-w-20 truncate border-b border-gray-700/50 pr-2 font-bold text-gray-50 md:max-w-none"
								>
									<div class="flex items-center gap-2">
										<a
											href={`/players/${entry.player_id}-${urlencode(entry.nickname)}`}
											class="truncate outline-none hover:text-white focus:text-white"
										>
											{entry.nickname}
										</a>
										{#if order !== LeaderboardOrder.MMR && entry.rank && entry.rank <= 4}
											<!-- <Tooltip
											content="Top 4 Qualify for EGC Open Tournament"
											class="text-xs text-gray-400"
										>
											<img src={EsoIcon} class="w-6 flex-none" />
										</Tooltip> -->
										{/if}
									</div>
								</td>
								<td
									class="border-b border-gray-700/50 pr-1 text-right text-sm font-bold text-gray-100"
								>
									<div class="flex items-center justify-end gap-1">
										<span>
											{order !== LeaderboardOrder.MMR
												? Math.round(entry.points || 0)
												: Math.round(entry.mmr)}
										</span>
										{#if order !== LeaderboardOrder.MMR}
											<RankedBadge {entry} classnames="min-w-8 w-4 md:w-8" />
										{:else}
											MMR
										{/if}
									</div>
								</td>
								<td class="border-b border-gray-700/50 pr-0.5 text-right text-sm text-gray-100">
									{entry.wins}
									<span class="text-green-400"> W</span>
								</td>
								<td class="border-b border-gray-700/50 pr-0.5 text-right text-sm text-gray-100">
									{entry.losses}
									<span class="text-red-400"> L</span>
								</td>
								<td class="border-b border-gray-700/50 pr-2 text-right text-sm text-gray-100">
									{Math.round((entry.win_rate <= 1 ? entry.win_rate * 100 : entry.win_rate) ?? 0)}%
								</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		{/await}
	</Widget>
	<!-- {#if !hideUi}
		<div class="flex justify-center py-4">
			{#if totalPages() > 0}
				<Pagination
					page={Math.min(totalPages(), page())}
					totalPages={totalPages()}
					setPage={(p) => start(() => setPage(p))}
				/>
			{/if}
		</div>
	{/if} -->
</div>
