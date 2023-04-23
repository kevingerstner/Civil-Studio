export default {
	type: "document",
	name: "bias",
	title: "Bias",
	fields: [
		{
			name: "name",
			type: "string",
			title: "Name",
		},
		{
			name: "biasColor",
			type: "color",
			title: "Bias Color",
		},
		{
			name: "contrastColor",
			type: "color",
			title: "Contrast Color",
			description: "A color that contrasts with the Bias Color",
		},
	],
};
