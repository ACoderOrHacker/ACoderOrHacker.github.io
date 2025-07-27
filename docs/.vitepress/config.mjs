import { defineConfig } from 'vitepress'
import { defineTeekConfig } from "vitepress-theme-teek/config";

const teekConfig = defineTeekConfig({});

export default defineConfig({
  extends: teekConfig,
  head: [
    ['link', { rel: 'icon', href: `/favicon.png` }]
  ],
  title: "Soccer",
  description: "Blogs and Projects",
  themeConfig: {
    editLink: {
      pattern: 'https://github.com/ACoderOrHacker/ACoderOrHacker.github.io/edit/master/docs/:path',
      text: 'Edit this page on GitHub'
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Blogs', link: '/blogs/about.md' },
      { text: 'Projects', link: '/projects/projects.md' },
      { text: 'About', link: '/about.md' }
    ],
    logo: '/favicon.png',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/ACoderOrHacker' }
    ],
    footer: {
      message: 'Released under the Boost Software License 1.0.',
      copyright: 'Copyright (C) 2025 ACoderOrHacker'
    }
  }
})
