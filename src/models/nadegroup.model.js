import { v4 as uuidv4 } from "uuid";

export class NadeGroup {
  constructor(map, site, team, type, nades, destination, id) {
    this.map = map;
    this.site = site;
    this.team = team;
    this.type = type;
    this.nades = nades;
    this.destination = destination;
    if (id) this.id = id;
    else this.id = new uuidv4();
  }
}
