export default {
	name: "category",
	title: "Category",
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
	],
};
