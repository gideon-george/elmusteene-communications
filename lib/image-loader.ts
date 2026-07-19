/**
 * Custom next/image loader. With `unoptimized: true` Next.js emits image
 * src attributes WITHOUT the configured basePath, which 404s every image on
 * subpath hosts like GitHub Pages — so we prepend it ourselves here.
 * Images are served as static files, so `width`/`quality` are ignored.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function imageLoader({ src }: { src: string }) {
  return `${basePath}${src}`;
}
