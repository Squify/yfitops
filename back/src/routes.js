import { Router } from 'express';
import CategoryController from './controllers/CategoryController';
import PlaylistController from './controllers/PlaylistController';
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

router.get('/categories', CategoryController.list);
router.get('/categories/:id', CategoryController.details);
router.post('/categories', CategoryController.store);
router.put('/categories/:id', CategoryController.update);
router.delete('/categories/:id', CategoryController.remove);

/**
 * Routes Playlist
 */

router.get('/playlists', PlaylistController.list);
router.get('/playlists/mine', PlaylistController.listMine);
router.get('/playlists/public', PlaylistController.listPublic);
router.get('/playlists/:id', PlaylistController.details);
router.post('/playlists', PlaylistController.store);
router.put('/playlists/:id', PlaylistController.update);
router.delete('/playlists/:id', PlaylistController.remove);

/**
 * Routes Category
 */



export default router;