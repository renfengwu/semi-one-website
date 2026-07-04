import { copyFile, mkdir } from 'node:fs/promises';
import { dirname } from 'node:path';

const staticRoutes = ['products', 'applications', 'technology', 'quality', 'about'];

await mkdir(dirname('dist/404.html'), { recursive: true });
await copyFile('dist/index.html', 'dist/404.html');

for (const route of staticRoutes) {
  const target = `dist/${route}/index.html`;
  await mkdir(dirname(target), { recursive: true });
  await copyFile('dist/index.html', target);
}
