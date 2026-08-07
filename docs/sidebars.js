/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docsSidebar: [
    {
      type: 'category',
      label: 'Overview',
      items: ['overview/product-vision', 'overview/competitor-teardown'],
    },
    {
      type: 'category',
      label: 'Platforms',
      items: [
        'platforms/android',
        'platforms/ios-tvos',
        'platforms/smart-tv-web',
        'platforms/roku',
      ],
    },
    {
      type: 'category',
      label: 'Architecture',
      items: [
        'architecture/high-level-design',
        'architecture/shared-backend',
        'architecture/sync-engine',
        'architecture/media-provider-abstraction',
        'architecture/diagrams',
      ],
    },
    {
      type: 'category',
      label: 'Roadmap',
      items: [
        'roadmap/phase-1-android',
        'roadmap/phase-2-firetv',
        'roadmap/phase-3-apple',
        'roadmap/phase-4-web-core',
        'roadmap/phase-5-smart-tv',
        'roadmap/phase-6-roku',
        'roadmap/phase-7-desktop',
      ],
    },
    {
      type: 'category',
      label: 'Features',
      items: [
        'features/slideshow-engine',
        'features/smart-curation',
        'features/digital-signage',
        'features/reliability-trust',
        'features/sharing-collaboration',
      ],
    },
  ],
};

module.exports = sidebars;
