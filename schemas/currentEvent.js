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
			options: {
				source: "name",
				slugify: (input) => input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
			},
			validation: (Rule) => Rule.required(),
		},
		{
			name: "lastUpdated",
			title: "Last Updated",
			type: "date",
			options: {
				dateFormat: "MM/DD/YYYY",
			}
		},
		{
			name: "body",
			title: "Body",
			type: "richText",
			group: "content",
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
			name: "terms",
			title: "Terms",
			type: "richText",
			group: "content",
		},
		{
			name: "histories",
			title: "History Articles",
			type: "array",
			of: [
				{
					type: "reference",
					to: [{ type: "history" }]
				}
			],
		},
		{
			name: "leftNarrative",
			title: "Left Narrative",
			type: "richText",
		},
		{
			name: "rightNarrative",
			title: "Right Narrative",
			type: "richText",
		},
		{
			name: "bipartisanNarrative",
			title: "Bipartisan Narrative",
			type: "richText",
		},
		{
			name: "activities",
			title: "Activities",
			type: "array",
			of: [
				{
					type: "reference",
					to: [{ type: "activity" }]
				}
			],
		},
		{
			name: "questions",
			title: "Questions",
			type: "richText",
		},
		{
			name: "classroomContent",
			title: "Classroom Content",
			type: "array",
			of: [
				{
					type: "reference",
					to: [{ type: "classroomContent" }]
				}
			],
		},
		{
			name: "module",
			title: "Module",
			type: "reference",
			to: [{ type: "topic" }]
		},
		{
			name: "weight",
			title: "Weight",
			type: "reference",
			to: [{ type: "weight" }]
		},
		{
			name: "weightDescription",
			title: "Content Weight Description",
			type: "richText",
		},
		{
			name: "tags",
			title: "Tags",
			type: "array",
			of: [
				{
					type: "reference",
					to: [{ type: "tag" }]
				}
			],
		},
		{
			name: "subunits",
			title: "Subunits",
			type: "array",
			of: [
				{
					type: "reference",
					to: [{ type: "subunit" }]
				}
			],
		},
	],
};
