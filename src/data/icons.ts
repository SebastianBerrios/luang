import Bolt from "../assets/icons/Bolt.astro";
import Building from "../assets/icons/Building.astro";
import BuildingWarehouse from "../assets/icons/BuildingWarehouse.astro";
import Factory from "../assets/icons/Factory.astro";
import Server from "../assets/icons/Server.astro";
import Tools from "../assets/icons/Tools.astro";

export const Icons = {
  Bolt,
  Building,
  BuildingWarehouse,
  Factory,
  Server,
  Tools,
} as const;

export type IconKeys = keyof typeof Icons;
