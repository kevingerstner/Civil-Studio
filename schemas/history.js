export default {
    name: "history",
    title: "Histories",
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
        {
            name: "date",
            title: "Date",
            type: "date",
            description: "The starting date this historical event occurred. This is not visible to users, but is required for sorting histories by date.",
            options: {
                dateFormat: 'MM/DD/YYYY',
            }
        },
        {
            name: "years",
            title: "Year(s)",
            type: "string",
            description: "Enter the year or year range (2000-2010) for this history.",
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
            name: "coverImage",
            title: "Cover Image",
            type: "image",
        },
        {
            name: "summary",
            title: "Summary",
            type: "text",
            description: "A short summary of this history used in thumbnails and SEO (100-160 characters)",
        },
        {
            name: "introduction",
            title: "Introduction",
            type: "richText",
        },
        {
            name: "body",
            title: "Body",
            type: "richText"
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
            ]
        },
        {
            name: "currentEvents",
            title: "Current Events",
            type: "array",
            of: [
                {
                    type: "reference",
                    to: [{ type: "currentEvent" }]
                }
            ]
        },
        {
            name: "googleSlides",
            title: "Google Slides",
            type: "richText",
            description: "1) Go to the slideshow and click File > Publish to the Web. 2) Click the Embed tab, then Publish. 3) Copy the embed code. 4) In this CMS field, click the (+) button and then the Embed (< >) button. 5) Paste the code into this HTML Embed field",
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
            ]
        },
    ],
}