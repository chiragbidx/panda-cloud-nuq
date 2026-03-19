// ─── Hero ───────────────────────────────────────────────────────────────────
export type HeroContent = {
  badgeInner: string;
  badgeOuter: string;
  titleBefore: string;
  titleHighlight: string;
  titleAfter: string;
  subtitle: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  heroImageLight: string;
  heroImageDark: string;
  heroImageAlt: string;
};

// ... (other types unchanged) ...

export const defaultHomeContent: HomeContent = {
  // ── Hero ─────────────────────────────────────────────────────────────────
  hero: {
    badgeInner: "CRM for Small Teams",
    badgeOuter: "LeadNest",
    titleBefore: "Grow Relationships.",
    titleHighlight: "Boost Sales.",
    titleAfter: "",
    subtitle:
      "LeadNest is the CRM that helps your team track leads, manage contacts, and close deals—all in a single, easy-to-use dashboard.",
    primaryCta: { label: "Get Started Free", href: "/auth#signup" },
    secondaryCta: { label: "See LeadNest in Action", href: "#features" },
    heroImageLight: "/hero-image-light.jpeg",
    heroImageDark: "/hero-image-dark.jpeg",
    heroImageAlt: "LeadNest CRM dashboard preview",
  },

  sponsors: {
    heading: "Built with trusted tools",
    items: [
      { icon: "Crown", name: "Vercel" },
      { icon: "Vegan", name: "Stripe" },
      { icon: "Ghost", name: "OpenAI" },
      { icon: "Puzzle", name: "Supabase" },
      { icon: "Squirrel", name: "Clerk" },
      { icon: "Cookie", name: "Resend" },
      { icon: "Drama", name: "Sentry" },
    ],
  },

  // ── Benefits (using as features summary in copy) ─────────────────────────
  benefits: {
    eyebrow: "Why LeadNest",
    heading: "Smart, simple CRM for teams who want to thrive",
    description:
      "LeadNest gives small business teams everything they need to organize leads, contacts, and close deals—a better way to work together and grow your pipeline.",
    items: [
      {
        icon: "Blocks",
        title: "All-in-one Lead & Contact Management",
        description: "Everything you need to organize leads and contacts.",
      },
      {
        icon: "LineChart",
        title: "Visual Sales Pipeline",
        description: "Keep deals moving with a clear, actionable pipeline.",
      },
      {
        icon: "Users",
        title: "Collaborate in Real Time",
        description: "Invite your team and keep everyone aligned with instant updates.",
      },
      {
        icon: "Activity",
        title: "Instant Insights & History",
        description: "See activity, conversations, and history for every lead and deal.",
      },
    ],
  },

  features: {
    eyebrow: "Features",
    heading: "LeadNest helps your team win more deals",
    subtitle: "A CRM that empowers collaboration, clarity, and growth.",
    items: [
      { icon: "UserPlus", title: "Everything you need to organize leads and contacts", description: "Keep all your prospects and customers in one focused workspace." },
      { icon: "Kanban", title: "Visual sales pipeline to keep deals moving forward", description: "Glanceable deal flow with stages, drag-and-drop, and status insights." },
      { icon: "Users", title: "Collaborate with your team in real time", description: "Keep everyone on the same page for every opportunity." },
      { icon: "Activity", title: "Instant insights and activity history", description: "Timeline view of all activity, notes, and follow-ups for each contact." },
    ],
  },

  services: {
    eyebrow: "Services",
    heading: "Everything you need to close more deals",
    subtitle:
      "Organize, collaborate, and take action—LeadNest is the smart CRM built for growth.",
    items: [
      { title: "Lead & Contact Management", description: "Store, tag, and organize your relationships with ease.", pro: false },
      { title: "Sales Pipeline Boards", description: "Track deals and move them through your customized sales stages.", pro: false },
      { title: "Work as One Team", description: "Assign leads, log activities, and sync with teammates instantly.", pro: false },
      { title: "Insights & Stats", description: "Actionable metrics that show what’s working and what’s next.", pro: true },
    ],
  },

  testimonials: {
    eyebrow: "Testimonials",
    heading: "Customers growing with LeadNest",
    reviews: [
      { image: "/demo-img.jpg", name: "Jessica Ray", role: "Sales Lead, SproutFlow", comment: "LeadNest keeps our team focused and our pipeline full.", rating: 5.0 },
      { image: "/demo-img.jpg", name: "Marcus Evans", role: "Founder, Jumpstart Marketing", comment: "Finally, a CRM that's simple enough for our team and powerful enough for our needs.", rating: 4.9 },
      { image: "/demo-img.jpg", name: "Maria Chen", role: "Growth Manager, Syncly", comment: "Fast, friendly, delivers exactly what we need in a CRM.", rating: 5.0 },
    ],
  },

  team: {
    eyebrow: "Team",
    heading: "Meet the LeadNest team",
    members: [
      {
        imageUrl: "/team1.jpg",
        firstName: "Chirag",
        lastName: "Dodiya",
        positions: ["Founder", "Product Lead"],
        socialNetworks: [
          { name: "LinkedIn", url: "https://www.linkedin.com/in/chiragdodiya/" },
          { name: "Github", url: "https://github.com/chiragdodiya" },
        ],
      },
      // ...other members (placeholder or leave unchanged for now)
    ],
  },

  pricing: {
    eyebrow: "Pricing",
    heading: "Simple, transparent pricing",
    subtitle: "Start free. Upgrade only when you grow.",
    priceSuffix: "/month",
    plans: [
      {
        title: "Starter",
        popular: false,
        price: 0,
        description: "Perfect for trying out LeadNest.",
        buttonText: "Start free",
        benefits: ["1 workspace", "Up to 3 teammates", "Leads & contacts", "Visual pipeline", "Email support"],
      },
      {
        title: "Pro",
        popular: true,
        price: 39,
        description: "Designed for fast-growing teams.",
        buttonText: "Start trial",
        benefits: ["Unlimited teammates", "Full pipeline boards", "Advanced search", "Real-time activity feed", "Priority support"],
      },
      {
        title: "Business",
        popular: false,
        price: 129,
        description: "For teams ready to scale.",
        buttonText: "Contact sales",
        benefits: ["Custom integrations", "Export & reporting", "Dedicated success manager", "Advanced user roles", "API access"],
      },
    ],
  },

  contact: {
    eyebrow: "Contact",
    heading: "Get in touch with LeadNest",
    description:
      "Have a question or want a demo? We're here to help your team succeed.",
    mailtoAddress: "chirag@bidx.ai",
    info: {
      address: { label: "Location", value: "Remote-first • Worldwide" },
      phone: { label: "Contact", value: "" },
      email: { label: "Email", value: "chirag@bidx.ai" },
      hours: { label: "Hours", value: ["Monday - Friday", "9AM - 6PM"] },
    },
    formSubjects: ["Product Demo", "Onboarding", "Custom Fields", "Integrations", "Billing/Plans"],
    formSubmitLabel: "Send Message",
  },

  faq: {
    eyebrow: "FAQ",
    heading: "LeadNest Frequently Asked Questions",
    items: [
      {
        question: "What is LeadNest?",
        answer: "LeadNest is a modern CRM to help small teams organize leads, manage contacts, and boost sales—all in one dashboard.",
      },
      {
        question: "Is there a free plan?",
        answer: "Yes, LeadNest offers a free Starter plan to help you get organized without cost.",
      },
      {
        question: "Can I invite my team?",
        answer: "Absolutely. Add teammates and collaborate in real-time.",
      },
      {
        question: "Can I customize fields or stages?",
        answer: "Yes, you’ll be able to configure pipeline stages and add custom fields.",
      },
      {
        question: "How do I get support?",
        answer: "Reach out to chirag@bidx.ai or use the in-app chat—help is just a click away.",
      },
    ],
  },

  footer: {
    brandName: "LeadNest",
    columns: [
      {
        heading: "Contact",
        links: [
          { label: "chirag@bidx.ai", href: "mailto:chirag@bidx.ai" },
          { label: "Twitter", href: "https://x.com" },
        ],
      },
      {
        heading: "Product",
        links: [
          { label: "Features", href: "#features" },
          { label: "Pricing", href: "#pricing" },
          { label: "Contact", href: "#contact" },
        ],
      },
      {
        heading: "Help",
        links: [
          { label: "Contact Us", href: "#contact" },
          { label: "FAQ", href: "#faq" },
        ],
      },
      {
        heading: "Socials",
        links: [
          { label: "LinkedIn", href: "https://linkedin.com" },
          { label: "GitHub", href: "https://github.com" },
        ],
      },
    ],
    copyright: "\u00a9 2026 LeadNest. All rights reserved.",
    attribution: { label: "Built on Next.js", href: "https://nextjs.org" },
  },

  navbar: {
    brandName: "LeadNest",
    routes: [
      { href: "/#features", label: "Features" },
      { href: "/#pricing", label: "Pricing" },
      { href: "/#contact", label: "Contact" },
      { href: "/#faq", label: "FAQ" },
    ],
    featureDropdownLabel: "Features",
    featureImage: { src: "/demo-img.jpg", alt: "LeadNest preview" },
    features: [
      { title: "Leads & Contacts", description: "Track customer data and manage relationships in one place." },
      { title: "Visual Pipeline", description: "Move deals forward and keep your pipeline full." },
      { title: "Team Collaboration", description: "Share, assign, and work together in real-time." },
    ],
    signInLabel: "Sign in",
    signUpLabel: "Sign up",
    dashboardLabel: "Dashboard",
    githubLink: { href: "https://github.com", ariaLabel: "View on GitHub" },
  },
};

export const homeContent: HomeContent = defaultHomeContent;
export function getHomeContent(): HomeContent {
  return homeContent;
}