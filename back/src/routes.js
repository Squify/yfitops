import { Router } from 'express';
import CategoryController from './controllers/CategoryController';
import MusicController from './controllers/MusicController';
import PlaylistController from './controllers/PlaylistController';
import UserController from './controllers/UserController';
import Auth from './utils/Auth';
import Multer from './utils/Multer';

const router = Router();

/**
 * Routes User
 */

router.get('/users', Auth.isAllowed([10]), UserController.list);
router.post('/users/register', UserController.store);
router.get('/users/:id', UserController.details);
router.post('/users/auth', UserController.auth);
router.put('/users/:id', Auth.isAllowed([10]), UserController.update);
router.delete('/users/:id', Auth.isAllowed([10]), UserController.remove);

/**
 * Routes Music
 */

router.get('/musics', MusicController.list);
router.get('/musics/:id', MusicController.details);
// router.post('/musics', Multer.upload("musics", "image_path"), Multer.upload("musics", "sound_path"), MusicController.store);
router.post('/musics', Auth.isAllowed([10]), Multer.upload("musics"), MusicController.store);
router.put('/musics/:id', Auth.isAllowed([10]), Multer.upload("musics"), MusicController.update);
router.delete('/musics/:id', Auth.isAllowed([10]), MusicController.remove);

/**
 * Routes Playlist
 */

router.get('/playlists', Auth.isAllowed([10]), PlaylistController.list);
router.get('/playlists/private', Auth.isAllowed([0,10]), PlaylistController.listPrivate);
router.get('/playlists/public', PlaylistController.listPublic);
router.get('/playlists/:id', PlaylistController.details);
router.post('/playlists', Multer.upload("playlists"), PlaylistController.store);
router.put('/playlists/:id', Auth.isAllowed([10]), Multer.upload("playlists"), PlaylistController.update);
router.delete('/playlists/:id', Auth.isAllowed([10]), PlaylistController.remove);

/**
 * Routes Category
 */

router.get('/categories', Auth.isAllowed([10]), CategoryController.list);
router.get('/categories/:id', Auth.isAllowed([10]), CategoryController.details);
router.post('/categories', Auth.isAllowed([10]), CategoryController.store);
router.put('/categories/:id', Auth.isAllowed([10]), CategoryController.update);
router.delete('/categories/:id', Auth.isAllowed([10]), CategoryController.remove);

export default router;