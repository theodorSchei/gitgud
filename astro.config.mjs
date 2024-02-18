import { defineConfig } from "astro/config";

import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Velkommen til Git",

      sidebar: [
        { label: "Velkommen!", link: "/" },
        { label: "Git-nivåer", autogenerate: { directory: "/git-levels/" } },
        {
          label: "Git-kommandoer",
          autogenerate: { directory: "/git-commands/" },
        },
      ],
    }),
  ],
});

