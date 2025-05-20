
let indiceServicio = 0;

export const getService = (servers: Array<string>) => {
  const service = servers[indiceServicio];
  indiceServicio = (indiceServicio + 1) % servers.length;
  return service;
};