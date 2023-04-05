export const getCacheValue = (json: string) => {
	return fetch('https://voicechatgpt.ru/cache/', {
		method: 'POST',
		body: json,
	}).then(res => res.json())
}
