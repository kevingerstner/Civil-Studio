export default {
    type: "document",
    name: "tag",
    title: "Tags",
    fields: [
        {
            name: "name",
            type: "string",
            title: "Name",
        },
        {
            name: "slug",
            type: "slug",
            title: "Slug",
            options: {
                source: "name",
                slugify: (input) => input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
            },
            validation: (Rule) => Rule.required(),
        }
    ]
}