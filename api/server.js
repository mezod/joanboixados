require('babel-register');
require('babel-core/polyfill');

const koa = require('koa');
const router = require('koa-router')();
const bodyparser = require('koa-bodyparser');
const cors = require('koa-cors');
const serve = require('koa-static');
const app = koa();

const routes = require('./routes');

router.get('/menu', routes.getMenu);
router.get('/:gallery', routes.getGallery);

app.use(serve(__dirname + '/galleries/'));

// sets the reponse headers to allow cross origin requests
app.use(cors({
  expose: ['X-Total'],
}));

/* Handles all errors.
	 Sets and errors array in the context to be filled
	 by the following middelwares. These errors return a 400 status
	 unless it gets explicitly set */
app.use(function * errorHandler(next) {
  try {
    this.errors = [];
    yield next;
    if (this.errors.length) {
      this.status = this.status || 400;
      this.body = { errors: this.errors };
    } else {
      this.status = this.status || 200;
    }
  } catch (err) {
    this.status = err && err.status || 500;
    console.log(err);
    this.body = {errors: ['Internal Server Error']};
  }
});

/* Parses the body of the requests and sets its contents to this.body */
app.use(bodyparser());

app.use(router.routes());

app.listen(3000);

process.on('uncaughtException', (err) => {
  console.log(`Caught exception: ${err}`);
});
