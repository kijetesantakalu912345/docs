import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "Bopl Battle Modding Docs",
    description: "Documentation for modding Bopl Battle",

    lastUpdated: true,

	cleanUrls: true,

	srcExclude: ['**/README.md'],

    assetsDir: "public",
    themeConfig: {

        
        externalLinkIcon: true,

        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: "Home", link: "/" },
            { text: "Install", link: "/install/quickstart" },
            { text: "Create", link: "/create/quickstart" },
        ],

        sidebar: [
            {
                text: "Creating",
                items: [
                    { text: "Quickstart", link: "/create/quickstart" },
                    { text: "Installing the .NET SDK", link: "/create/installing" },
                    { text: "Creating your mod", link: "/create/create" },
                ],
            },
        ],

        search: {
            provider: "local",
        },

        socialLinks: [
            {
                icon: "github",
                link: "https://github.com/Bopl-Battle-Modding-Community/docs",
            },
            { icon: "discord", link: "https://discord.gg/uhtpWwkaUm" },
        ],
    },
});
