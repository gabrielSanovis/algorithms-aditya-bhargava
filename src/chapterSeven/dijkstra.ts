const graph = new Map<string, Map<string, number>>();
graph.set('inicio', new Map([['a', 10]]));
graph.set('a', new Map([['b', 20]]));
graph.set('b', new Map([['c', 1], ['fim', 30]]));
graph.set('c', new Map([['a', 1]]));

// Nível 2
// graph.set('inicio', new Map([['a', 2], ['b',5]]));
// graph.set('a', new Map([['b', 8], ['c', 7]]));
// graph.set('b', new Map([['c', 2], ['d', 4]]));
// graph.set('c', new Map([['fim', 1]]));
// graph.set('d', new Map([['c', 6], ['fim', 3]]));
// graph.set('fim', new Map());

// Nível 1
// graph.set(
//   "inicio",
//   new Map([
//     ["a", 6],
//     ["b", 2],
//   ])
// );
// graph.set("a", new Map([["fim", 1]]));
// graph.set(
//   "b",
//   new Map([
//     ["a", 3],
//     ["fim", 5],
//   ])
// );
// graph.set("fim", new Map<string, number>());

const costs = new Map<string, number>();
costs.set("a", 10);
costs.set("b", Infinity);
costs.set("c", Infinity);
costs.set("fim", Infinity);
// Nível 2
// costs.set("a", 2);
// costs.set("b", 5);
// costs.set("c", Infinity);
// costs.set("d", Infinity);
// costs.set("fim", Infinity);
// Nível 1
// costs.set("a", 6);
// costs.set("b", 2);
// costs.set("fim", Infinity);

const father = new Map<string, string | undefined>();
father.set("a", "inicio");
father.set("b", undefined);
father.set("c", undefined);
father.set("fim", undefined);
// Nível 2
// father.set("a", "inicio");
// father.set("b", "inicio");
// father.set("c", undefined);
// father.set("d", undefined);
// father.set("fim", undefined);
// Nível 1
// father.set("a", "inicio");
// father.set("b", "inicio");
// father.set("fim", undefined);

const processados = new Set<string>();

function findNodeWithLowCost(
  costs: Map<string, number>,
  processados: Set<string>
) {
  let lowCost = Infinity;
  let nodoLowCost = undefined;
  const isCostLessThan = ({
    cost,
    lowCost,
  }: {
    cost: number;
    lowCost: number;
  }) => cost < lowCost;

  const nodeNotCheck = (node: string) => !processados.has(node);

  for (const [node, cost] of costs) {
    if (isCostLessThan({ lowCost, cost }) && nodeNotCheck(node)) {
      lowCost = cost;
      nodoLowCost = node;
    }
  }
  return nodoLowCost;
}

function dijkstra() {
  let node = findNodeWithLowCost(costs, processados);
  const areProcessing = (node: string | undefined) => node !== undefined;

  while (areProcessing(node)) {
    const cost = costs.get(node) ?? 0;
    const neighborns = graph.get(node);

    for (const [neighbornNode, neighbornCost] of neighborns ?? []) {
      const currentVertexCost = cost + neighbornCost;
      const vertexCost = costs.get(neighbornNode) ?? 0;
      if (vertexCost > currentVertexCost) {
        costs.set(neighbornNode, currentVertexCost);
        father.set(neighbornNode, node);
      }
    }

    processados.add(node);
    node = findNodeWithLowCost(costs, processados);
  }
}

dijkstra();

console.table(father);
console.table(costs);
