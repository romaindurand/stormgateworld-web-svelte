import { fetchContent } from '$lib';

export async function load() {
	const newsRequest = fetchContent(['news', 'reddit'], {
		count: 8,
		order: 'score_popular',
		since: '15d ago'
	});
	const social = await fetchContent([], { count: 12 });

	const news = (await newsRequest).sort((a, b) => {
		return new Date(b.published_at).getTime() - new Date(a.published_at).getTime();
	});
	return {
		news,
		social
	};
}
