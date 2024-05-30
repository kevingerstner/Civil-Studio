export default {
    name: "subunit",
    title: "Subunits",
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
            name: "underConstruction",
            title: "Under Construction?",
            type: "boolean",
            initialValue: false,
        },
        {
            name: "class",
            title: "Class",
            type: "reference",
            to: [{ type: "schoolClass" }],
        },
        {
            name: "unit",
            title: "Unit",
            type: "reference",
            to: [{ type: "unit" }],
        },
        {
            name: "unitNumber",
            title: "Unit Number",
            type: "string",
        },
        {
            name: "subunitNumber",
            title: "Subunit Number",
            type: "number",
        },
        {
            name: "narrativesDescription",
            title: "Narratives Description",
            type: "richText",
        },
        {
            name: "narratives",
            title: "Narratives",
            type: "array",
            of: [
                {
                    type: "reference",
                    to: [{ type: "narrative" }]
                }
            ],
        },
        {
            name: "historyDescription",
            title: "History Description",
            type: "richText",
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
        },
        {
            name: "activitiesDescription",
            title: "Activities Description",
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
            name: "articlesDescription",
            title: "Articles Description",
            type: "richText",
        },
        {
            name: "articles",
            title: "Articles",
            type: "array",
            of: [
                {
                    type: "reference",
                    to: [{ type: "article" }]
                }
            ],
        },
        {
            name: "currentEventsDescription",
            title: "Current Events Description",
            type: "richText",
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
            ],
        },
    ]
}