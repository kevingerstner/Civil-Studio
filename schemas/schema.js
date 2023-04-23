import richText from "./richText";
import figure from "./figure,js";
import articles from "./articles";
import teamMember from "./team";
import bias from "./bias";
import politicalCompass from "./politicalCompass";
import currentEvent from "./currentEvent";
import source from "./source";
import classroomContent from "./classroomContent";
import weights from "./weights";
import tags from "./tags";
import topics from "./topics";
import activity from "./activity";
import subunit from "./subunit";
import schoolClass from "./class";
import unit from "./unit";
import narrative from "./narrative";
import histories from "./history";
import newsletter from "./newsletter";

// Then we give our schema to the builder and provide the result to Sanity
export default [
	histories,
	articles,
	newsletter,
	teamMember,
	richText,
	figure,
	politicalCompass,
	bias,
	currentEvent,
	source,
	classroomContent,
	weights,
	tags,
	topics,
	activity,
	subunit,
	schoolClass,
	unit,
	narrative,
];
