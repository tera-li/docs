import { defineConfig } from "vitepress";
export default defineConfig({
  title: "leftMenu",
  description: "Just playing around.",
  themeConfig: {
    // 左侧logo
    logo: "../static/aperture.svg",
    // 顶部导航
    nav: [
      { text: "Home", link: "/" },
      { text: "Home", link: "/" },
      { text: "Home", link: "/" },
      { text: "Home", link: "/" },
    ],
    // 社交链接
    socialLinks: [
      { icon: "github", link: "https://github.com/hljinjiang" },
      {
        icon: {
          svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Dribbble</title><path d="M12...6.38z"/></svg>',
        },
        link: "...",
      },
    ],
  },
});
