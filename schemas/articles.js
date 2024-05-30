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
			name: "name",
			title: "Name",
			type: "string",
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
			name: "publishDate",
			type: "date",
			title: "Date Published",
			validation: (Rule) => Rule.required(),
			options: {
				dateFormat: "MM/DD/YYYY",
			}
		},
		{
			name: "tags",
			type: "array",
			of: [
				{
					type: "reference",
					to: [{ type: "tag" }],
				},
			],
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
			name: "coverImage",
			title: "Cover Image",
			type: "figure",
		},
		{
			name: "slidesEmbed",
			title: "Slides Embed",
			type: "richText",
		},
		{
			name: "googleSlides",
			title: "Google Slides",
			type: "code",
			options: {
				language: "html",
			},
			withFilename: false,
		},
		{
			name: "summary",
			title: "Summary",
			type: "string",
		},
		{
			name: "body",
			title: "Body",
			type: "richText",
		},
		{
			name: "narrativeBody",
			title: "Newsletter Body",
			type: "richText",
		},
		{
			name: "leftNarrative",
			title: "Left Narrative",
			type: "richText",
		},
		{
			name: "leanLeftNarrative",
			title: "Lean Left Narrative",
			type: "richText",
		},
		{
			name: "leanRightNarrative",
			title: "Lean Right Narrative",
			type: "richText",
		},
		{
			name: "rightNarrative",
			title: "Right Narrative",
			type: "richText",
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
			name: "histories",
			title: "Histories",
			type: "array",
			of: [
				{
					type: "reference",
					to: [{ type: "history" }]
				}
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
		{
			name: "readingComprehensionLink",
			title: "Reading Comprehension Link",
			type: "url",
			group: "references",
		},
		{
			name: "currentEvents",
			title: "Current Events",
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
			name: "apGovSubunits",
			title: "AP Gov Subunits",
			type: "array",
			of: [
				{
					type: "reference",
					to: [{ type: "subunit" }],
				},
			],
			group: "references",
		},
		{
			name: "civicsSubunits",
			title: "Civics Subunits",
			type: "array",
			of: [
				{
					type: "reference",
					to: [{ type: "subunit" }],
				},
			],
			group: "references",
		},
	],
	orderings: [
		{
			title: "Name (A->Z)",
			name: "nameAsc",
			by: [
				{ field: 'name', direction: 'asc' },
			]
		},
		{
			title: 'Date Published, New',
			name: 'datePublishedNew',
			by: [
				{ field: 'datePublished', direction: 'asc' }
			]
		}
	]
};
