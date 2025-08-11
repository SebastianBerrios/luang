import Bolt from "../assets/icons/Bolt.astro";
import Building from "../assets/icons/Building.astro";
import BuildingWarehouse from "../assets/icons/BuildingWarehouse.astro";
import Earth from "../assets/icons/Earth.astro";
import Factory from "../assets/icons/Factory.astro";
import Server from "../assets/icons/Server.astro";
import ShieldCheck from "../assets/icons/ShieldCheck.astro";
import Tools from "../assets/icons/Tools.astro";

export const Icons = {
  Bolt,
  Building,
  BuildingWarehouse,
  Factory,
  Server,
  Tools,
  Earth,
  ShieldCheck,
} as const;

export type IconKeys = keyof typeof Icons;
