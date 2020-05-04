export const ConstantsService = {
    PROD_MODE: false,
    URL_BASE: 'https://oykos-hub.com/tourist-native-api/',
    DEFAULT_LANGUAGE: 'srb',
    FILE_STACK_ID: 'AELTjULEzScSWWJMbNLTzz',
    DEBUG_LOG_MODE: 0,
    IOS: false,
    SIDEBAR_ITEMS: {
        host: [{
            redirect: 'all-courses',
            image: '/assets/image/maze.svg',
            color: '#81111fbb',
            nameKey: "allCourses",
            adminOnly: true
        }],
        guest: [{
            redirect: 'group',
            image: '/assets/image/group.png',
            color: '#28c6fba3',
            nameKey: "yourGroup"
        }]
    },
    navbarHeight: 70,
    paddingHorizontal: 10
};