export default {
    name: "unit",
    title: "Units",
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
            name: "class",
            title: "Class",
            type: "reference",
            to: [{ type: "schoolClass" }],
        },
        {
            name: "unitNumber",
            title: "Unit Number",
            type: "number",
        },
        {
            name: "unitName",
            title: "Unit Name",
            type: 'string',
            description: "The name of this unit without the Unit # prefix"
        },
        {
            name: "unitNumberText",
            title: "Unit Number Text",
            type: "string",
            description: "This is the text used to name this unit. Ex: Unit 3"
        },
        {
            name: "descriptionColumnOne",
            title: "Description Column 1",
            type: "richText",
            description: "List topics included in this unit, activities, or a summary. Input items as a bulleted list"
        },
    ]
}