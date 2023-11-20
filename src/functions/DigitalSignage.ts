export const Resolution: Record<any, number[]> = {
	"SD": [640,480],
	"HD": [1280,720],
	"FHD": [1920,1080],
	"UHD": [3840,2160],
}

export const ResolutionWidth = (size: string | number) => Resolution[size][0]
export const ResolutionHeight = (size: string | number) => Resolution[size][1]