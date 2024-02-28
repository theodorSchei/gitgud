import { defineConfig } from 'astro/config';

import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'Velkommen til Git',

      logo: {
        light: './src/assets/Git-Icon-Black.svg',
        dark: './src/assets/Git-Icon-White.svg',
        replacesTitle: false,
      },

      sidebar: [
        { label: 'Velkommen!', link: '/' },
        { label: 'Git-nivåer', autogenerate: { directory: '/git-levels/' } },
        {
          label: 'Git-kommandoer',
          autogenerate: { directory: '/git-commands/' },
        },
      ],

      tableOfContents: false,

      locales: {
        root: {
          label: 'Norsk',
          lang: 'nb',
        },
      },
    }),
  ],
});
