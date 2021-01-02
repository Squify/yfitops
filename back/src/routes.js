import { Router } from 'express';
import CategoryController from './controllers/CategoryController';
import MusicController from './controllers/MusicController';
import PlaylistController from './controllers/PlaylistController';
import UserController from './controllers/UserController';
import Multer from './utils/Multer';

const router = Router();

/**
 * Routes User
 */

router.get('/users', UserController.list);
router.get('/users/:id', UserController.details);
router.post('/users/auth', UserController.auth);
router.post('/users', UserController.store);
router.put('/users/:id', UserController.update);
router.delete('/users/:id', UserController.remove);

/**
 * Routes Music
 */

router.get('/musics', MusicController.list);
router.get('/musics/:id', MusicController.details);
router.post('/musics', Multer.upload("musics", "image_path"), MusicController.store);
router.put('/musics/:id', MusicController.update);
router.delete('/musics/:id', MusicController.remove);

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

router.get('/categories', CategoryController.list);
router.get('/categories/:id', CategoryController.details);
router.post('/categories', CategoryController.store);
router.put('/categories/:id', CategoryController.update);
router.delete('/categories/:id', CategoryController.remove);

export default router;