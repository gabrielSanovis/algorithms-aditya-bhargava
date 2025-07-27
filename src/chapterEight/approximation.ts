function main() {
  const estados_abranger = new Set<string>([
    "mt",
    "wa",
    "or",
    "id",
    "nv",
    "ut",
    "ca",
    "az",
  ]);

  const stations = new Map<string, Set<string>>([
    ["kum", new Set(["id", "nv", "ut"])],
    ["kdois", new Set(["wa", "id", "mt"])],
    ["ktres", new Set(["or", "nv", "ca"])],
    ["kquatro", new Set(["nv", "ut"])],
    ["kcinco", new Set(["ca", "az"])],
  ]);
  const chosenStations = findStations(estados_abranger, stations)
  console.table(chosenStations);
}

function findStations(estados_abranger: Set<string>, stations: Map<string, Set<string>>) {
  const chosenStations = new Set();

  while (estados_abranger.size) {
    let betterStation = undefined;
    const coverageStations = new Set();
    for (const [station, statesOfStation] of stations) {
      const coverage = intersection<string>(estados_abranger, statesOfStation);
      if (coverage.size > coverageStations.size) {
        betterStation = station;
        union(coverageStations, coverage);
      }
    }
    difference(estados_abranger, coverageStations);
    chosenStations.add(betterStation);
  }

  return chosenStations;
}

function intersection<T>(setA: Set<T>, setB: Set<T>) {
  const _intersection = new Set<T>();
  for (let element of setA) {
    if (setB.has(element)) {
      _intersection.add(element);
    }
  }
  return _intersection;
}

function difference<T>(setA: Set<T>, setB: Set<T>) {
  for (let element of setB) {
    setA.delete(element);
  }
}

function union<T>(setA: Set<T>, setB: Set<T>) {
  for (let element of setB) {
    setA.add(element);
  }
}

main();