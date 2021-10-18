export const isAuthenticated = () => Boolean(window.localStorage.getItem('token'));
export const logout = () => window.localStorage.removeItem('token');
