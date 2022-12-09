import { v4 as uuidv4 } from "uuid";

export class Nade {
  constructor(link, description, movement, technique, mouseclick, origin, id) {
    this.link = link;
    this.description = description;
    this.movement = movement;
    this.technique = technique;
    this.mouseclick = mouseclick;
    this.origin = origin;
    if (id) this.id = id;
    else this.id = new uuidv4();
  }
}
