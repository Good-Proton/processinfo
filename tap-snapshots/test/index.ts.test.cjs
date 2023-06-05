/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/index.ts TAP basic instantiation and usage > cleared 1`] = `
Object {
  "dir": "{CWD}/test/fixtures/processinfo",
  "exclude": Object {},
  "externalIDs": Map {},
  "files": Map {},
  "pendingParent": Map {},
  "pendingRoot": Map {},
  "roots": Set {},
  "uuids": Map {},
}
`

exports[`test/index.ts TAP basic instantiation and usage > defaults 1`] = `
Object {
  "dir": "{CWD}/.tap/processinfo",
  "exclude": Object {},
  "externalIDs": Map {},
  "files": Map {},
  "pendingParent": Map {},
  "pendingRoot": Map {},
  "roots": Set {},
  "uuids": Map {},
}
`

exports[`test/index.ts TAP basic instantiation and usage > missing dir is just empty (sync) 1`] = `
Object {
  "dir": "{CWD}/test/fixtures/asdfasdfasdfas",
  "exclude": Object {},
  "externalIDs": Map {},
  "files": Map {},
  "pendingParent": Map {},
  "pendingRoot": Map {},
  "roots": Set {},
  "uuids": Map {},
}
`

exports[`test/index.ts TAP basic instantiation and usage > missing dir is just empty 1`] = `
Object {
  "dir": "{CWD}/test/fixtures/asdfasdfasdfas",
  "exclude": Object {},
  "externalIDs": Map {},
  "files": Map {},
  "pendingParent": Map {},
  "pendingRoot": Map {},
  "roots": Set {},
  "uuids": Map {},
}
`

exports[`test/index.ts TAP basic instantiation and usage > root node 1`] = `
Object {
  "argv": Array [
    "/usr/local/bin/node",
    "{CWD}/test/esm.mjs",
  ],
  "children": Set {
    &ref_1 Object {
      "argv": Array [
        "/usr/local/bin/node",
        "{CWD}/test/tap-testdir-esm/file.mjs",
      ],
      "children": null,
      "code": 0,
      "cwd": "{CWD}",
      "date": "2022-04-22T03:50:31.683Z",
      "execArgv": Array [
        "--loader",
        "file://{CWD}/lib/esm.mjs?file://{CWD}/test/tap-testdir-esm/otherload.mjs&file://{CWD}/test/tap-testdir-esm/otherresolve.mjs&file://{CWD}/test/tap-testdir-esm/otherhook.mjs",
      ],
      "externalID": null,
      "files": Array [
        "{CWD}/test/tap-testdir-esm/file.mjs",
      ],
      "NODE_OPTIONS": "\\"--loader=file://{CWD}/lib/esm.mjs\\"",
      "parent": &ref_2 Object {
        "argv": Array [
          "/usr/local/bin/node",
          "{CWD}/test/esm.mjs",
        ],
        "children": Set {
          <*ref_1>,
          Object {
            "argv": Array [
              "/usr/local/bin/node",
              "{CWD}/test/tap-testdir-esm/file.mjs",
            ],
            "children": null,
            "code": 0,
            "cwd": "{CWD}",
            "date": "2022-04-22T03:50:31.584Z",
            "execArgv": Array [
              "--loader",
              "file://{CWD}/lib/esm.mjs",
            ],
            "externalID": null,
            "files": Array [
              "{CWD}/test/tap-testdir-esm/file.mjs",
            ],
            "NODE_OPTIONS": "\\"--loader=file://{CWD}/lib/esm.mjs\\"",
            "parent": <*ref_2>,
            "pid": 51730,
            "ppid": 51729,
            "root": <*ref_2>,
            "runtime": 2.083458,
            "signal": null,
            "sources": Object {},
            "uuid": "e3a69c13-bca9-4634-968d-c122ffad113d",
          },
        },
        "code": 1,
        "cwd": "{CWD}",
        "date": "2022-04-22T03:50:31.466Z",
        "execArgv": Array [
          "--loader=./lib/esm.mjs?X",
        ],
        "externalID": null,
        "files": Array [
          "{CWD}/lib/node-options-env.cjs",
          "{CWD}/lib/node-options-to-argv.cjs",
          "{CWD}/lib/argv-to-node-options.cjs",
        ],
        "NODE_OPTIONS": undefined,
        "parent": null,
        "pid": 51729,
        "ppid": 50812,
        "root": <*ref_2>,
        "runtime": 237.802042,
        "signal": null,
        "sources": Object {},
        "uuid": "eb967f55-a436-4542-aba2-efd8cb82b471",
      },
      "pid": 51731,
      "ppid": 51729,
      "root": &ref_2 Object {
        "argv": Array [
          "/usr/local/bin/node",
          "{CWD}/test/esm.mjs",
        ],
        "children": Set {
          <*ref_1>,
          Object {
            "argv": Array [
              "/usr/local/bin/node",
              "{CWD}/test/tap-testdir-esm/file.mjs",
            ],
            "children": null,
            "code": 0,
            "cwd": "{CWD}",
            "date": "2022-04-22T03:50:31.584Z",
            "execArgv": Array [
              "--loader",
              "file://{CWD}/lib/esm.mjs",
            ],
            "externalID": null,
            "files": Array [
              "{CWD}/test/tap-testdir-esm/file.mjs",
            ],
            "NODE_OPTIONS": "\\"--loader=file://{CWD}/lib/esm.mjs\\"",
            "parent": <*ref_2>,
            "pid": 51730,
            "ppid": 51729,
            "root": <*ref_2>,
            "runtime": 2.083458,
            "signal": null,
            "sources": Object {},
            "uuid": "e3a69c13-bca9-4634-968d-c122ffad113d",
          },
        },
        "code": 1,
        "cwd": "{CWD}",
        "date": "2022-04-22T03:50:31.466Z",
        "execArgv": Array [
          "--loader=./lib/esm.mjs?X",
        ],
        "externalID": null,
        "files": Array [
          "{CWD}/lib/node-options-env.cjs",
          "{CWD}/lib/node-options-to-argv.cjs",
          "{CWD}/lib/argv-to-node-options.cjs",
        ],
        "NODE_OPTIONS": undefined,
        "parent": null,
        "pid": 51729,
        "ppid": 50812,
        "root": <*ref_2>,
        "runtime": 237.802042,
        "signal": null,
        "sources": Object {},
        "uuid": "eb967f55-a436-4542-aba2-efd8cb82b471",
      },
      "runtime": 3.868917,
      "signal": null,
      "sources": Object {},
      "uuid": "9be50d1c-e1f8-484d-8581-f1b702626d0e",
    },
    &ref_3 Object {
      "argv": Array [
        "/usr/local/bin/node",
        "{CWD}/test/tap-testdir-esm/file.mjs",
      ],
      "children": null,
      "code": 0,
      "cwd": "{CWD}",
      "date": "2022-04-22T03:50:31.584Z",
      "execArgv": Array [
        "--loader",
        "file://{CWD}/lib/esm.mjs",
      ],
      "externalID": null,
      "files": Array [
        "{CWD}/test/tap-testdir-esm/file.mjs",
      ],
      "NODE_OPTIONS": "\\"--loader=file://{CWD}/lib/esm.mjs\\"",
      "parent": &ref_2 Object {
        "argv": Array [
          "/usr/local/bin/node",
          "{CWD}/test/esm.mjs",
        ],
        "children": Set {
          Object {
            "argv": Array [
              "/usr/local/bin/node",
              "{CWD}/test/tap-testdir-esm/file.mjs",
            ],
            "children": null,
            "code": 0,
            "cwd": "{CWD}",
            "date": "2022-04-22T03:50:31.683Z",
            "execArgv": Array [
              "--loader",
              "file://{CWD}/lib/esm.mjs?file://{CWD}/test/tap-testdir-esm/otherload.mjs&file://{CWD}/test/tap-testdir-esm/otherresolve.mjs&file://{CWD}/test/tap-testdir-esm/otherhook.mjs",
            ],
            "externalID": null,
            "files": Array [
              "{CWD}/test/tap-testdir-esm/file.mjs",
            ],
            "NODE_OPTIONS": "\\"--loader=file://{CWD}/lib/esm.mjs\\"",
            "parent": <*ref_2>,
            "pid": 51731,
            "ppid": 51729,
            "root": <*ref_2>,
            "runtime": 3.868917,
            "signal": null,
            "sources": Object {},
            "uuid": "9be50d1c-e1f8-484d-8581-f1b702626d0e",
          },
          <*ref_3>,
        },
        "code": 1,
        "cwd": "{CWD}",
        "date": "2022-04-22T03:50:31.466Z",
        "execArgv": Array [
          "--loader=./lib/esm.mjs?X",
        ],
        "externalID": null,
        "files": Array [
          "{CWD}/lib/node-options-env.cjs",
          "{CWD}/lib/node-options-to-argv.cjs",
          "{CWD}/lib/argv-to-node-options.cjs",
        ],
        "NODE_OPTIONS": undefined,
        "parent": null,
        "pid": 51729,
        "ppid": 50812,
        "root": <*ref_2>,
        "runtime": 237.802042,
        "signal": null,
        "sources": Object {},
        "uuid": "eb967f55-a436-4542-aba2-efd8cb82b471",
      },
      "pid": 51730,
      "ppid": 51729,
      "root": &ref_2 Object {
        "argv": Array [
          "/usr/local/bin/node",
          "{CWD}/test/esm.mjs",
        ],
        "children": Set {
          Object {
            "argv": Array [
              "/usr/local/bin/node",
              "{CWD}/test/tap-testdir-esm/file.mjs",
            ],
            "children": null,
            "code": 0,
            "cwd": "{CWD}",
            "date": "2022-04-22T03:50:31.683Z",
            "execArgv": Array [
              "--loader",
              "file://{CWD}/lib/esm.mjs?file://{CWD}/test/tap-testdir-esm/otherload.mjs&file://{CWD}/test/tap-testdir-esm/otherresolve.mjs&file://{CWD}/test/tap-testdir-esm/otherhook.mjs",
            ],
            "externalID": null,
            "files": Array [
              "{CWD}/test/tap-testdir-esm/file.mjs",
            ],
            "NODE_OPTIONS": "\\"--loader=file://{CWD}/lib/esm.mjs\\"",
            "parent": <*ref_2>,
            "pid": 51731,
            "ppid": 51729,
            "root": <*ref_2>,
            "runtime": 3.868917,
            "signal": null,
            "sources": Object {},
            "uuid": "9be50d1c-e1f8-484d-8581-f1b702626d0e",
          },
          <*ref_3>,
        },
        "code": 1,
        "cwd": "{CWD}",
        "date": "2022-04-22T03:50:31.466Z",
        "execArgv": Array [
          "--loader=./lib/esm.mjs?X",
        ],
        "externalID": null,
        "files": Array [
          "{CWD}/lib/node-options-env.cjs",
          "{CWD}/lib/node-options-to-argv.cjs",
          "{CWD}/lib/argv-to-node-options.cjs",
        ],
        "NODE_OPTIONS": undefined,
        "parent": null,
        "pid": 51729,
        "ppid": 50812,
        "root": <*ref_2>,
        "runtime": 237.802042,
        "signal": null,
        "sources": Object {},
        "uuid": "eb967f55-a436-4542-aba2-efd8cb82b471",
      },
      "runtime": 2.083458,
      "signal": null,
      "sources": Object {},
      "uuid": "e3a69c13-bca9-4634-968d-c122ffad113d",
    },
  },
  "code": 1,
  "cwd": "{CWD}",
  "date": "2022-04-22T03:50:31.466Z",
  "execArgv": Array [
    "--loader=./lib/esm.mjs?X",
  ],
  "externalID": null,
  "files": Array [
    "{CWD}/lib/node-options-env.cjs",
    "{CWD}/lib/node-options-to-argv.cjs",
    "{CWD}/lib/argv-to-node-options.cjs",
  ],
  "NODE_OPTIONS": undefined,
  "parent": null,
  "pid": 51729,
  "ppid": 50812,
  "root": &ref_2 Object {
    "argv": Array [
      "/usr/local/bin/node",
      "{CWD}/test/esm.mjs",
    ],
    "children": Set {
      Object {
        "argv": Array [
          "/usr/local/bin/node",
          "{CWD}/test/tap-testdir-esm/file.mjs",
        ],
        "children": null,
        "code": 0,
        "cwd": "{CWD}",
        "date": "2022-04-22T03:50:31.683Z",
        "execArgv": Array [
          "--loader",
          "file://{CWD}/lib/esm.mjs?file://{CWD}/test/tap-testdir-esm/otherload.mjs&file://{CWD}/test/tap-testdir-esm/otherresolve.mjs&file://{CWD}/test/tap-testdir-esm/otherhook.mjs",
        ],
        "externalID": null,
        "files": Array [
          "{CWD}/test/tap-testdir-esm/file.mjs",
        ],
        "NODE_OPTIONS": "\\"--loader=file://{CWD}/lib/esm.mjs\\"",
        "parent": <*ref_2>,
        "pid": 51731,
        "ppid": 51729,
        "root": <*ref_2>,
        "runtime": 3.868917,
        "signal": null,
        "sources": Object {},
        "uuid": "9be50d1c-e1f8-484d-8581-f1b702626d0e",
      },
      Object {
        "argv": Array [
          "/usr/local/bin/node",
          "{CWD}/test/tap-testdir-esm/file.mjs",
        ],
        "children": null,
        "code": 0,
        "cwd": "{CWD}",
        "date": "2022-04-22T03:50:31.584Z",
        "execArgv": Array [
          "--loader",
          "file://{CWD}/lib/esm.mjs",
        ],
        "externalID": null,
        "files": Array [
          "{CWD}/test/tap-testdir-esm/file.mjs",
        ],
        "NODE_OPTIONS": "\\"--loader=file://{CWD}/lib/esm.mjs\\"",
        "parent": <*ref_2>,
        "pid": 51730,
        "ppid": 51729,
        "root": <*ref_2>,
        "runtime": 2.083458,
        "signal": null,
        "sources": Object {},
        "uuid": "e3a69c13-bca9-4634-968d-c122ffad113d",
      },
    },
    "code": 1,
    "cwd": "{CWD}",
    "date": "2022-04-22T03:50:31.466Z",
    "execArgv": Array [
      "--loader=./lib/esm.mjs?X",
    ],
    "externalID": null,
    "files": Array [
      "{CWD}/lib/node-options-env.cjs",
      "{CWD}/lib/node-options-to-argv.cjs",
      "{CWD}/lib/argv-to-node-options.cjs",
    ],
    "NODE_OPTIONS": undefined,
    "parent": null,
    "pid": 51729,
    "ppid": 50812,
    "root": <*ref_2>,
    "runtime": 237.802042,
    "signal": null,
    "sources": Object {},
    "uuid": "eb967f55-a436-4542-aba2-efd8cb82b471",
  },
  "runtime": 237.802042,
  "signal": null,
  "sources": Object {},
  "uuid": "eb967f55-a436-4542-aba2-efd8cb82b471",
}
`
