export default {
    name: "narrative",
    title: "Narratives",
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
            name: "narrativesHistory",
            title: "Narratives History",
            type: "richText",
        },
        {
            name: "leftNarrative",
            title: "Left Narrative",
            type: "richText"
        },
        {
            name: "leftNarrativeFoundations",
            title: "Left Narrative Foundations",
            type: "richText"
        },
        {
            name: "rightNarrative",
            title: "Right Narrative",
            type: "richText",
        },
        {
            name: "rightNarrativeFoundations",
            title: "Right Narrative Foundations",
            type: "richText",
        },
        {
            name: "questions",
            title: "Questions",
            type: "richText",
        },
        {
            name: "module",
            title: "Module",
            type: "reference",
            to: [{ type: "topic" }],
        },
        {
            name: "subunits",
            title: "Subunits",
            type: "array",
            of: [{
                type: "reference",
                to: [{ type: "subunit" }],
            }],
        },
    ]
}