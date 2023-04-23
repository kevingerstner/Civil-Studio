export default {
    name: "activity",
    title: "Activities",
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
        },
        {
            name: "module",
            title: "Module",
            type: "reference",
            to: [{ type: "topic" }],
        },
        {
            name: "topicAgnostic",
            title: "Topic Agnostic",
            type: "boolean",
            description: "Select YES if this activity does not have a specific module",
        },
        {
            name: "activityLink",
            title: "Activity Link",
            type: "url",
            description: "The URL for the activity in Google Drive",
        },
        {
            name: "description",
            title: "Description",
            type: "string",
            description: "A brief summary of the activity"
        },
        {
            name: "timeToComplete",
            title: "Time To Complete",
            type: "number",
            description: "How much time (in minutes) this activity is estimated to take to complete",
        },
        {
            name: "format",
            title: "Format",
            type: "string",
            options: {
                list: [{ title: "Google Docs", value: "google-docs" }, { title: "Google Slides", value: "google-slides" }, { title: "PDF", value: 'pdf' }]
            }
        },
        {
            name: "weight",
            title: "Weight",
            type: "reference",
            to: [{ type: "weight" }],
        },
        {
            name: "embed",
            title: "Embed",
            type: "richText",
        },
        {
            name: "groupWork",
            title: "Group Work",
            type: "boolean",
            initialValue: false,
            description: "YES if this activity is collaborative, NO if this activity is independent."
        },
        {
            name: "inClass",
            title: "In Class",
            type: "boolean",
            initialValue: false,
            description: "Select YES if this activity can be done in class",
        },
        {
            name: "atHome",
            title: "At Home",
            type: "boolean",
            initialValue: false,
            description: "Select YES if this activity can be done at home",
        },
        {
            name: "coverImage",
            title: "Cover Image",
            type: "image",
        },
        {
            name: "subunits",
            title: "Subunits",
            type: "array",
            of: [{
                type: "reference",
                to: [{ type: "subunit" }],
            }
            ]
        },
    ]
}