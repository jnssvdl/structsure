import { Machine } from "@/types/machine";
import { Activity, Hammer, Radar } from "lucide-react";

export const MACHINES: Machine[] = [
  {
    id: "ultrasonic-pulse-velocity",
    name: "Ultrasonic Pulse Velocity (UPV)",
    description: `Ultrasonic Pulse Velocity (UPV) is a non-destructive testing method used to assess the quality and uniformity of concrete or other solid materials by measuring the speed of an ultrasonic pulse passing through the material. A transducer emits high-frequency sound waves into the material, and the time it takes for the pulse to travel from the transmitter to the receiver is recorded. The velocity of this pulse is then calculated and interpreted: higher velocities typically indicate denser, more uniform material with fewer internal flaws, while lower velocities can suggest the presence of cracks, voids, or deteriorated areas. UPV is widely used for quality control, detecting defects, and estimating material properties such as strength and elasticity.`,
    image: "/images/machines/ultrasonic-pulse-velocity.png",
    icon: Activity,
  },
  {
    id: "digital-rebound-hammer",
    name: "Digital Rebound Hammer (DRH)",
    description: `The Digital Rebound Hammer is a non-destructive testing tool used to estimate the surface hardness and compressive strength of concrete. It works by releasing a spring-loaded mass against the surface of the concrete and measuring the rebound distance electronically. The rebound value, displayed digitally, correlates with the concrete's compressive strength. DRH improves upon the traditional Schmidt Hammer by providing more accurate, consistent readings and easy data storage. It is commonly used in field assessments to evaluate the uniformity and quality of concrete without damaging the structure.`,
    image: "/images/machines/digital-rebound-hammer.png",
    icon: Hammer,
  },
  {
    id: "ground-penetrating-radar",
    name: "Ground Penetrating Radar (GPR)",
    description: `Ground Penetrating Radar is a non-invasive geophysical method that uses high-frequency electromagnetic waves to image the subsurface. A GPR system transmits radar pulses into the material (such as soil, concrete, or pavement) and records the reflected signals from subsurface structures or objects. Variations in the returned signal can indicate the presence of rebar, voids, cracks, moisture, or different material layers. GPR is widely used in construction, archaeology, and utility mapping because it provides real-time data and can scan large areas quickly without excavation or coring.`,
    image: "/images/machines/ground-penetrating-radar.png",
    icon: Radar,
  },
];
