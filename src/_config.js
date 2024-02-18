export const process = {
    dev: true,
}

export const site = {
    home: process.dev ? 'http://localhost:8080/' : 'http://zalupa.ru'
}

export const links = [
    {
        title: "Home",
        alias: "home",
        url: "/",
    },
    {
        title: "About",
        alias: "about",
        url: "/about",
    },
]
export const title = {
    title: "Notes"
}