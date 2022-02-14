1
00:00:01,000 --> 00:00:05,999
import { Temporal } from "@js-temporal/polyfill";
const instant = Temporal.Now.instant();
console.log(instant.epochNanoseconds);
const turtle = [0.000,0.09];
controller(turtle);