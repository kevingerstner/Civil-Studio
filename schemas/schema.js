import articles from "./articles";
import teamMember from "./team";
import richText from "./richText";
import figure from "./figure,js";
import category from "./category.js";
import bias from "./bias";
import politicalCompass from "./politicalCompass";
import currentEvent from "./currentEvent";
import source from "./source";
import classroomContent from "./classroomContent";

// Then we give our schema to the builder and provide the result to Sanity
export default [
	articles,
	teamMember,
	richText,
	figure,
	politicalCompass,
	bias,
	category,
	currentEvent,
	source,
	classroomContent,
];
