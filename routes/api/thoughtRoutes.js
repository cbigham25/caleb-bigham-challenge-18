//TODO // TODO change these to the thought apis from here: https://courses.bootcampspot.com/courses/3639/assignments/50942#submit:~:text=user%27s%20friend%20list-,/api/thoughts,-GET%20to%20get


const router = require('express').Router();
const {
  getVideos,
  getSingleVideo,
  createVideo,
  updateVideo,
  deleteVideo,
  addVideoResponse,
  removeVideoResponse,
} = require('../../controllers/videoController');

// /api/videos
router.route('/').get(getVideos).post(createVideo);

// /api/videos/:videoId
router
  .route('/:videoId')
  .get(getSingleVideo)
  .put(updateVideo)
  .delete(deleteVideo);

// /api/videos/:videoId/responses
router.route('/:videoId/responses').post(addVideoResponse);

// /api/videos/:videoId/responses/:responseId
router.route('/:videoId/responses/:responseId').delete(removeVideoResponse);

module.exports = router;
