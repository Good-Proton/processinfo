// TODO: Refactor once https://github.com/nodejs/node/issues/48460 fixed

import { fileURLToPath } from 'url'

const kLLC = Symbol.for('@tapjs/processinfo lineLength cache')
const g = global as {
  [kLLC]?: Map<string, number[]>
}
const cache = g[kLLC] || new Map<string, number[]>()
g[kLLC] = cache

const sourceMapComment = '//# sourceMappingURL='
export const saveLineLengths = (filename: string, content?: string | Buffer) => {
  if (content === undefined) return
  if (typeof content === 'object') content = String(content)
  if (filename.startsWith('file://')) filename = fileURLToPath(filename)
  // no need if it's not sourcemapped
  // don't cache an empty array, though, because ts-node files will show
  // up first as source, and then as their built content.
  const last = content.trimEnd().split('\n').pop()
  if (cache.has(filename) || !last?.startsWith(sourceMapComment)) return
  const ll = content
    .replace(/[\n\u2028\u2029]$/, '')
    .split(/\n|\u2028|\u2029/)
    .map(l => l.length)
  cache.set(filename, ll)

  cache.set(filename, ll)
}

export const getLineLengths = (filename: string) => {
  if (filename.startsWith('file://')) filename = fileURLToPath(filename)
  return cache.get(filename)
}
