// Full-size images (JPEG, re-encoded ~82q, longest edge capped 1400px) + WebP twins.
import heroBloomReverieJpg from "@/assets/images/hero-bloom-reverie.jpg";
import heroBloomReverieWebp from "@/assets/images/hero-bloom-reverie.webp";
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
import thumbHero from "@/assets/images/thumb-hero-bloom-reverie.jpg";
import thumbHeroWebp from "@/assets/images/thumb-hero-bloom-reverie.webp";
import thumbAbout from "@/assets/images/thumb-about-artist-at-work.jpg";
import thumbAboutWebp from "@/assets/images/thumb-about-artist-at-work.webp";
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
import thumbEye from "@/assets/images/thumb-process-eye-detail.jpg";
import thumbEyeWebp from "@/assets/images/thumb-process-eye-detail.webp";

export interface Picture {
  src: string;
  srcWebp: string;
  width: number;
  height: number;
  alt: string;
}

export const heroPainting: Picture & { plateNo: string; title: string; medium: string } = {
  src: heroBloomReverieJpg,
  srcWebp: heroBloomReverieWebp,
  width: 932,
  height: 1400,
  alt: "Textured oil portrait of a woman in a starry-night-patterned gown, framed by two large painted roses at her shoulders.",
  plateNo: "No. 01",
  title: "Bloom & Reverie",
  medium: "Custom Portrait · Oil on Canvas",
};

export const aboutPhoto: Picture = {
  src: aboutArtistAtWorkJpg,
  srcWebp: aboutArtistAtWorkWebp,
  width: 736,
  height: 920,
  alt: "Rania Derouich's hand holding a fine brush, mid-stroke, above a canvas in her studio.",
};

/** The circular photo that straddles the seam between the floral band and the next section. */
export const floralBandPhoto: Picture = {
  src: processEyeDetailJpg,
  srcWebp: processEyeDetailWebp,
  width: 736,
  height: 981,
  alt: "Close-up of a fine blue-toned eye being painted on canvas, mid-brushstroke.",
};

export const floralBandImage: Picture = {
  src: galleryWildflowerHourJpg,
  srcWebp: galleryWildflowerHourWebp,
  width: 736,
  height: 920,
  alt: "Wide acrylic painting of a wildflower meadow at dusk, with butterflies rising against a pink and gold sky.",
};

export interface GalleryPiece extends Picture {
  plateNo: string;
  title: string;
  medium: string;
}

export const galleryPieces: GalleryPiece[] = [
  {
    src: galleryRoseMagnoliaJpg,
    srcWebp: galleryRoseMagnoliaWebp,
    width: 955,
    height: 1291,
    alt: "Still life oil painting of a deep red rose and two pink magnolia blooms in a blue glass vase, signed Rania Derouich.",
    plateNo: "No. 02",
    title: "Rose & Magnolia",
    medium: "Floral Still Life · Oil on Canvas",
  },
  {
    src: galleryWildflowerHourJpg,
    srcWebp: galleryWildflowerHourWebp,
    width: 736,
    height: 920,
    alt: "Wide acrylic painting of a wildflower meadow at dusk, with butterflies rising against a pink and gold sky.",
    plateNo: "No. 03",
    title: "Wildflower Hour",
    medium: "Floral Still Life · Acrylic on Canvas",
  },
  {
    src: galleryQuietTulipJpg,
    srcWebp: galleryQuietTulipWebp,
    width: 735,
    height: 932,
    alt: "Modern flat-colour painting of a single cream tulip against a dusty pink background with abstract ribbon shapes.",
    plateNo: "No. 04",
    title: "Quiet Tulip",
    medium: "Floral Still Life · Acrylic on Canvas",
  },
  {
    src: galleryCliffsideBloomJpg,
    srcWebp: galleryCliffsideBloomWebp,
    width: 736,
    height: 981,
    alt: "Small square painting of pink bougainvillea over a pale blue sky with birds in flight.",
    plateNo: "No. 05",
    title: "Cliffside Bloom",
    medium: "Floral Still Life · Acrylic on Canvas",
  },
  {
    src: galleryNo10BackViewJpg,
    srcWebp: galleryNo10BackViewWebp,
    width: 736,
    height: 981,
    alt: "Miniature custom portrait on a mini easel, painted from behind, of a footballer in a number ten jersey.",
    plateNo: "No. 06",
    title: "No. 10, Back View",
    medium: "Custom Portrait · Acrylic on Canvas",
  },
  {
    src: gallerySweetheartSetJpg,
    srcWebp: gallerySweetheartSetWebp,
    width: 675,
    height: 1200,
    alt: "Set of four small custom canvases with a love lettering piece, a heart and ladybird, a martini glass, and a bow motif.",
    plateNo: "No. 07",
    title: "Sweetheart Set",
    medium: "Custom Commission · Acrylic on Canvas",
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
    src: processEyeDetailJpg,
    srcWebp: processEyeDetailWebp,
    alt: "Close-up of a fine blue-toned eye being painted on canvas.",
    label: "painting a fine detail in blue",
  },
  {
    src: processPaletteDetailJpg,
    srcWebp: processPaletteDetailWebp,
    alt: "Brush blending pink and lavender paint on a palette.",
    label: "mixing paint on the palette",
  },
  {
    src: galleryRoseMagnoliaJpg,
    srcWebp: galleryRoseMagnoliaWebp,
    alt: "Framed still life painting of a red rose and pink magnolias in a blue vase.",
    label: "Rose and Magnolia still life",
  },
  {
    src: galleryWildflowerHourJpg,
    srcWebp: galleryWildflowerHourWebp,
    alt: "Wildflower meadow painting at dusk.",
    label: "Wildflower Hour meadow painting",
  },
  {
    src: galleryNo10BackViewJpg,
    srcWebp: galleryNo10BackViewWebp,
    alt: "Miniature custom portrait of a footballer on a mini easel.",
    label: "miniature footballer portrait commission",
  },
];

export interface SalonThumb {
  src: string;
  srcWebp: string;
  width: number;
  height: number;
  alt: string;
}

/** Small decorative thumbnails tiled across the hero's salon wall. Purely decorative — empty alt. */
export const salonWallThumbs: SalonThumb[] = [
  { src: thumbHero, srcWebp: thumbHeroWebp, width: 173, height: 260, alt: "" },
  { src: thumbAbout, srcWebp: thumbAboutWebp, width: 208, height: 260, alt: "" },
  { src: thumbRoseMagnolia, srcWebp: thumbRoseMagnoliaWebp, width: 192, height: 260, alt: "" },
  { src: thumbWildflower, srcWebp: thumbWildflowerWebp, width: 208, height: 260, alt: "" },
  { src: thumbTulip, srcWebp: thumbTulipWebp, width: 205, height: 260, alt: "" },
  { src: thumbCliffside, srcWebp: thumbCliffsideWebp, width: 195, height: 260, alt: "" },
  { src: thumbNo10, srcWebp: thumbNo10Webp, width: 195, height: 260, alt: "" },
  { src: thumbSweetheart, srcWebp: thumbSweetheartWebp, width: 146, height: 260, alt: "" },
  { src: thumbPalette, srcWebp: thumbPaletteWebp, width: 146, height: 260, alt: "" },
  { src: thumbEye, srcWebp: thumbEyeWebp, width: 195, height: 260, alt: "" },
];
