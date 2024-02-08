<script lang="ts">
	import type {
		LeaderboardEntryResponse,
		MatchParticipantPlayerLeaderboardEntryResponse
	} from '$api';
	// import { Tooltip } from './Tooltip';

	export let entry: MatchParticipantPlayerLeaderboardEntryResponse | LeaderboardEntryResponse;
	export let unranked: boolean = false;
	// export let size: keyof typeof sizes = 'm';
	export let classnames: string;

	function getImagePath(name: string) {
		return `game/leagues/${name}.png`;
	}

	// const sizes = { s: 32, m: 64, l: 128, xl: 256 };
	let src: string;
	if (unranked || !entry) {
		src = getImagePath('unranked');
	} else {
		if (entry.league && entry.tier) {
			src = getImagePath(entry.league + entry.tier.toString());
		} else {
			src = getImagePath('unranked');
		}
	}

	const label = () =>
		unranked || !entry?.league
			? 'Unranked'
			: `${entry.league.charAt(0).toUpperCase() + entry.league.substring(1)} ${entry.tier}`;
</script>

<!-- <Tooltip content={label()}> -->
<img alt={label()} {src} class={classnames} />
<!-- </Tooltip> -->
