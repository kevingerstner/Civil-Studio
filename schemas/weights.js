export default {
    name: "weight",
    title: "Content Weight",
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
            validation: (Rule) => Rule.required(),
        },
        {
            name: "description",
            title: "Description",
            description: "A short description of what this weight means",
            type: "string",
        },
        {
            name: "value",
            title: "Weight Value",
            type: "number",
            description: "The numerical value associated with this weight (5 is Very Heavy)"
        },
        {
            name: "backgroundColor",
            title: "Background Color",
            type: "color",
        },
        {
            name: "textColor",
            title: "Text Color",
            type: "color",
        },
    ]
}