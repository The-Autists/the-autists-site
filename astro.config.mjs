import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import react from "@astrojs/react";

export default defineConfig({
  site: "https://theautismcommunity.net/",
  base: "/",
  integrations: [
    starlight({
      title: "The Autists",
      description: "The Autists, Defiantly maintaining Reality",
      components: {
        TableOfContents: "./src/components/TOC.astro",
        PageTitle: "./src/components/CustomPageTitle.astro",
      },
      logo: {
        light: "/src/assets/lucky-star.gif",
        dark: "/src/assets/lucky-star.gif",
      },
      customCss: process.env.NO_GRADIENTS
        ? ["./src/styles/_global.css"]
        : ["./src/styles/landing.css", "./src/styles/_global.css"],
      social: {
        github: "https://github.com/The-Autists",
        twitter: "https://x.com/@awfixer",
        discord: "https://discord.gg/awfixer",
        youtube: "https://youtube.com/@awfixer",
        twitch: "https://twitch.tv/awfixer",
        blueSky: "https://bsky.app/profile/awfixer.me",
        patreon: "https://patreon.com/axylprojects",
        reddit: "https://reddit.com/r/awfixer",
      },
      editLink: {
        baseUrl: "https://github.com/the-autists/the-autists-docs/tree/main/",
      },

      lastUpdated: true,

      sidebar: [
        {
          label: "Announcements",
          items: [
            {
              label: "What is Happening",
              link: "/en/announcements/what-is-happening",
            },
            {
              label: "We are hiring",
              link: "/en/announcements/we-are-hiring",
            },
          ],
        },
        {
          label: "Funding",
          items: [
            {
              label: "How to Help",
              link: "/en/funding/how-to-help",
            },
            {
              label: "What we need",
              link: "/en/funding/what-we-need",
            },
          ],
        },
        {
          label: "About The Autists",
          items: [
            {
              label: "Manifesto",
              link: "/en/about/manifesto",
            },
            {
              label: "Why The Autists?",
              link: "/en/about/axyl-projects",
            },
            {
              label: "Background on The Autists",
              link: "/en/about/background",
            },
          ],
        },
        {
          label: "Community",
          items: [
            {
              label: "Discord",
              link: "/en/community/discord",
            },
            {
              label: "Contribute to The Autists",
              link: "/en/community/contribute",
            },
            {
              label: "Getting Help",
              link: "/en/community/getting-help",
            },
            {
              label: "Official The Autists Mirrors",
              link: "/en/community/mirrors",
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
              label: "Submitting Projects in Axyl",
              link: "/en/community/submitting-projects-axyl",
            },
          ],
        },
        {
          label: "Development",
          items: [
            {
              label: "Testing",
              link: "/en/development/testing",
            },
          ],
        },
        {
          label: "Team",
          items: [
            {
              label: "About the Team",
              link: "/en/team/about-the-team",
            },
            {
              label: "Managment",
              items: [
                {
                  label: "revinant",
                  link: "/en/team/management/revinant",
                },
                {
                  label: "ByteHauler",
                  link: "/en/team/management/bytehauler",
                },
                {
                  label: "Kyeee",
                  link: "/en/team/management/kyeee",
                },
              ],
            },
            {
              label: "The Council",
              items: [
                {
                  label: "revinant",
                  link: "/en/team/management/revinant",
                },
                {
                  label: "ByteHauler",
                  link: "/en/team/management/bytehauler",
                },
                {
                  label: "Kyeee",
                  link: "/en/team/management/kyeee",
                },
              ],
            },
            {
              label: "Partners",
              items: [
                {
                  label: "revinant",
                  link: "/en/team/management/revinant",
                },
                {
                  label: "ByteHauler",
                  link: "/en/team/management/bytehauler",
                },
                {
                  label: "Kyeee",
                  link: "/en/team/management/kyeee",
                },
              ],
            },
            {
              label: "Owners",
              items: [
                {
                  label: "Austin 'AWFixer' Ware",
                  link: "/en/team/awfixer",
                },
                {
                  label: "engineered",
                  link: "/en/team/owners/engineered",
                },
              ],
            },
            {
              label: "Development",
              items: [
                {
                  label: "Adam",
                  link: "/en/team/development/adam",
                },
              ],
            },
            {
              label: "Design",
              items: [
                {
                  label: "Artemis",
                  link: "/en/team/design/artemis",
                },
              ],
            },
            {
              label: "Community",
              items: [
                {
                  label: "Ori",
                  link: "/en/team/community/ori",
                },
              ],
            },
            {
              label: "Waiting for You",
              link: "/en/team/waiting",
            },
          ],
        },
        //        {
        //          label: "Sites",
        //          items: [
        //            {
        //              label: "ME",
        //              items: [
        //                {
        //                  label: "AWFixer",
        //                  link: "/en/sites/me/awfixer",
        //                },
        //              ],
        //            },
        //          ],
        //        },
        {
          label: "Policy",
          items: [
            {
              label: "The Autists EULA",
              link: "/en/policy/eula-policy",
            },
            {
              label: "The Autists Network Service Policy",
              link: "/en/policy/network-policy",
            },
            {
              label: "The Autists Code of Conduct",
              link: "/en/policy/code-of-conduct",
            },
            {
              label: "The Autists Collaboration Policy",
              link: "/en/policy/collaboration-policy",
            },
            {
              label: "The Autists Open Source Policy",
              link: "/en/policy/opensource-policy",
            },
            {
              label: "The Autists Package Policy",
              link: "/en/policy/package-policy",
            },
            {
              label: "The Autists Pentesting Tools Policy",
              link: "/en/policy/tools-policy",
            },
            {
              label: "The Autists Privacy Policy",
              link: "/en/policy/privacy-policy",
            },
            {
              label: "The Autists Update Policy",
              link: "/en/policy/update-policy",
            },
            {
              label: "The Autists User Policy",
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

  image: { service: { entrypoint: "astro/assets/services/sharp" } },
});
