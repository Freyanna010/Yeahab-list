const fs = require('fs');

const alias = process.argv[2];
const target = process.argv[3];

if (!alias || !target) process.exit(1);

function readJsonWithComments(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const withoutComments = content
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/\/\/.*/g, '');
  return JSON.parse(withoutComments);
}

// 1. TypeScript
const tsConfig = readJsonWithComments('tsconfig.app.json');
tsConfig.compilerOptions.paths[alias + '/*'] = [target + '/*'];
fs.writeFileSync('tsconfig.app.json', JSON.stringify(tsConfig, null, 2));

// 2. Vite
const viteContent = fs.readFileSync('vite.config.ts', 'utf8');
const newAlias = `      '${alias}': path.resolve(__dirname, '${target}'),`;

if (!viteContent.includes(`'${alias}':`)) {
  const updatedContent = viteContent.replace(
    'alias: {',
    'alias: {\n' + newAlias
  );
  fs.writeFileSync('vite.config.ts', updatedContent);
}
