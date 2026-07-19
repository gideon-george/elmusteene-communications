/**
 * Photo galleries (about-page portrait, workspace snapshots, bulk-stock
 * photos) — owner-editable in content/galleries.json via /admin.
 */

import data from "@/content/galleries.json";

export type GalleryPhoto = { src: string; alt: string };
export type CaptionedPhoto = GalleryPhoto & { caption: string };

export const ABOUT_PORTRAIT: GalleryPhoto = data.aboutPortrait;
export const WORKSPACE_PHOTOS: CaptionedPhoto[] = data.workspacePhotos;
export const STOCK_PHOTOS: GalleryPhoto[] = data.stockPhotos;
