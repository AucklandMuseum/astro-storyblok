export function isPreview() {
	return import.meta.env.STORYBLOK_IS_PREVIEW === 'yes'
}