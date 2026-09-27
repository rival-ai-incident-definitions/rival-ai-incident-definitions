import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import mdx from '@astrojs/mdx';
import { execSync } from 'child_process';
import remarkMath from 'remark-math';
import remarkGfm from 'remark-gfm';
import rehypeKatex from 'rehype-katex';
import starlightImageZoom from 'starlight-image-zoom';

export default defineConfig({
  site: 'https://rival-ai-incident-definitions.github.io',
  base: '/rival-ai-incident-definitions',
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
  integrations: [
    {
      name: 'build-backlinks',
      hooks: {
        'astro:build:start': () => execSync('node scripts/build-backlinks.mjs'),
        'astro:server:start': () => execSync('node scripts/build-backlinks.mjs'),
      },
    },
    starlight({
      plugins: [starlightImageZoom()],
      title: 'Rival AI-Incident Definitions',
      lastUpdated: false,
      description: 'Rival definitions of an AI incident applied to the same incidents: where they disagree, whether the disagreement survives every reading of each definition, and how other safety fields decide what counts',
      customCss: ['./src/styles/custom.css'],
      expressiveCode: {
        themes: ['github-dark', 'github-light'],
        styleOverrides: {
          borderRadius: '0.375rem',
        },
      },
      components: {
        Pagination: './src/components/PageFooter.astro',
        PageTitle: './src/components/PageTitle.astro',
        ThemeSelect: './src/components/ThemeSelect.astro',
      },
      sidebar: [
        { label: 'Home', link: '/' },
        {
          label: 'Overview',
          collapsed: false,
          items: [
            { label: 'Framework Overview', link: '/framework/' },
            { label: 'Glossary', link: '/glossary/' },
            { label: 'About', link: '/about_cite/' },
          ],
        },
        {
          label: 'Rival AI-Incident Definitions Framework',
          collapsed: false,
          items: [
            { label: 'Theoretical Foundations', link: '/foundations/' },
            {
              label: '1. Definitions',
              collapsed: true,
              items: [
                { label: 'Overview', link: '/definitions/' },
                { label: 'OECD', link: '/definitions/oecd/' },
                { label: 'EU AI Act', link: '/definitions/eu-ai-act/' },
                { label: 'CSET', link: '/definitions/cset/' },
                { label: 'AI Incident Database', link: '/definitions/aiid/' },
              ],
            },
            { label: '2. Crosswalk', link: '/crosswalk/' },
            { label: '3. Readings', link: '/readings/' },
          ],
        },
      ],
    }),
    mdx({
      remarkPlugins: [remarkGfm, remarkMath],
      rehypePlugins: [rehypeKatex],
    }),
  ],
});
