const graph = new Map<string, string[]>();
graph.set("voce", ["alice", "bob", "claire"]);
graph.set("alice", ["peggy"]);
graph.set("bob", ["peggy", "anuj"]);
graph.set("claire", ["thom", "jonny"]);
graph.set("thom", []);
graph.set("jonny", []);
graph.set("peggy", []);
graph.set("anuj", []);

function findSalesman(graph: Map<string, string[]>, user: string) {
  const queue: string[] = graph.get(user) ?? [];

  if (queue.length === 0) return;

  const verifyPersons = new Set();
  while (queue.length) {
    const person = queue.shift() ?? "";

    if (verifyPersons.has(person)) continue;

    if (isSalesman(person)) {
      printSalesman(person);
      return;
    }

    verifyPersons.add(person);
    const neighbors = graph.get(person) ?? [];
    queue.push(...neighbors);
  }
  if (queue.length === 0)
    console.info("Não foi possível encontrar um vendendor");
}

function isSalesman(person: string) {
  return person === "thom";
}

function printSalesman(salesman: string) {
  console.info(`${salesman} É um vendedor(a) de mangas`);
}

findSalesman(graph, "claire");
