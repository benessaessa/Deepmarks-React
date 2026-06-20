import portfolio1 from '../assets/portfolio.png'
import portfolio2 from '../assets/portfolio2.png'

export const PROJECTS = [
  {
    id: 'lift2026',
    year: '2026',
    title: 'Lift2026',
    description: 'Premium brand identity system for a modern fitness and lifestyle brand.',
    image: portfolio1,
    imageAlt: 'Lift2026 project',
    author: {
      name: 'Alex Doe',
      position: 'Lead Designer',
      avatar: portfolio1,
    },
    detail: {
      lead:
        'Lift2026 is a modern fitness and lifestyle brand. We developed the brand strategy, visual identity, color system, and flexible logo system that scales across digital and physical touchpoints.',
      images: [portfolio1, portfolio2],
      content: [
        'We built a bold visual system that supports both premium performance messaging and approachable sports lifestyle storytelling.',
        'The color palette and typography were designed to feel energetic, confident, and modern across digital, packaging, and apparel.',
        'Deliverables included logo variations, application mockups, brand guidelines, and identity rules for a fast-growing fitness ecosystem.',
      ],
      deliverables: [
        'Brand strategy and positioning',
        'Primary and secondary logo system',
        'Color palette and typography rules',
        'Application mockups and guidelines',
      ],
    },
  },
  {
    id: 'zat-brand',
    year: '2024',
    title: 'ZAT',
    description: 'Culturally rich branding for a lifestyle brand rooted in identity.',
    image: portfolio2,
    imageAlt: 'ZAT project',
    author: {
      name: 'Maria Lee',
      position: 'Brand Strategist',
      avatar: portfolio2,
    },
    detail: {
      lead:
        'ZAT is a lifestyle brand that blends cultural storytelling with modern luxury. We crafted a brand identity that feels both rooted and aspirational.',
      images: [portfolio2],
      content: [
        'The identity system supports a narrative that honors heritage while remaining fresh and contemporary across product and digital experiences.',
        'Logo locking, color treatments, and brand photography direction were created to reinforce a premium yet approachable feeling.',
        'Hands-on guidelines help the team maintain consistency while allowing the brand to scale into new collections and spaces.',
      ],
      deliverables: [
        'Identity system and logo guidelines',
        'Cultural storytelling framework',
        'Packaging and lifestyle mockups',
        'Typeface and color application rules',
      ],
    },
  },
  {
    id: 'nogoom-fc',
    year: '2024–2025',
    title: 'Nogoom FC',
    description: 'Bold sports club identity with dynamic logo system and brand guidelines.',
    image: portfolio1,
    imageAlt: 'Nogoom FC project',
    author: {
      name: 'Omar Salah',
      position: 'Creative Director',
      avatar: portfolio1,
    },
    detail: {
      lead:
        'Nogoom FC required a visual identity that could energize fans, sponsors, and community activations with a single cohesive system.',
      images: [portfolio1],
      content: [
        'We created a dynamic logo family and support graphics that work across jerseys, stadium signage, digital, and social content.',
        'The identity uses bold angles, rich colors, and confident typography to feel modern, athletic, and memorable.',
        'Complete brand guidelines ensure every expression of the club stays consistent and premium as the franchise grows.',
      ],
      deliverables: [
        'Dynamic logo system',
        'Club identity and pattern system',
        'Environmental graphics and merchandise mockups',
        'Visual brand guidelines and usage rules',
      ],
    },
  },
]

export function getProjectById(id) {
  return PROJECTS.find((project) => project.id === id)
}
