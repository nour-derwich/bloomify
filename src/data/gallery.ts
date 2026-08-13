// Full-size images (JPEG, re-encoded ~82q, longest edge capped 1400px) + WebP twins.
import aboutArtistAtWorkJpg from "@/assets/images/about-artist-at-work.jpg";
import aboutArtistAtWorkWebp from "@/assets/images/about-artist-at-work.webp";
import galleryRoseMagnoliaJpg from "@/assets/images/gallery-rose-magnolia.jpg";
import galleryRoseMagnoliaWebp from "@/assets/images/gallery-rose-magnolia.webp";
import galleryWildflowerHourJpg from "@/assets/images/gallery-wildflower-hour.jpg";
import galleryWildflowerHourWebp from "@/assets/images/gallery-wildflower-hour.webp";
import galleryQuietTulipJpg from "@/assets/images/gallery-quiet-tulip.jpg";
import galleryQuietTulipWebp from "@/assets/images/gallery-quiet-tulip.webp";
import galleryCliffsideBloomJpg from "@/assets/images/gallery-cliffside-bloom.jpg";
import galleryCliffsideBloomWebp from "@/assets/images/gallery-cliffside-bloom.webp";
import galleryNo10BackViewJpg from "@/assets/images/gallery-no10-backview.jpg";
import galleryNo10BackViewWebp from "@/assets/images/gallery-no10-backview.webp";
import gallerySweetheartSetJpg from "@/assets/images/gallery-sweetheart-set.jpg";
import gallerySweetheartSetWebp from "@/assets/images/gallery-sweetheart-set.webp";
import processPaletteDetailJpg from "@/assets/images/process-palette-detail.jpg";
import processPaletteDetailWebp from "@/assets/images/process-palette-detail.webp";
import processEyeDetailJpg from "@/assets/images/process-eye-detail.jpg";
import processEyeDetailWebp from "@/assets/images/process-eye-detail.webp";

// Small thumbs (~260px, JPEG + WebP) for the salon-wall background tiles.
import thumbRoseMagnolia from "@/assets/images/thumb-gallery-rose-magnolia.jpg";
import thumbRoseMagnoliaWebp from "@/assets/images/thumb-gallery-rose-magnolia.webp";
import thumbWildflower from "@/assets/images/thumb-gallery-wildflower-hour.jpg";
import thumbWildflowerWebp from "@/assets/images/thumb-gallery-wildflower-hour.webp";
import thumbTulip from "@/assets/images/thumb-gallery-quiet-tulip.jpg";
import thumbTulipWebp from "@/assets/images/thumb-gallery-quiet-tulip.webp";
import thumbCliffside from "@/assets/images/thumb-gallery-cliffside-bloom.jpg";
import thumbCliffsideWebp from "@/assets/images/thumb-gallery-cliffside-bloom.webp";
import thumbNo10 from "@/assets/images/thumb-gallery-no10-backview.jpg";
import thumbNo10Webp from "@/assets/images/thumb-gallery-no10-backview.webp";
import thumbSweetheart from "@/assets/images/thumb-gallery-sweetheart-set.jpg";
import thumbSweetheartWebp from "@/assets/images/thumb-gallery-sweetheart-set.webp";
import thumbPalette from "@/assets/images/thumb-process-palette-detail.jpg";
import thumbPaletteWebp from "@/assets/images/thumb-process-palette-detail.webp";

export interface Picture {
  src: string;
  srcWebp: string;
  width: number;
  height: number;
  alt: string;
}

/**
 * The hero's centerpiece grand frame — "Study in Blue," an in-progress oil portrait.
 * Note: this is a full-size (non-thumb) image since it's the LCP element.
 */
export const heroGrandFrame: Picture = {
  src: processEyeDetailJpg,
  srcWebp: processEyeDetailWebp,
  width: 736,
  height: 981,
  alt: "Close-up of a fine blue-toned eye being painted on canvas, mid-brushstroke — an in-progress oil portrait study.",
};

export const storyPhoto: Picture = {
  src: aboutArtistAtWorkJpg,
  srcWebp: aboutArtistAtWorkWebp,
  width: 736,
  height: 920,
  alt: "Rania Derouich's hand holding a fine brush, mid-stroke, above a canvas in her studio.",
};

/** Floral band: the top image strip, and the circular photo that straddles the seam beneath it. */
export const floralBandImage: Picture = {
  src: gallerySweetheartSetJpg,
  srcWebp: gallerySweetheartSetWebp,
  width: 675,
  height: 1200,
  alt: "Set of four small custom canvases with a love lettering piece, a heart and ladybird, a martini glass, and a bow motif.",
};

export const floralBandOval: Picture = {
  src: galleryRoseMagnoliaJpg,
  srcWebp: galleryRoseMagnoliaWebp,
  width: 955,
  height: 1291,
  alt: "A Bloomify rose and magnolia still life painting, displayed at home.",
};

export interface GalleryPiece extends Picture {
  plateNo: string;
  title: string;
  medium: string;
}

export const galleryPieces: GalleryPiece[] = [
  {
    src: galleryWildflowerHourJpg,
    srcWebp: galleryWildflowerHourWebp,
    width: 736,
    height: 920,
    alt: "Wide acrylic painting of a wildflower meadow at dusk, with butterflies rising against a pink and gold sky.",
    plateNo: "No. 01",
    title: "Wildflower Field",
    medium: "Acrylic on Canvas",
  },
  {
    src: galleryRoseMagnoliaJpg,
    srcWebp: galleryRoseMagnoliaWebp,
    width: 955,
    height: 1291,
    alt: "Still life oil painting of a deep red rose and two pink magnolia blooms in a blue glass vase, signed Rania Derouich.",
    plateNo: "No. 02",
    title: "Rose & Magnolia",
    medium: "Oil on Canvas",
  },
  {
    src: processEyeDetailJpg,
    srcWebp: processEyeDetailWebp,
    width: 736,
    height: 981,
    alt: "Close-up of a fine blue-toned eye being painted on canvas, mid-brushstroke.",
    plateNo: "No. 03",
    title: "Study in Blue",
    medium: "Oil, In Progress",
  },
  {
    src: galleryQuietTulipJpg,
    srcWebp: galleryQuietTulipWebp,
    width: 735,
    height: 932,
    alt: "Modern flat-colour painting of a single cream tulip against a dusty pink background with abstract ribbon shapes.",
    plateNo: "No. 04",
    title: "Quiet Tulip",
    medium: "Acrylic on Canvas",
  },
  {
    src: galleryCliffsideBloomJpg,
    srcWebp: galleryCliffsideBloomWebp,
    width: 736,
    height: 981,
    alt: "Small square painting of pink bougainvillea over a pale blue sky with birds in flight.",
    plateNo: "No. 05",
    title: "Coastal Bloom",
    medium: "Acrylic, Miniature",
  },
  {
    src: galleryNo10BackViewJpg,
    srcWebp: galleryNo10BackViewWebp,
    width: 736,
    height: 981,
    alt: "Miniature custom portrait on a mini easel, painted from behind, of a footballer in a number ten jersey.",
    plateNo: "No. 06",
    title: "Private Commission",
    medium: "Acrylic, Miniature",
  },
];

export interface InstagramPost {
  src: string;
  srcWebp: string;
  alt: string;
  label: string;
}

export const instagramPosts: InstagramPost[] = [
  {
    src: galleryQuietTulipJpg,
    srcWebp: galleryQuietTulipWebp,
    alt: "Modern flat-colour painting of a single cream tulip.",
    label: "Quiet Tulip painting",
  },
  {
    src: gallerySweetheartSetJpg,
    srcWebp: gallerySweetheartSetWebp,
    alt: "Set of four small custom canvases with love, heart, and bow motifs.",
    label: "Sweetheart custom canvas set",
  },
  {
    src: galleryCliffsideBloomJpg,
    srcWebp: galleryCliffsideBloomWebp,
    alt: "Small square painting of pink bougainvillea over a pale blue sky.",
    label: "Coastal Bloom painting",
  },
  {
    src: processPaletteDetailJpg,
    srcWebp: processPaletteDetailWebp,
    alt: "Brush blending pink and lavender paint on a palette.",
    label: "mixing paint on the palette",
  },
  {
    src: processEyeDetailJpg,
    srcWebp: processEyeDetailWebp,
    alt: "Close-up of a fine blue-toned eye being painted on canvas.",
    label: "painting a fine detail in blue",
  },
];

export interface WallFrame extends Picture {
  /** Tailwind grid-column/row placement classes for this frame's slot in the salon wall. */
  gridClass: string;
}

/**
 * The hero's salon wall — exactly 7 frames (w1–w7) in a fixed 6-col × 4-row grid, matching the
 * approved reference implementation precisely. Uses the small pre-optimized thumbs rather than
 * the full-size gallery images: these render at ~100–140px on screen, so serving full-size
 * assets here would be pure waste.
 *
 * Mapping from the reference's generic filenames to this project's actual assets:
 *   hero-meadow → wildflower-hour · tulip → quiet-tulip · pink-set → sweetheart-set
 *   coastal-bloom → cliffside-bloom · commission-sample → no10-backview
 *   rose-interior → rose-magnolia · palette-closeup → process-palette-detail
 */
export const wallFrames: WallFrame[] = [
  {
    // w1 — hero-meadow
    src: thumbWildflower,
    srcWebp: thumbWildflowerWebp,
    width: 208,
    height: 260,
    alt: "",
    gridClass: "col-start-1 col-end-3 row-start-1 row-end-2",
  },
  {
    // w2 — tulip
    src: thumbTulip,
    srcWebp: thumbTulipWebp,
    width: 205,
    height: 260,
    alt: "",
    gridClass: "col-start-5 col-end-7 row-start-1 row-end-2",
  },
  {
    // w3 — pink-set
    src: thumbSweetheart,
    srcWebp: thumbSweetheartWebp,
    width: 146,
    height: 260,
    alt: "",
    gridClass: "col-start-1 col-end-2 row-start-2 row-end-4",
  },
  {
    // w4 — coastal-bloom
    src: thumbCliffside,
    srcWebp: thumbCliffsideWebp,
    width: 195,
    height: 260,
    alt: "",
    gridClass: "col-start-6 col-end-7 row-start-2 row-end-4",
  },
  {
    // w5 — commission-sample
    src: thumbNo10,
    srcWebp: thumbNo10Webp,
    width: 195,
    height: 260,
    alt: "",
    gridClass: "col-start-1 col-end-3 row-start-4 row-end-5",
  },
  {
    // w6 — rose-interior
    src: thumbRoseMagnolia,
    srcWebp: thumbRoseMagnoliaWebp,
    width: 192,
    height: 260,
    alt: "",
    gridClass: "col-start-5 col-end-7 row-start-4 row-end-5",
  },
  {
    // w7 — palette-closeup
    src: thumbPalette,
    srcWebp: thumbPaletteWebp,
    width: 146,
    height: 260,
    alt: "",
    gridClass: "col-start-2 col-end-3 row-start-4 row-end-5",
  },
];
