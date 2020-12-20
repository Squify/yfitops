import {Router} from 'express';
import UserController from './controllers/UserController';

const router = Router();

/**
 * Routes User
 */

router.get('/users', UserController.list);
router.get('/users/:id', UserController.details);
router.post('/users', UserController.store);
router.put('/users/:id', UserController.update);
router.delete('/users/:id', UserController.remove);

/**
 * Routes Music
 */


/**
 * Routes Playlist
 */


/**
 * Routes Category
 */



export default router;