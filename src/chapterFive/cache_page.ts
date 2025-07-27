const cache = new Map();
cache.set('www.lustross.com', "cache da página www.lustross.com");

function getPage(url: string) {
    if(cache.get(url)) return cache.get(url);
    cache.set(url, `cache da página ${url}`);
    return `${url} Carregada do servidor.`;
}

console.log(getPage('www.lustross.com'));

console.log(getPage('www.lustross.com/categorias/'));

console.log(getPage('www.lustross.com/categorias/'));