import fs from 'node:fs';
import path from 'node:path';

/** URL path served from public/gallery/ */
export const GALLERY_URL = '/gallery';

const GALLERY_DIR = path.join(process.cwd(), 'public/gallery');
const IMAGE_EXT = /\.(jpe?g|png|webp|avif)$/i;

export type GalleryPhoto = {
  /** Public URL, e.g. /gallery/1.jpeg */
  src: string;
  alt: string;
  filename: string;
};

function altFromFilename(filename: string): string {
  const base = filename.replace(/\.[^.]+$/, '');
  return base.replace(/[-_]+/g, ' ').trim() || 'Property photo';
}

export function getGalleryPhotos(): GalleryPhoto[] {
  if (!fs.existsSync(GALLERY_DIR)) {
    return [];
  }

  return fs
    .readdirSync(GALLERY_DIR)
    .filter((name) => IMAGE_EXT.test(name) && !name.startsWith('.'))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    .map((filename) => ({
      src: `${GALLERY_URL}/${encodeURI(filename)}`,
      alt: altFromFilename(filename),
      filename,
    }));
}
