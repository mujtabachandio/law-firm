/**
 * Packages build/ into a single deploy.zip for upload to Hostinger.
 *
 * By default build/images/ is excluded: those files rarely change and are
 * ~456 MB, so re-uploading them every deploy is wasted time. The images
 * already on the server are left untouched.
 *
 * Usage:
 *   npm run package                # everything except build/images  (~22 MB)
 *   npm run package -- --with-images   # everything                  (~477 MB)
 *
 * Upload the zip to public_html/ in Hostinger's File Manager and use
 * "Extract". The archive has no top-level folder, so files land directly in
 * public_html/ — which is what you want.
 */

import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const APP_ROOT = path.resolve(__dirname, '..');
const BUILD_DIR = path.join(APP_ROOT, 'build');
const OUT_ZIP = path.join(APP_ROOT, 'deploy.zip');

const WITH_IMAGES = process.argv.includes('--with-images');

/**
 * Pick a zip tool.
 *
 * Note: Git Bash's GNU tar silently writes a *tar* file when given a .zip
 * name, so it cannot be used here. Windows ships bsdtar at
 * System32\tar.exe, which writes real zips and keeps dotfiles (.htaccess).
 */
function findZipTool() {
  const windowsTar = 'C:\\Windows\\System32\\tar.exe';
  if (fs.existsSync(windowsTar)) return { cmd: windowsTar, kind: 'bsdtar' };

  try {
    execFileSync('zip', ['-v'], { stdio: 'ignore' });
    return { cmd: 'zip', kind: 'zip' };
  } catch {
    return null;
  }
}

function humanSize(bytes) {
  if (bytes > 1048576) return `${(bytes / 1048576).toFixed(1)} MB`;
  return `${(bytes / 1024).toFixed(0)} KB`;
}

function main() {
  if (!fs.existsSync(BUILD_DIR)) {
    console.error('No build/ folder found. Run `npm run build` first.');
    process.exit(1);
  }

  if (!fs.existsSync(path.join(BUILD_DIR, '.htaccess'))) {
    console.error(
      'build/.htaccess is missing — deep links would 404 on Hostinger.\n' +
        'Check that public/.htaccess exists, then rebuild.',
    );
    process.exit(1);
  }

  const tool = findZipTool();
  if (!tool) {
    console.error('No zip tool found (looked for Windows tar.exe and `zip`).');
    process.exit(1);
  }

  if (fs.existsSync(OUT_ZIP)) fs.unlinkSync(OUT_ZIP);

  console.log(
    WITH_IMAGES
      ? 'Packaging the full build (including images)...'
      : 'Packaging build/ without images/ ...',
  );

  if (tool.kind === 'bsdtar') {
    const args = ['-a', '-c', '-f', OUT_ZIP];
    if (!WITH_IMAGES) args.push('--exclude=./images');
    args.push('-C', BUILD_DIR, '.');
    execFileSync(tool.cmd, args, { stdio: 'inherit' });
  } else {
    const args = ['-r', OUT_ZIP, '.'];
    if (!WITH_IMAGES) args.push('-x', './images/*');
    execFileSync(tool.cmd, args, { cwd: BUILD_DIR, stdio: 'inherit' });
  }

  const size = fs.statSync(OUT_ZIP).size;

  console.log(`\nWrote deploy.zip (${humanSize(size)})`);
  console.log('\nNext:');
  console.log('  1. Hostinger hPanel -> File Manager -> public_html');
  console.log('  2. Upload deploy.zip, then right-click it -> Extract');
  console.log('  3. Delete deploy.zip from the server');
  if (!WITH_IMAGES) {
    console.log(
      '\nimages/ was not included. The copies already on the server are reused.',
    );
    console.log(
      'If you added or replaced any image, upload those files separately',
    );
    console.log('or run: npm run package -- --with-images');
  }
}

main();
