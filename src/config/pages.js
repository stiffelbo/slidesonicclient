import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PeopleIcon from '@mui/icons-material/People';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import InventoryIcon from '@mui/icons-material/Inventory';
import RecentActorsIcon from '@mui/icons-material/RecentActors';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export const pages = [
    {
        id: 'book',
        langTitle : {
            pl : "Kalendarz",
            eng : "Bookings",
        },
        icon: <CalendarMonthIcon />,
        tabs: [
            {   
                id: 'services', 
                langTitle : {
                    pl : 'Usługi'
                },
            },
            {   
                id: 'expenses', 
                langTitle : {
                    pl : 'Koszty'
                },
            },
        ],
        path: '/book',
        loggedOnly : true,
    },
    {
        id: 'clients',
        langTitle : {
            pl : "Klienci",
            eng : "Clients",
        },
        icon: <PeopleIcon />,
        tabs: [
            {   id: 'main', 
                langTitle : {
                    pl : 'Wszystkie'
                },                
            
            },
            {id: 'add', langTitle : {
                pl : 'Dodaj'
            }},
            {id: 'find', langTitle : {
                pl : 'Szukaj'
            }},
        ],
        path: '/clients',
        loggedOnly : true,
    },
    {
        id: 'services',
        langTitle : {
            pl : "Usługi",
            eng : "Services",
        },
        icon: <AutoAwesomeIcon />,
        tabs: [
            {   id: 'main', 
                langTitle : {
                    pl : 'Wszystkie'
                },                
            
            },
            {id: 'add', langTitle : {
                pl : 'Dodaj'
            }},
            {id: 'find', langTitle : {
                pl : 'Szukaj'
            }},
        ],
        path: '/services',
        loggedOnly : true,
    },
    {
        id: 'suppliers',
        langTitle : {
            pl : "Dostawcy",
            eng : "Suppliers",
        },
        icon: <RecentActorsIcon />,
        tabs: [
            {   id: 'main', 
                langTitle : {
                    pl : 'Wszystkie'
                },                
            
            },
            {id: 'add', langTitle : {
                pl : 'Dodaj'
            }},
            {id: 'find', langTitle : {
                pl : 'Szukaj'
            }},
        ],
        path: '/suppliers',
        loggedOnly : true,
    },
    {
        id: 'expenses',
        langTitle : {
            pl : "Koszty",
            eng : "Expenses",
        },
        icon: <InventoryIcon />,
        tabs: [
            {   id: 'main', 
                langTitle : {
                    pl : 'Wszystkie'
                },                
            
            },
            {id: 'add', langTitle : {
                pl : 'Dodaj'
            }},
            {id: 'find', langTitle : {
                pl : 'Szukaj'
            }},
        ],
        path: '/expenses',
        loggedOnly : true,
    },
    {
        id: 'user',
        langTitle : {
            pl : "Użytkownik",
            eng : "User",
        },
        icon: <AccountCircleIcon />,
        tabs: [
            {   
                id: 'login', 
                langTitle : {
                    pl : 'Loguj'
                },
                loggedOnly : false,
                unLoggedOnly : true,
            },
            {   
                id: 'edit', 
                langTitle : {
                    pl : 'Edytuj'
                },
                loggedOnly : true,
            }, 
            {   id: 'stats', 
                langTitle : {
                    pl : 'Statystyki'
                },
                loggedOnly : true,
            },
            {   
                id: 'add', 
                langTitle : {
                    pl : 'Rejestruj'
                },
                loggedOnly : false,
                unLoggedOnly : true,
            },
            {   
                id: 'logout', 
                langTitle : {
                    pl : 'Wyloguj'
                },
                loggedOnly : true,                
            },
        ],
        path: '/user',
        loggedOnly : false,
    }
]