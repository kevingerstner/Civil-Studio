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
			source: "title",
			validation: (Rule) => Rule.required(),
		},
	],
};
