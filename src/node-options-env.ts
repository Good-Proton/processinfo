import { argvToNodeOptions } from './argv-to-node-options.js'
import {
  importLoader,
  importMatch,
  legacyLoader,
  legacyMatch,
  requireMatch,
} from './loader-paths.js'
import { nodeOptionsToArgv } from './node-options-to-argv.js'

import Module from 'node:module'

const getKeyValue = (
  args: readonly string[],
  i: number
): [boolean, string, string | undefined] => {
  const arg = args[i]
  /* c8 ignore start */
  if (typeof arg !== 'string') throw new Error('invalid arg')
  /* c8 ignore stop */
  if (arg.includes('=')) {
    const [k, ...rest] = arg.split('=') as [string, ...string[]]
    return [true, k, rest.join('=')]
  } else if (i < args.length - 1) {
    return [false, arg, args[i + 1]]
  } else {
    return [false, arg, undefined]
  }
}

const useImport = !!(Module as { register?: (...a: any[]) => any })
  .register

// JUST test if we need to do anything at all with the env.
// if the loader is set already in the args, even incorrectly, return true
const hasLoader = (args: readonly string[]): boolean => {
  for (let i = 0; i < args.length; i++) {
    const arg = args[i]
    /* c8 ignore start */
    if (typeof arg !== 'string') throw new Error('invalid arg')
    /* c8 ignore stop */

    if (arg === '--') break
    if (!arg.startsWith('--') && arg !== '-r') break
    if (arg === '--enable-source-maps') continue

    const [eq, k, v] = getKeyValue(args, i)
    if (!v) {
      // wasn't a key-value pair
      continue
    }
    if (!eq) i++
    if (
      (k === '--experimental-loader' || k === '--loader') &&
      legacyMatch(v)
    ) {
      return true
    }
    if (
      (k === '--import') &&
      importMatch(v)
    ) {
      return true
    }
    if (
      (k === '-r' || k === '--require') &&
      requireMatch(v)
    ) {
      return true
    }
  }
  return false
}

const rmLoader = (args: string[]) => {
  const doNotWantKeys = ['--experimental-loader', '--loader', '--import', '-r', '--require']

  const result: string[] = []

  let doubledash = false
  for (let i = 0; i < args.length; i++) {
    const arg = args[i]
    /* c8 ignore start */
    if (typeof arg !== 'string') throw new Error('invalid arg')
    /* c8 ignore stop */
    if (!arg.startsWith('--') && arg !== '-r' || doubledash) {
      result.push(arg)
      continue
    }
    if (arg === '--') {
      result.push(arg)
      doubledash = true
      continue
    }

    const [eq, k, v] = getKeyValue(args, i)
    if (!v) {
      // wasn't a key-value pair
      result.push(arg)
      continue
    }
    if (!eq) i++
    if (doNotWantKeys.includes(k) && (importMatch(v) || legacyMatch(v) || requireMatch(v))) {
      // it's ours, remove it
      continue
    }
    // not ours, leave it
    result.push(arg)
    const next = args[i]
    if (!eq && typeof next === 'string') result.push(next)
    continue
  }
  return result
}

const addLoader = (args: string[]) => {
  const addKey = useImport ? '--import' : '--loader'
  const addValue = useImport ? importLoader : legacyLoader
  const doNotWantKeys = [
    '--experimental-loader',
    useImport ? '--loader' : '--import',
  ]
  const test = useImport ? importMatch : legacyMatch

  const result: string[] = []

  let doubledash = false
  let found = false
  for (let i = 0; i < args.length; i++) {
    const arg = args[i]
    /* c8 ignore start */
    if (typeof arg !== 'string') throw new Error('invalid arg')
    /* c8 ignore stop */
    if (!arg.startsWith('--') || doubledash) {
      result.push(arg)
      continue
    }
    if (arg === '--') {
      result.push(arg)
      doubledash = true
      continue
    }

    const [eq, k, v] = getKeyValue(args, i)
    if (!v) {
      // wasn't a key-value pair
      result.push(arg)
      continue
    }
    if (!eq) i++
    if (doNotWantKeys.includes(k) && (importMatch(v) || legacyMatch(v))) {
      // it's ours, but not how we want it, omit
      continue
    }

    if (k === addKey && test(v)) {
      // already present, don't let it be set multiple times.
      if (found) continue
      found = true
      result.push(arg)
      const next = args[i]
      if (!eq && typeof next === 'string') result.push(next)
    } else {
      // not ours
      result.push(arg)
      const next = args[i]
      if (!eq && typeof next === 'string') result.push(next)
      continue
    }
  }
  if (!found) result.push(`${addKey}=${addValue}`)
  return !useImport ? addIgnoreLoadersWarning(result) : result
}

const addIgnoreLoadersWarning = (args: readonly string[]) =>
  args.includes('--no-warnings') ||
    args.includes('--no-warnings=ExperimentalLoader')
    ? args
    : args.concat('--no-warnings')

export const nodeOptionsEnv = (
  env: NodeJS.ProcessEnv,
  args: readonly string[]
) => {
  // if we already have the loader in args, don't add to NODE_OPTIONS
  const no = nodeOptionsToArgv(env.NODE_OPTIONS)
  return argvToNodeOptions(hasLoader(args) ? rmLoader(no) : addLoader(no))
}
