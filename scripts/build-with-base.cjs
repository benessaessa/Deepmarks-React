const { execSync } = require('child_process');
const path = require('path');
const pkg = require(path.resolve(__dirname, '..', 'package.json'));

const base = `/${pkg.name}/`;
console.log('Building with Vite base:', base);

try {
  execSync(`npx vite build --base ${base}`, { stdio: 'inherit' });
} catch (err) {
  console.error('Build failed:', err);
  process.exit(err.status || 1);
}
