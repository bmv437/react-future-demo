import {createCache, createResource} from 'simple-cache-provider';

const cache = createCache(() => {});

export const createFetcher = resolver => {
  const resource = createResource(resolver)
  return {
    read: key => resource.read(cache, key),
    preload: key => resource.preload(cache, key),
  }
}
