export default {
    name: "schoolClass",
    title: "Class",
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
            name: "shortName",
            title: "Short Name",
            type: "string",
        },
        {
            name: "icon",
            title: "Icon",
            type: "image",
        },
        {
            name: "color",
            title: "Color",
            type: "color",
        },
        {
            name: "openGraphImage",
            title: "Open Graph Image",
            type: "image",
        },
    ]
}