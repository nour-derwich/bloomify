export const instagramHandle = "bloomify688";
export const instagramUrl = `https://instagram.com/${instagramHandle}`;

export const navLinks = [
  { label: "Story", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Commissions", href: "#commissions" },
  { label: "Contact", href: "#contact" },
];

export const heroContent = {
  title: "BLOOMIFY",
  phonetic: "' bluː·mɪ·faɪ '",
  quote:
    "Every canvas is a small room you get to step inside — painted by hand, kept just for you.",
};

export const storyContent = {
  paragraphs: [
    "I'm Rania Derouich, the artist behind Bloomify. What began as a private hobby has grown into a considered practice — floral still lifes, portrait studies, and pieces painted to order for people who want something no one else will ever own.",
    "I work mostly in acrylic and oil, building texture in layers until a canvas feels alive. Every finished piece is signed, and every commission is composed just for you.",
  ],
};

export const whenWhere = [
  {
    eyebrow: "The Medium",
    heading: "What I Paint With",
    big: "Acrylic & oil, on canvas",
    body: "Built up in layers with brush and palette knife — from small studies to full statement pieces.",
  },
  {
    eyebrow: "The Studio",
    heading: "Where to Find the Work",
    big: `@${instagramHandle} on Instagram`,
    body: "New pieces, works in progress, and finished commissions are shared there first.",
  },
];

export const processSteps = [
  {
    no: "I.",
    title: "Enquiry",
    body: "Share your idea, reference images, and preferred size by message.",
  },
  {
    no: "II.",
    title: "Proposal",
    body: "You'll receive a concept and quote for approval before any work begins.",
  },
  {
    no: "III.",
    title: "Delivery",
    body: "Your piece is painted, signed, and carefully shipped or delivered by hand.",
  },
];

export const doilyBadge = {
  eyebrow: "Enquire",
  label: "Begin Here",
  note: `Send your idea to @${instagramHandle} on Instagram, and expect a reply within a couple of days.`,
};

export const footerLinks = [
  { label: "Story", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Commissions", href: "#commissions" },
];

export const contactLinks: { label: string; href?: string }[] = [
  { label: `@${instagramHandle}`, href: instagramUrl },
  { label: "Replies within 1–2 days" },
];

export const footerCopyright = [
  "© 2026 Bloomify. All paintings are original works by Rania Derouich.",
  "Made by hand, one canvas at a time.",
];

// Required under Vecteezy's free-tier license for the two hero silhouette images
// (resource ID 1196237). Drop this if the Pro license is purchased instead.
export const imageAttribution = "Silhouette image via Vecteezy";
