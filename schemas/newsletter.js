export default {
    name: "newsletter",
    title: "Newsletters",
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
            name: "publishDate",
            title: "Publish Date",
            type: "date",
            options: {
                dateFormat: "MM/DD/YYYY",
            }
        },
        {
            name: "newsletterSummary",
            title: "Newsletter Summary",
            type: "text",
            description: "A 1-2 sentence, very short summary of this newsletter that will appear in SEO and in the article archive.",
        },
        {
            name: "introduction",
            title: "Introcution",
            type: "richText",
            description: "Usually begins with Good morning....",
        },
        {
            name: "articles",
            title: "Articles",
            type: "array",
            of: [
                {
                    type: "reference",
                    to: [{ type: "article" }],
                },
            ],
        },
        {
            name: "inOtherNews",
            title: "In Other News",
            type: "richText",
            description: "Additional news pieces (quick headlines) to include in this newsletter",
        },
        {
            name: "goodNews",
            title: "Good News",
            type: "richText",
        },
        {
            name: "closing",
            title: "Closing",
            type: "richText",
        },
        {
            name: "tags",
            title: "Tags",
            type: "array",
            of: [
                {
                    type: "reference",
                    to: [{ type: "tag" }],
                },
            ],
        },
        {
            name: "coverImage",
            title: "Cover Image",
            type: "image",
        },
    ]
}