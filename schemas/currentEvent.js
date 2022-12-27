export default {
	name: "currentEvent",
	title: "Current Event",
	type: "document",
	groups: [
		{
			name: "seo",
			title: "SEO",
		},
		{
			name: "content",
			title: "Content",
		},
	],
	fields: [
		{
			name: "name",
			title: "Name",
			type: "string",
			group: ["content", "seo"],
			validation: (Rule) => Rule.required(),
		},
		{
			name: "slug",
			title: "Slug",
			type: "slug",
			group: "seo",
			validation: (Rule) => Rule.required(),
		},
		{
			name: "lastUpdated",
			title: "Last Updated",
			type: "date",
			validation: (Rule) => Rule.required(),
		},
		{
			name: "summary",
			title: "Summary",
			type: "string",
			description: "1-2 short sentences describing this current event",
		},
		{
			name: "coverImage",
			title: "Cover Image",
			type: "figure",
		},
		{
			name: "googleDriveLink",
			title: "Google Drive Link",
			type: "url",
		},
		{
			name: "body",
			title: "Body",
			type: "richText",
			group: "content",
			validation: (Rule) => Rule.required(),
		},
	],
};
