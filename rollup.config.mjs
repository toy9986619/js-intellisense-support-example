import { globSync } from 'glob';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import alias from '@rollup/plugin-alias';
import dts from 'rollup-plugin-dts';

const outputDir = 'dist';

const esBuild = {
  input: Object.fromEntries(globSync('src/**/*.js').map((file) => [
    path.relative(
      'src',
      file.slice(0, file.length - path.extname(file).length)
    ),
    fileURLToPath(new URL(file, import.meta.url))
  ])),
  output: {
    format: 'es',
    dir: `${outputDir}/es`,
    sourcemap: true,
  },
  external: ["eventemitter3"],
};

const commonJsBuild = {
  input: Object.fromEntries(globSync('src/**/*.js').map((file) => [
    path.relative(
      'src',
      file.slice(0, file.length - path.extname(file).length)
    ),
    fileURLToPath(new URL(file, import.meta.url))
  ])),
  output: {
    format: 'cjs',
    dir: `${outputDir}/cjs`,
    sourcemap: true,
  },
  external: ["eventemitter3"],
};

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const pathResolve = (p) => path.resolve(__dirname, p);

const dtsConfig = {
  input: Object.fromEntries(
    globSync('dist/types/**/*.d.ts').map((file) => [
      path.relative(
        'dist/types',
        file.slice(0, file.length - '.d.ts'.length)
      ),
      fileURLToPath(new URL(file, import.meta.url))
    ]),
  ),
  output: {
    dir: `${outputDir}/types`,
  },
  plugins: [
    alias({
      entries: [
        { find: '@', replacement: pathResolve('./dist/types') },
      ],
    }),
    dts(),
  ],
}

export default [
  esBuild,
  commonJsBuild,
  dtsConfig,
];
