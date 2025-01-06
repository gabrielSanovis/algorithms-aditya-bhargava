const eleitores = new Map();

function verifica_eleitor(eleitor: string) {
    eleitores.get(eleitor) ? console.log("Dispensado") : cabine_eleitoral(eleitor);
}

function cabine_eleitoral(eleitor: string) {
    eleitores.set(eleitor, true);
    console.log("Pode ir votar");
}

verifica_eleitor("Gabriel");
verifica_eleitor("Santos");
verifica_eleitor("Gabriel");