import { DIGITAL_REBOUND_HAMMER } from "./digital-rebound-hammer";
import { ULTRASONIC_PULSE_VELOCITY } from "./ultrasonic-pulse-velocity";
import { GROUND_PENETRATING_RADAR } from "./ground-penetrating-radar";
import { GroundPenetratingRadarType } from "@/types/ground-penetrating-radar";
import { UltrasonicPulseVelocityType } from "@/types/ultrasonic-pulse-velocity";
import { DigitalReboundHammerType } from "@/types/digital-rebound-hammer";

export const DATA: (
  | GroundPenetratingRadarType
  | UltrasonicPulseVelocityType
  | DigitalReboundHammerType
)[] = [
  ...DIGITAL_REBOUND_HAMMER,
  ...ULTRASONIC_PULSE_VELOCITY,
  ...GROUND_PENETRATING_RADAR,
];

// this is a temporary file just for the app to work right now please change or delete me once you work on data
