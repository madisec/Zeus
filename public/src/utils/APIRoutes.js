// set route for connecting front to backend.
export const host = "http://localhost:5000";
// Login API
export const loginRoute = `${host}/api/auth/login`;
// Register API
export const registerRoute = `${host}/api/auth/register`;
// Logout APi
export const logoutRoute = `${host}/api/auth/logout`;
// Get all user  information API
export const allUsersRoute = `${host}/api/auth/allusers`;
// Send message, in other word add message API
export const sendMessageRoute = `${host}/api/messages/addmsg`;
// Get message, in other word recive message information.
export const recieveMessageRoute = `${host}/api/messages/getmsg`;
// Sett Avatar for user API
export const setAvatarRoute = `${host}/api/auth/setavatar`;
