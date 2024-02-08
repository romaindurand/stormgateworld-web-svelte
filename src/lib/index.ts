// place files you want to import through the `$lib` alias in this folder.

export const validContentOrders = ['score_relevant', 'score_popular', 'published_at'] as const;
export const validSources = ['youtube', 'twitter', 'reddit', 'news', 'tool'] as const;

export function urlencode(str?: string | null) {
	if (!str) return '';
	return encodeURIComponent(str).replace(/%20/g, '-').replace(/%2F/g, '-');
}
export async function fetchContent<S extends Content['source'][] = []>(
	sources: S,
	params: FetchContentParams = {}
) {
	const urlParams = new URLSearchParams({
		language: params.language || '',
		source: params.source || '',
		count: params.count?.toString() || '100',
		page: params.page?.toString() || '1',
		order: params.order || 'score_relevant',
		since: params.since || ''
	});

	if (sources.length > 0) {
		sources.forEach((s) => urlParams.append('sources[]', s || ''));
	}

	const url = `https://api.stormgateworld.com/v0/content?${urlParams.toString()}`;
	const response = await fetch(url);
	console.log(`GET ${response.status} ${url}`);
	if (response.status !== 200) throw new Error(await response.text());
	const json = await response.json();
	const content = json.data as FilteredContentType<S[number]>[];
	return content;
}

export function formatNumber(num: number | string) {
	num = Number(num);
	if (num >= 1000000) {
		return (num / 1000000).toFixed(1) + 'M';
	} else if (num >= 1000) {
		return (num / 1000).toFixed(1) + 'K';
	} else {
		return num.toString();
	}
}

export type YoutubeContent = SourceData<'youtube', YoutubeData>;
export type TwitterContent = SourceData<'twitter', TwitterData>;
export type RedditContent = SourceData<'reddit', RedditData>;
export type NewsContent = SourceData<'news'>;
export type ToolContent = SourceData<'tool', ToolData>;
export type Content = YoutubeContent | TwitterContent | RedditContent | NewsContent | ToolContent;

export type SourceData<Source extends string, T = undefined> = {
	id?: number;
	source: Source;
	source_id?: string;
	metadata: T;
	score?: number;
	title: string;
	description: string;
	url: string;
	image_url: string;
	author?: string;
	author_url: string;
	author_image_url?: string;
	published_at: string;
	updated_at?: string;
	created_at?: string;
};

export type TwitterData = {
	likes_count: number;
	retweets_count: number;
	replies_count: number;
};

export type YoutubeData = {
	comments_count: number;
	duration: number;
	likes_count: number;
	views_count: number;
};

export type RedditData = {
	comments_count: number;
	downvotes_count: number;
	upvote_ratio: number;
	upvotes_count: number;
};

export type ToolData = {
	tags: string[];
};

type FilteredContentType<T extends Content['source']> = Extract<Content, { source: T }>;

export type FetchContentOrder = (typeof validContentOrders)[number];
export type FetchContentSource = (typeof validSources)[number];
export type FetchContentParams = {
	language?: string;
	count?: number;
	page?: number;
	order?: FetchContentOrder;
	since?: string;
	source?: FetchContentSource;
};
