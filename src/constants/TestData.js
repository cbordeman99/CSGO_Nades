const mirageNades1 = [
  {
    link: "https://giant.gfycat.com/EnragedZanyBlackfootedferret.mp4",
    description: "Ct Smoke from T-Spawn",
    movement: "stationary",
    technique: "jumpthrow",
    mouseclick: "left",
    origin: {
      x: 700,
      y: 700
    }
  }
];

const mirageContainer1 = {
  map: "Mirage",
  destination: {
    x: 450,
    y: 380
  },
  nades: mirageNades1,
  site: "A",
  team: "T",
  type: "Smoke"
};

const mirageNades2 = [
  {
    link: "https://giant.gfycat.com/EnragedZanyBlackfootedferret.mp4",
    description: "Smoke something",
    movement: "stationary",
    technique: "jumpthrow",
    mouseclick: "left",
    origin: {
      x: 340,
      y: 200
    }
  },
  {
    link: "https://giant.gfycat.com/EnragedZanyBlackfootedferret.mp4",
    description: "Smoke something",
    movement: "stationary",
    technique: "jumpthrow",
    mouseclick: "left",
    origin: {
      x: 450,
      y: 300
    }
  }
];

const mirageContainer2 = {
  map: "Mirage",
  destination: {
    x: 750,
    y: 630
  },
  nades: mirageNades2,
  site: "A",
  team: "CT",
  type: "Smoke"
};

const overpassContainer1 = {
  map: "Overpass",
  destination: {
    x: 400,
    y: 200
  },
  nades: [],
  site: "A",
  team: "CT",
  type: "Grenade"
};

const overpassContainer2 = {
  map: "Overpass",
  destination: {
    x: 500,
    y: 600
  },
  nades: [],
  site: "A",
  team: "T",
  type: "Flash"
};

export const testData = [
  mirageContainer1,
  mirageContainer2,
  overpassContainer1,
  overpassContainer2
];
