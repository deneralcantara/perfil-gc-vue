
//IMPORT PROFILE COMPONENT
import ProfilePage from '../views/ProfilePage';
import HomePage from '../views/HomePage';

//DECLARE ROUTE FOR PROFILE COMPONENT
const routes = [
    { path: '/', component: HomePage, name: 'home'},
    { path: '/profile/:id', component: ProfilePage, name: 'profile'},
];

export default routes;