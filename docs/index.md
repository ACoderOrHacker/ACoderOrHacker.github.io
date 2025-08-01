---
layout: home

tk:
  teekHome: false

hero:
  name: Soccer's Blog
  text: My blogs and projects
  tagline: Just for fun :)
  actions:
    - theme: brand
      text: Projects
      link: /projects/projects.md
    - theme: alt
      text: Blogs
      link: /blogs/about.md
  image:
    src: /favicon.png
    alt: Teek

features:
  - title: Pinwin
    icon:
      src: https://github.com/ACoderOrHacker/pinwin/blob/master/docs/public/logo.png?raw=true
    details: A tool for pining windows to the top of your screen
  - title: Shit
    icon:
      src: https://github.com/ACoderOrHacker/shit/blob/master/docs/public/logo.png?raw=true
    details: A powerful and modern terminal
  - title: Ox
    icon:
      src: https://github.com/ACoderOrHacker/ox/blob/master/res/ox.png?raw=true
    details: A C++ Library Collection
---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe 30%, #41d1ff);

  --vp-home-hero-image-background-image: linear-gradient(-45deg, #bd34fe 50%, #47caff 50%);
  --vp-home-hero-image-filter: blur(44px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
}
</style>
