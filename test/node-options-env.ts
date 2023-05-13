import t from 'tap'
import { argvToNodeOptions } from '../dist/cjs/argv-to-node-options.js'
import { nodeOptionsEnv } from '../dist/cjs/node-options-env.js'
import { removePath } from './fixtures/remove-path'

import { relative, sep } from 'path'
import { pathToFileURL } from 'url'

t.formatSnapshot = o =>
  removePath(
    removePath(o, process.cwd(), '{CWD}'),
    '/Users/isaacs/dev/tapjs/processinfo',
    '{CWD}'
  )

const esmAbs = require.resolve('../dist/mjs/esm.mjs')
const esmRel = './' + relative(process.cwd(), esmAbs)
const esmURL = String(pathToFileURL(esmAbs))
const cjsAbs = require.resolve('../dist/cjs/cjs.js')
const cjsRel = '.' + sep + relative(process.cwd(), cjsAbs)

const cwdEnc = encodeURIComponent(process.cwd().replace(/\\/g, '/'))

t.cleanSnapshot = s =>
  s
    .split(esmURL)
    .join('{ESMURL}')
    .split(esmRel.replace(/"/g, '\\"'))
    .join('{ESMREL}')
    .split(esmAbs.replace(/"/g, '\\"'))
    .join('{ESMABS}')
    .split(cjsAbs.replace(/"/g, '\\"'))
    .join('{CJSABS}')
    .split(cjsRel.replace(/"/g, '\\"'))
    .join('{CJSREL}')
    .split(cwdEnc.replace(/"/g, '\\"'))
    .join('{CWD}')

const cases: {
  [name: string]: [
    env: { NODE_OPTIONS?: string | string[] },
    args: string[]
  ]
} = {
  empty: [{}, []],
  'has NO': [{ NODE_OPTIONS: '--x y -z' }, []],
  'has argv': [{}, ['--a', 'b']],
  'has both': [{ NODE_OPTIONS: '--x y -z' }, ['--a', 'b']],

  'args has esm url': [{}, ['--loader', esmURL]],
  'args has esm url =': [{}, [`--loader=${esmURL}`]],
  'args has esm relative': [{}, [`--loader=${esmRel}`]],
  'args has esm absolute': [{}, ['--loader', esmAbs]],
  'opts has esm url': [{ NODE_OPTIONS: ['--loader', esmURL] }, []],
  'opts has esm url =': [{ NODE_OPTIONS: `--loader=${esmURL}` }, []],
  'opts has esm relative': [{ NODE_OPTIONS: [`--loader=${esmRel}`] }, []],
  'opts has esm absolute': [{ NODE_OPTIONS: ['--loader', esmAbs] }, []],

  'exp args has esm url': [{}, ['--experimental-loader', esmURL]],
  'exp args has esm url =': [{}, [`--experimental-loader=${esmURL}`]],
  'exp args has esm relative': [{}, [`--experimental-loader=${esmRel}`]],
  'exp args has esm absolute': [{}, ['--experimental-loader', esmAbs]],
  'exp opts has esm url': [
    { NODE_OPTIONS: ['--experimental-loader', esmURL] },
    [],
  ],
  'exp opts has esm url =': [
    { NODE_OPTIONS: `--experimental-loader=${esmURL}` },
    [],
  ],
  'exp opts has esm relative': [
    { NODE_OPTIONS: [`--experimental-loader=${esmRel}`] },
    [],
  ],
  'exp opts has esm absolute': [
    { NODE_OPTIONS: ['--experimental-loader', esmAbs] },
    [],
  ],

  'args has cjs relative': [{}, [`--require=${cjsRel}`]],
  'args has cjs absolute': [{}, ['--require', cjsAbs]],
  'opts has cjs relative': [{ NODE_OPTIONS: [`--require=${cjsRel}`] }, []],
  'opts has cjs absolute': [{ NODE_OPTIONS: ['--require', cjsAbs] }, []],

  'short args has cjs relative': [{}, ['-r', cjsRel]],
  'short args has cjs absolute': [{}, ['-r', cjsAbs]],
  'short opts has cjs relative': [{ NODE_OPTIONS: ['-r', cjsRel] }, []],
  'short opts has cjs absolute': [{ NODE_OPTIONS: ['-r', cjsAbs] }, []],

  'short args no sp has cjs relative': [{}, [`-r${cjsRel}`]],
  'short args no sp has cjs absolute': [{}, [`-r${cjsAbs}`]],
  'short opts no sp has cjs relative': [{ NODE_OPTIONS: [`-r${cjsRel}`] }, []],
  'short opts no sp has cjs absolute': [{ NODE_OPTIONS: [`-r${cjsAbs}`] }, []],

  'short args no sp other': [{}, [`-rfoo`]],
  'short opts no sp other': [{ NODE_OPTIONS: [`-rfoo`] }, []],

  'args has both': [{}, ['-r', cjsRel, '--loader=' + esmURL]],
  'opts has both': [
    { NODE_OPTIONS: ['-r', cjsRel, '--loader=' + esmURL] },
    [],
  ],
  'opts esm, args cjs': [
    { NODE_OPTIONS: ['-r', cjsRel] },
    ['--loader=' + esmURL],
  ],
  'opts cjs, args cjs': [
    { NODE_OPTIONS: ['--loader=' + esmURL] },
    ['-r', cjsRel],
  ],

  'other loader in opts': [{ NODE_OPTIONS: ['--loader', 'some-file.ts'] }, []],
  'other loader in args': [{}, ['--loader', 'some-file.ts']],
  'other loader in both': [
    { NODE_OPTIONS: ['--loader', 'some-file.ts'] },
    ['--loader', '/some/path/to/index.cjs'],
  ],
  'multiple loaders': [
    {
      NODE_OPTIONS: [
        '--loader',
        'some-file.ts',
        '--loader',
        '/some/path/to/index.cjs',
      ],
    },
    [],
  ],

  'opts loader not found': [
    { NODE_OPTIONS: ['--loader', 'not foud'] },
    [],
  ],
  'args loader not found': [{}, ['--loader', 'not foud']],
  'opts loader missing': [{ NODE_OPTIONS: ['--loader'] }, []],
  'args loader missing': [{}, ['--loader']],
}

for (const [name, [env, argv]] of Object.entries(cases)) {
  if (Array.isArray(env.NODE_OPTIONS)) {
    env.NODE_OPTIONS = argvToNodeOptions(env.NODE_OPTIONS)
  }
  t.matchSnapshot(
    nodeOptionsEnv(env as { NODE_OPTIONS?: string }, argv),
    name
  )
}
