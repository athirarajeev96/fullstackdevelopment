const ApiRoutes = {
    // Authentication Routes
    LOGIN: {
        path: '/api/auth/',
        auth: false
    },
    REGISTER: {
        path: '/api/auth/register',
        auth: false
    },

    // User Routes
    GET_USER_PROFILE: {
        path: '/user/profile',
        auth: true
    },
    UPDATE_USER_PROFILE: {
        path: '/user/updateProfile',
        auth: true
    },

    // Trainer Routes
    GET_ALL_TRAINERS: {  // Change the naming in your component to use GET_ALL_TRAINERS
        path: '/trainers',  // Ensure this is correct on your backend as well
        auth: true
    },
    GET_TRAINER_PROFILE: {
        path: '/trainer/:id',
        auth: true
    },
    UPDATE_TRAINER_PROFILE: {
        path: '/trainer/updateProfile',
        auth: true
    },

    // Class Routes
    GET_ALL_CLASSES: {
        path: '/class',
        auth: true
    },
    GET_CLASS_DETAILS: {
        path: '/class/:id',
        auth: true
    },
    CREATE_CLASS: {
        path: '/class/create',
        auth: true
    },
    UPDATE_CLASS: {
        path: '/class/update/:id',
        auth: true
    },
    DELETE_CLASS: {
        path: '/class/delete/:id',
        auth: true
    },

    // Booking Routes
    CREATE_BOOKING: {
        path: '/booking/create',
        auth: true
    },
    GET_USER_BOOKINGS: {
        path: '/booking/user',
        auth: true
    },
    UPDATE_BOOKING: {
        path: '/booking/update/:id',
        auth: true
    },
    DELETE_BOOKING: {
        path: '/booking/delete/:id',
        auth: true
    },

    // Feedback Routes
    SUBMIT_FEEDBACK: {
        path: '/feedback/create',
        auth: true
    },
    GET_FEEDBACK_FOR_TRAINER: {
        path: '/feedback/trainer/:id',
        auth: true
    },

    // Payment Routes
    INITIATE_PAYMENT: {
        path: '/payment/initiate',
        auth: true
    },
    VERIFY_PAYMENT: {
        path: '/payment/verify',
        auth: true
    }
};

export default ApiRoutes;
