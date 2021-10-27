import express from 'express';
const router = express.Router();
export default router;


//instantiate an object of type index controller
import { DisplayAboutPage, DisplayContactPage, DisplayGamesListPage, DisplayHomePage, DisplayProjectsPage, DisplayServicesPage } from '../Controllers/index';


/* GET home page. */
router.get('/', DisplayHomePage);

/* GET home page. */
router.get('/home', DisplayHomePage);

/* GET about page. */
router.get('/about', DisplayAboutPage);

/* GET projects page. */
router.get('/projects', DisplayProjectsPage);

/* GET services page. */
router.get('/services', DisplayServicesPage);

/* GET contact page. */
router.get('/contact', DisplayContactPage);


/*GET games list */
router.get('/games-list', DisplayGamesListPage);

/*GET login page */
router.get('/login');

//module.exports = router;
