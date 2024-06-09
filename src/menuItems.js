export const menuItems = [
    {
        id: 0,
        title: "Animals' Menu",
        path: "/menu",
        cName: "nav-item",
    },
    {
        id: 1,
        title: "About us",
        path: "/about",
        cName: "nav-item",
        submenu: [
            {
                id: 1,
                title: "Dogs",
                path: "/category/dogs",
                cName: "submenu-item"
            },
            {
                id: 2,
                title: "Cats",
                path: "/category/cats",
                cName: "submenu-item"
            },
            {
                id: 3,
                title: "Birds",
                path: "/category/birds",
                cName: "submenu-item"
            }
        ]
    },
    {
        id: 2,
        title: "Contact us",
        path: "/contact",
        cName: "nav-item",
    },
    
];
