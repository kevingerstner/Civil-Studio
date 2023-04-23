export default {
	name: "teamMember",
	type: "document",
	title: "Team Member",
	fields: [
		{
			name: "name",
			type: "string",
			title: "Name",
		},
		{
			name: "firstName",
			type: "string",
			title: "First Name",
		},
		{
			name: "lastName",
			type: "string",
			title: "Last Name",
		},
		{
			name: "department",
			type: "string",
			options: {
				list: [
					{
						title: "Leadership",
						value: "leadership",
					},
					{
						title: "Content",
						value: "content",
					},
					{
						title: "Development",
						value: "development",
					},
				],
			},
		},
		{
			name: "jobTitle",
			type: "string",
			title: "Job Title",
		},
		{
			name: "bio",
			type: "richText",
			title: "Bio",
		},
		{
			name: "profilePicture",
			type: "figure",
			title: "Profile Picture",
		},
		{
			name: "politicalCompass",
			type: "politicalCompass",
			title: "Political Compass",
		},
		{
			name: "mostImportantIssues",
			type: "richText",
			title: "Most Important Issues",
		},
		{
			name: "twitterLink",
			title: "Twitter Link",
			type: "url",
		},
		{
			name: "linkedInLink",
			title: "LinkedIn Link",
			type: "url",
		},
		{
			name: "bias",
			type: "reference",
			to: { type: "bias" },
		},
	],
	preview: {
		select: {
			title: "name",
			media: "profilePicture.image",
		},
	},
};
