import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./schemas/schema";
import { color, colorInput } from "@sanity/color-input";
import { codeInput } from "@sanity/code-input";

export default defineConfig({
	title: "civil-ed",
	projectId: "1gj6hid1",
	dataset: "production",
	plugins: [deskTool(), colorInput(), codeInput()],
	schema: {
		types: schemas,
	},
});
