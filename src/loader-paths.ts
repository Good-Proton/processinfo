import { resolve } from 'path'
import { getImportMetaURL } from './get-import-meta-url.js'

import { fileURLToPath } from 'url'

export const legacyLoader = getImportMetaURL('../esm/loader-legacy.mjs')
export const importLoader = getImportMetaURL('../esm/import.mjs')
export const registerRequire = getImportMetaURL('../commonjs/register.cjs')
const legacyLoaderPath = fileURLToPath(legacyLoader)
const importLoaderPath = fileURLToPath(importLoader)
const registerRequirePath = fileURLToPath(registerRequire)

export const legacyMatch = (p: string): boolean => {
  const d = p.startsWith('file://')
    ? fileURLToPath(p)
    : decodeURIComponent(p)
  return (
    d === '@tapjs/processinfo/loader' ||
    p === legacyLoader ||
    resolve(d) === legacyLoaderPath
  )
}

export const importMatch = (p: string): boolean => {
  const d = p.startsWith('file://')
    ? fileURLToPath(p)
    : decodeURIComponent(p)
  return (
    d === '@tapjs/processinfo/import' ||
    p === importLoader ||
    resolve(d) === importLoaderPath
  )
}

export const requireMatch = (p: string): boolean => {
  const d = p.startsWith('file://')
    ? fileURLToPath(p)
    : decodeURIComponent(p);
  return (
    d === '@tapjs/processinfo/register' ||
    p === registerRequire ||
    resolve(d) === registerRequirePath
  )
}
