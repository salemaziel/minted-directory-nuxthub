export default defineAppConfig({
  general: {
    title: 'City Heights Defense Committee',
    logo: '/chdc-logo-64x.png',
    iconLogo: 'fluent-emoji-flat:leaf-fluttering-in-wind',
    language: 'en',
  },
  site: {
    // override the general settings for seo tags.
    // leave empty for general priority.
    // url is necessary for correct function of seo module.
    name: 'City Heights Defense Committee',
    description: 'Resources, guides, community and legal organization directory to empower our community',
    url: 'https://salemaziel-minted-directory-nuxthub.nuxt.space',
    favicon: {
      image: '/chdc-logo-256x.png',
      emoji: '/chdc-logo-32x.png',
    },
  },
  directory: {
    listingPageLayout: 'card',
    search: {
      placeholder: 'Search among {0} tools',
      icon: 'i-material-symbols-search-insights',
      tags: {
        // options: none,select,show-all,
        display: 'show-all',
        intersection: false,
      },
    },
    grid: {
      list: false,
      emptyState: {
        text: 'Seems that this entry is missing from the archives.',
        // options: button, simple, link
        type: 'button',
        icon: 'tabler:exclamation-mark',
      },
      card: {
        image: true,
        // options: dashed, shadow, outline, bullet
        type: 'shadow',
      },
      submit: {
        show: true,
        first: false,
        title: 'Submit a template',
        description:
          'Submit a template to show off a good project to other people.',
        hideable: true,
      },
    },
    featured: {
      showOnAllPages: true,
      showOnSide: true,
      icon: 'tabler:star',
      labelForCard: 'Featured ✨',
    },
    tags: [
      { name: 'SAAS', color: 'blue' },
      { name: 'dashboard', color: 'green' },
      { name: 'landing-page' },
      { name: 'toolbox' },
      { name: 'agency' },
      { name: 'markdown-based' },
      { name: 'basics', color: 'indigo' },
    ],
    tagPages: {
      title: 'Available {0} products:',
      description:
        'View all available tools and templates in the {0} category...',
    },
  },
  header: {
    banner: {
      show: true,
      text: 'Create your own directory website in minutes.',
      link: 'https://minteddirectory.com',
      brandText: 'MintedDirectory',
    },
    navbar: {
      colorModeSelector: true,
      links: [
        { name: 'Directory', to: '/' },
        { name: 'Blog', to: '/blog' },
        { name: 'Advertise', to: '/advertise' },
        {
          name: 'Analytics',
          to: 'https://us.posthog.com/shared/7dgSk4cvgNYnJwBu6R47kZXHBUBJWQ',
          target: '_blank',
        },
      ],
    },
    actionButton: {
      text: 'Submit a listing',
      href: '/submit',
    },
  },
  footer: {
    description: "Best directory for my niche.",
    navigation: [{
      title: 'Directory',

      links: {
        '0': {
          title: 'Submit',
          link: '/submit',
        },

        '1': {
          title: 'Advertise',
          link: '/advertise',
        },
      },
    }, {
      title: 'Categories',

      links: {
        '0': {
          title: 'SAAS',
          link: '/tags/saas',
        },

        '1': {
          title: 'Dashboard',
          link: '/tags/dashboard',
        },

        '2': {
          title: 'Landing Page',
          link: '/tags/landing-page',
        },

        '3': {
          title: 'Toolbox',
          link: '/tags/toolbox',
        },
      },
    }, {
      title: 'Blog',

      links: {
        '0': {
          title: 'Articles',
          link: '/blog',
        },
      },
    }, {
      title: 'Legal',

      links: {
        '0': {
          title: 'Privacy Policy',
          link: '/legal/terms-of-service',
        },

        '1': {
          title: 'Terms of Service',
          link: '/legal/privacy-policy',
        },
      },
    }],
    socials: {
      github: {
        link: '',
        icon: 'tabler:brand-github',
      },
      facebook: {
        link: '',
        icon: 'tabler:brand-facebook',
      },
      instagram: {
        link: '',
        icon: 'tabler:brand-instagram',
      },
      x: {
        link: 'https://x.com/mark_bruderer',
        icon: 'tabler:brand-twitter',
      },
      youtube: {
        link: 'https://www.youtube.com/@mark_hacks',
        icon: 'tabler:brand-youtube',
      },
    },
  },
  ui: {
    icons: {
      dark: 'tabler:moon',
      light: 'tabler:sun',
    },
  },
});