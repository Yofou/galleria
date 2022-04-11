import type { RequestHandler } from "@sveltejs/kit";
import Items from "$lib/items"

export const get: RequestHandler = async ({ params }) => {
	const { index: _index } = params
	const index = parseInt( _index )

	if ( isNaN( index ) || index <= 0 || index > Items.length ) return {
		status: 303,
		headers: {
			location: "/"
		},
	}

	const item = Items[index - 1]
	return {
		body: { index, item }
	}
}
