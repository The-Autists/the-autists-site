import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://axylprojects.dev/",
  base: "/",
  integrations: [
    starlight({
      title: "Axyl Projects",
      description:
        "Axyl Projects, a new FLOSS Distrobution, based on the helctic kernel.",
      components: {
        TableOfContents: "./src/components/TOC.astro",
        PageTitle: "./src/components/CustomPageTitle.astro",
      },
      logo: {
        light: "/src/assets/gold.png",
        dark: "/src/assets/gold.png",
      },
      customCss: process.env.NO_GRADIENTS
        ? ["./src/styles/_global.css"]
        : ["./src/styles/landing.css", "./src/styles/_global.css"],
      social: {
        github: "https://github.com/Axyl-Projects",
        twitter: "https://x.com/@axylprojects",
        discord: "https://discord.gg/J7R7sEZcn9",
        youtube: "https://youtube.com/@axylprojects",
        twitch: "https://twitch.tv/axylprojects",
      },
      editLink: {
        baseUrl: "https://github.com/Axyl-Sites/axyl.org/tree/main/",
      },

      lastUpdated: true,

      sidebar: [
        {
          label: "Announcements",
          items: [
            // Each item here is one entry in the navigation menu.
            {
              label: "What is Happening",
              link: "/en/announcements/what-is-happening",
            },
          ],
        },
        {
          label: "About Axyl Projects",
          items: [
            // Each item here is one entry in the navigation menu.
            {
              label: "Manifesto",
              link: "/en/about/manifesto",
            },
            {
              label: "Why Axyl Projects?",
              link: "/en/about/axyl-projects",
            },
            {
              label: "Downloading Axyl Projects",
              link: "/en/about/download",
            },
          ],
        },
        {
          label: "Projects",
          items: [
            // Each item here is one entry in the navigation menu.
            {
              label: "Helctic",
              link: "/en/projects/helctic",
            },
            {
              label: "RustFox",
              link: "/en/projects/rustfox",
            },
            {
              label: "AxylOS",
              link: "/en/projects/axylos",
            },
            {
              label: "Modded Android",
              link: "/en/projects/modded-android",
            },
            {
              label: "Axyl Bot Service",
              link: "/en/projects/abs",
            },
            {
              label: "Utilities",
              link: "/en/projects/utilities",
            },
          ],
        },
        {
          label: "Customization",
          items: [
            // Each item here is one entry in the navigation menu.
            {
              label: "Customizing Shells",
              link: "/en/customization/shell",
            },
            {
              label: "Customizing Display Managers",
              link: "/en/customization/display-manager",
            },
            {
              label: "Customizing Terminal Tools",
              link: "/en/customization/terminal-tools",
            },
          ],
        },
        {
          label: "Support",
          items: [
            // Each item here is one entry in the navigation menu.
            {
              label: "Troubleshooting",
              link: "/en/support/troubleshooting",
            },
          ],
        },
        {
          label: "Community",
          items: [
            // Each item here is one entry in the navigation menu.
            {
              label: "Discord",
              link: "/en/community/discord",
            },
            {
              label: "Contribute to Axyl Projects",
              link: "/en/community/contribute",
            },
            {
              label: "Getting Help",
              link: "/en/community/getting-help",
            },
            {
              label: "Official Axyl Projects Mirrors",
              link: "/en/community/mirrors",
            },
            {
              label: "Style Guide",
              link: "/en/community/style-guide",
            },
            {
              label: "Setting up a Mirror",
              link: "/en/community/setting-mirror",
            },
            {
              label: "Submitting Bugs",
              link: "/en/community/submitting-bugs",
            },
            {
              label: "Submitting Themes",
              link: "/en/community/submitting-themes",
            },
            {
              label: "Submitting Tools in Axyl",
              link: "/en/community/submitting-tools-axyl",
            },
          ],
        },
        {
          label: "Development",
          items: [
            // Each item here is one entry in the navigation menu.
            {
              label: "Testing",
              link: "/en/development/testing",
            },
          ],
        },
        {
          label: "Team",
          items: [
            // Each item here is one entry in the navigation menu.
            {
              label: "Austin 'AWFixer' Ware",
              link: "/en/team/awfixer",
            },
          ],
        },
        {
          label: "Policy",
          items: [
            // Each item here is one entry in the navigation menu.
            {
              label: "Axyl Projects EULA",
              link: "/en/policy/eula-policy",
            },
            {
              label: "Axyl Projects Network Service Policy",
              link: "/en/policy/network-policy",
            },
            {
              label: "Axyl Projects Code of Conduct",
              link: "/en/policy/code-of-conduct",
            },
            {
              label: "Axyl Projects Collaboration Policy",
              link: "/en/policy/collaboration-policy",
            },
            {
              label: "Axyl Projects Open Source Policy",
              link: "/en/policy/opensource-policy",
            },
            {
              label: "Axyl Projects Package Policy",
              link: "/en/policy/package-policy",
            },
            {
              label: "Axyl Projects Pentesting Tools Policy",
              link: "/en/policy/tools-policy",
            },
            {
              label: "Axyl Projects Privacy Policy",
              link: "/en/policy/privacy-policy",
            },
            {
              label: "Axyl Projects Update Policy",
              link: "/en/policy/update-policy",
            },
            {
              label: "Axyl Projects User Policy",
              link: "/en/policy/user-policy",
            },
            {
              label: "Cookie Policy",
              link: "/en/policy/cookie-policy",
            },
          ],
        },
      ],
    }),
    react(),
  ],

  // Process images with sharp: https://docs.astro.build/en/guides/assets/#using-sharp
  image: { service: { entrypoint: "astro/assets/services/sharp" } },
});
