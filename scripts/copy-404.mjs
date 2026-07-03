import { copyFile, mkdir } from 'node:fs/promises';
import { dirname } from 'node:path';

await mkdir(dirname('dist/404.html'), { recursive: true });
await copyFile('dist/index.html', 'dist/404.html');
