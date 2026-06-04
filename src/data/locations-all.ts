// Single import point for ALL locations (~500+)
export { type LocationLight } from "./locations-extended";
import { locationsExtended, topLocations as topLocationsBase } from "./locations-extended";
import { locationsAdditional } from "./locations-extended-2";
import { locationsAdditional3 } from "./locations-extended-3";

export const allLocations = [...locationsExtended, ...locationsAdditional, ...locationsAdditional3];

// Top 25 locations for generateStaticParams pre-builds
export const topLocations = topLocationsBase;

export default allLocations;
