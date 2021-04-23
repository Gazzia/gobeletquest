import { Item } from "./Item";
import { Zone } from "./Zone";

export interface Player {
  id: string;
  name: string;
  class: any;
  inventory: Item[];
  location: Zone;
}
