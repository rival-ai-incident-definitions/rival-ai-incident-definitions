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
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/rival-ai-incident-definitions/rival-ai-incident-definitions' },
      ],
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
          label: 'Framework',
          collapsed: false,
          items: [
            { label: 'Overview', link: '/framework/' },
            {
              label: '1. Definitions',
              collapsed: false,
              items: [
                { label: 'Overview', link: '/definitions/' },
                { label: 'OECD', link: '/definitions/oecd/' },
                { label: 'EU AI Act', link: '/definitions/eu-ai-act/' },
                { label: 'CSETv1', link: '/definitions/cset/' },
                { label: 'CSETv0', link: '/definitions/csetv0/' },
                { label: 'AI Incident Database', link: '/definitions/aiid/' },
                { label: 'MIT AI Incident Tracker', link: '/definitions/mit/' },
                { label: 'PAGCF', link: '/definitions/pagcf/' },
              ],
            },
            { label: '2. Rules', link: '/framework/rules/' },
            { label: '3. Readings', link: '/readings/' },
            { label: '4. Three-State Labels', link: '/framework/three-state/' },
            { label: '5. Crosswalk', link: '/crosswalk/' },
            { label: '6. Verdicts', link: '/framework/verdicts/' },
          ],
        },
        {
          label: 'Study',
          collapsed: false,
          items: [
            { label: 'Overview', link: '/study/' },
            { label: 'Preregistration', link: '/study/preregistration/' },
          ],
        },
        {
          label: 'Theoretical Foundations',
          collapsed: false,
          items: [
            { label: 'Overview', link: '/foundations/' },
            { label: 'Aviation', link: '/foundations/aviation/' },
            { label: 'Medical Devices', link: '/foundations/medical-devices/' },
            { label: 'Pharmacovigilance', link: '/foundations/pharmacovigilance/' },
            { label: 'Patient Safety', link: '/foundations/patient-safety/' },
            { label: 'Nuclear Safety', link: '/foundations/nuclear-safety/' },
            { label: 'Cybersecurity', link: '/foundations/cybersecurity/' },
            { label: 'Process Safety', link: '/foundations/process-safety/' },
            { label: 'Public-Health Case Definitions', link: '/foundations/public-health/' },
          ],
        },
        {
          label: 'Reference',
          collapsed: false,
          items: [
            { label: 'Glossary', link: '/glossary/' },
            { label: 'About', link: '/about_cite/' },
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
