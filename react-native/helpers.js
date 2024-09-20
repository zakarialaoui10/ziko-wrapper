import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';

// const __filename = fileURLToPath(import.meta.url);
// // const __dirname = path.dirname(__filename);

const __dirname = process.cwd()

function __normalizePath(filePath) {
  return filePath.replace(/\\/g, '/');
}

function __getAbsolutePathToRoot(markersList = ['package.json', "node_modules"]) {
  const findProjectRoot = (dir, markers) => {
    let currentDir = dir;
    while (currentDir !== path.parse(currentDir).root) {
      const allMarkersPresent = markers.every(marker => fs.existsSync(path.join(currentDir, marker)));
      if (allMarkersPresent) return currentDir;
      currentDir = path.dirname(currentDir);
    }
    throw new Error('Project root not found');
  };
  const projectRoot = findProjectRoot(__dirname, markersList);
  return __normalizePath(projectRoot);
}

function __sub(st1, st2) {
  const regex = new RegExp(st2.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'g');
  return st1.replace(regex, '');
}

function __pathMask(normalizedPath) {
  const trimmedPath = normalizedPath.replace(/\/+$/, '');  
  const levelCount = (trimmedPath.match(/\//g) || []).length;  
  const mask = '../'.repeat(levelCount);
  return mask;
}

const getPathMask = (__filename) => {
    const AbsolutePathToRoot = __getAbsolutePathToRoot();
    const NormalizedFilename = __normalizePath(__filename);
    const Diff = __sub(NormalizedFilename, AbsolutePathToRoot);
    return __pathMask(__sub(Diff, path.basename(Diff)));
}
export{
    getPathMask
}