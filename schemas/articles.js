export default {
	name: "article",
	title: "Article",
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
		{
			name: "references",
			title: "References",
		},
	],
	fields: [
		{
			name: "slug",
			title: "Slug",
			type: "slug",
			source: "title",
			group: "seo",
			validation: (Rule) => Rule.required(),
		},
		{
			name: "publishDate",
			type: "date",
			title: "Date Published",
			validation: (Rule) => Rule.required(),
		},
		{
			name: "title",
			type: "string",
			title: "Title",
		},
		{
			name: "author",
			type: "array",
			of: [
				{
					type: "reference",
					to: [{ type: "teamMember" }],
				},
			],
		},
		{
			name: "category",
			type: "array",
			of: [
				{
					type: "reference",
					to: [{ type: "category" }],
				},
			],
		},
		{
			name: "coverImage",
			type: "figure",
			title: "Cover Image",
		},
		{
			name: "summary",
			type: "string",
			title: "Summary",
		},
		{
			name: "body",
			type: "richText",
			title: "Body",
		},
		{
			name: "leftNarrative",
			type: "richText",
			title: "Left Narrative",
		},
		{
			name: "leanLeftNarrative",
			type: "richText",
			title: "Lean Left Narrative",
		},
		{
			name: "leanRightNarrative",
			type: "richText",
			title: "Lean Right Narrative",
		},
		{
			name: "rightNarrative",
			type: "richText",
			title: "Right Narrative",
		},
		{
			name: "discussionQuestions",
			type: "richText",
			title: "Discussion Questions",
			group: "content",
		},
		{
			name: "qAndA",
			type: "richText",
			title: "Q & A",
			group: "content",
		},
		{
			name: "classroomContents",
			title: "Classroom Content",
			group: "references",
			type: "array",
			of: [
				{
					type: "reference",
					to: [{ type: "classroomContent" }],
				},
			],
		},
		{
			name: "currentEvents",
			type: "array",
			of: [
				{
					type: "reference",
					to: [{ type: "currentEvent" }],
				},
			],
			group: "references",
		},
		{
			name: "googleSlidesLink",
			type: "url",
			title: "Google Slides Link",
			group: "references",
		},
		{
			name: "kahootLink",
			type: "url",
			title: "Kahoot Link",
			group: "references",
		},
	],
};
