import { globSync } from 'glob';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

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
    dir: `${outputDir}/dist`,
  },
};

export default [
  esBuild,
];
