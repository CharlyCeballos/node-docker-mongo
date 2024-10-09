const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
  res.send('Hello Everybody Out There');
});

module.exports = router;
