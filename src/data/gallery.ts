import heroBloomReverie from "@/assets/images/hero-bloom-reverie.jpg";
import aboutArtistAtWork from "@/assets/images/about-artist-at-work.jpg";
import galleryRoseMagnolia from "@/assets/images/gallery-rose-magnolia.jpg";
import galleryWildflowerHour from "@/assets/images/gallery-wildflower-hour.jpg";
import galleryQuietTulip from "@/assets/images/gallery-quiet-tulip.jpg";
import galleryCliffsideBloom from "@/assets/images/gallery-cliffside-bloom.jpg";
import galleryNo10BackView from "@/assets/images/gallery-no10-backview.jpg";
import gallerySweetheartSet from "@/assets/images/gallery-sweetheart-set.jpg";
import processPaletteDetail from "@/assets/images/process-palette-detail.jpg";
import processEyeDetail from "@/assets/images/process-eye-detail.jpg";

export const heroPainting = {
  src: heroBloomReverie,
  alt: "Textured oil portrait of a woman in a starry-night-patterned gown, framed by two large painted roses at her shoulders.",
  plateNo: "No. 01",
  title: "Bloom & Reverie",
  medium: "Custom Portrait · Oil on Canvas",
};

export const aboutPhoto = {
  src: aboutArtistAtWork,
  alt: "Rania Derouich's hand holding a fine brush, mid-stroke, above a canvas in her studio.",
};

export const commissionsBackground = {
  src: processPaletteDetail,
  alt: "",
};

export interface GalleryPiece {
  src: string;
  alt: string;
  plateNo: string;
  title: string;
  medium: string;
}

export const galleryPieces: GalleryPiece[] = [
  {
    src: galleryRoseMagnolia,
    alt: "Still life oil painting of a deep red rose and two pink magnolia blooms in a blue glass vase, signed Rania Derouich.",
    plateNo: "No. 02",
    title: "Rose & Magnolia",
    medium: "Floral Still Life · Oil on Canvas",
  },
  {
    src: galleryWildflowerHour,
    alt: "Wide acrylic painting of a wildflower meadow at dusk, with butterflies rising against a pink and gold sky.",
    plateNo: "No. 03",
    title: "Wildflower Hour",
    medium: "Floral Still Life · Acrylic on Canvas",
  },
  {
    src: galleryQuietTulip,
    alt: "Modern flat-colour painting of a single cream tulip against a dusty pink background with abstract ribbon shapes.",
    plateNo: "No. 04",
    title: "Quiet Tulip",
    medium: "Floral Still Life · Acrylic on Canvas",
  },
  {
    src: galleryCliffsideBloom,
    alt: "Small square painting of pink bougainvillea over a pale blue sky with birds in flight.",
    plateNo: "No. 05",
    title: "Cliffside Bloom",
    medium: "Floral Still Life · Acrylic on Canvas",
  },
  {
    src: galleryNo10BackView,
    alt: "Miniature custom portrait on a mini easel, painted from behind, of a footballer in a number ten jersey.",
    plateNo: "No. 06",
    title: "No. 10, Back View",
    medium: "Custom Portrait · Acrylic on Canvas",
  },
  {
    src: gallerySweetheartSet,
    alt: "Set of four small custom canvases with a love lettering piece, a heart and ladybird, a martini glass, and a bow motif.",
    plateNo: "No. 07",
    title: "Sweetheart Set",
    medium: "Custom Commission · Acrylic on Canvas",
  },
];

export interface InstagramPost {
  src: string;
  alt: string;
  label: string;
}

export const instagramPosts: InstagramPost[] = [
  {
    src: processEyeDetail,
    alt: "Close-up of a fine blue-toned eye being painted on canvas.",
    label: "painting a fine detail in blue",
  },
  {
    src: processPaletteDetail,
    alt: "Brush blending pink and lavender paint on a palette.",
    label: "mixing paint on the palette",
  },
  {
    src: galleryRoseMagnolia,
    alt: "Framed still life painting of a red rose and pink magnolias in a blue vase.",
    label: "Rose and Magnolia still life",
  },
  {
    src: galleryWildflowerHour,
    alt: "Wildflower meadow painting at dusk.",
    label: "Wildflower Hour meadow painting",
  },
  {
    src: galleryNo10BackView,
    alt: "Miniature custom portrait of a footballer on a mini easel.",
    label: "miniature footballer portrait commission",
  },
];
