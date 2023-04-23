export default {
	name: "source",
	title: "Source",
	type: "document",
	fields: [
		{
			name: "name",
			title: "Name",
			type: "string",
			validation: (Rule) => Rule.required(),
		},
		{
			name: "slug",
			title: "Slug",
			type: "slug",
			options: {
				source: "name",
				slugify: (input) => input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
			},
			validation: (Rule) => Rule.required(),
		},
		{
			name: "bias",
			title: "Bias",
			type: "reference",
			to: [{ type: "bias" }],
		},
		{
			name: "sourceUrl",
			title: "Source URL",
			type: "url",
		},
		{
			name: "allSidesUrl",
			title: "AllSides URL",
			type: "url",
		},
	],
	orderings: [
		{
			title: "Name",
			name: "name",
			by: [
				{ field: 'name', direction: "asc" }
			]
		}
	]
};
