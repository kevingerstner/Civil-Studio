export default {
	name: "classroomContent",
	title: "Classroom Content",
	type: "document",
	fields: [
		{
			name: "name",
			title: "Name",
			type: "string",
		},
		{
			name: "slug",
			title: "Slug",
			type: "slug",
			options: {
				source: "name",
				slugify: (input) => input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
			},
		},
		{
			name: "image",
			type: "image",
			title: "Thumbnail",
		},
		{
			name: "source",
			title: "Source",
			type: "reference",
			to: [{ type: "source" }],
		},
		{
			name: "url",
			title: "Content URL",
			type: "url",
		},
		{
			name: "bias",
			title: "Bias",
			type: "reference",
			to: [{ type: "bias" }],
		},
		{
			name: "biasSource",
			title: "Bias Rating Source",
			type: "string",
			description: "Was the bias determined by our team [Team Rating] or AllSides?",
			options: {
				list: ["AllSides", "Team Rating"],
			},
		},
		{
			name: "type",
			title: "Type",
			type: "string",
			options: {
				list: [
					"Video",
					"Academic",
					"Article",
					"Podcast",
					"Video",
					"Press Release",
					"Book",
					"Database",
					"Interactive",
					"Report",
				],
			},
		},
		{
			name: "datePosted",
			title: "Date Posted",
			type: "date",
		},
		{
			name: "summary",
			title: "Summary",
			type: "text",
		},
		{
			name: "discussionQuestions",
			title: "Discussion Questions",
			type: "richText",
			description:
				"If there are discussion questions for this source, add them here in the format of a numbered list",
		},
		{
			name: "timeToView",
			title: "Time to View",
			type: "number",
			description: "How long it will take to view this content (in minutes)",
		},
	],
};
