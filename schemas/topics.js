export default {
    name: "topic",
    type: "document",
    title: "Topics",
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
            name: "moduleSummary",
            title: "Module Summary",
            type: "richText",
            description: "A brief description or teaser of the module",
        },
        {
            name: "moduleOverview",
            title: "Module Overview",
            type: "richText",
            description: "The description for the module that appears in a section under the splash image",
        },
        {
            name: "weight",
            title: "Weight",
            type: "reference",
            to: [{ type: "weight" }],
        },
        {
            name: "driveLink",
            title: "Google Drive Link",
            type: "url",
        },
        {
            name: "introVideoLink",
            title: "Intro Video URL",
            type: "url",
        },
        {
            name: 'coverImage',
            title: "Cover Image",
            type: "image",
        },
        {
            name: "coverImageSource",
            title: "Cover Image Source",
            type: "string",
        },
        {
            name: "tags",
            title: "Tags",
            type: "array",
            of: [
                {
                    type: "reference",
                    to: [{ type: "tag" }],
                }
            ],
        },
        {
            name: "termsSummary",
            title: "Terms Summary",
            type: "richText",
            description: "A summary of the Terms section - including sample terms. (Ex. for Voting: Learn about the different types of gerrymandering. Review election methods like simple majority and ranked choice. etc)"
        },
        {
            name: "historySummary",
            title: "History Summary",
            type: "richText",
        },
        {
            name: "leftNarrativeSummary",
            title: "Left Narrative Summary",
            type: "richText",
        },
        {
            name: "rightNarrativeSummary",
            title: "Right Narrative Summary",
            type: "richText",
        },
    ]
}