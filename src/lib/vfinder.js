import express from 'express';
import bodyParser from 'body-parser';
import _ from 'lodash';
import serveStatic from 'serve-static';

import DiskStore from 'storage/disk';

export default class VFinder {
  constructor(options = {}) {

    this.options = this.getOptions(options);

    if (options.storage) {
      this.storage = options.storage;
    } else {
      this.storage = new DiskStore(this.options);
    }
  }

  getOptions(options) {
    return {
      baseUrl: options.baseUrl,
      apiPath: options.apiPath || '/vfinder',
      staticPath: options.staticPath || '/static',
      staticFolder: options.staticFolder,
      bodyParser: options.bodyParser || true,
      fileFilter: options.fileFilter,
      accepted: options.bodyParser
    };
  }

  handleAPI() {
    const {options} = this;

    const router = express.Router();

    router.use(function(err, req, res, next) {
      res.status(500).json({code: 500, message: 'Something broke!'})
    });

    if (options.bodyParser !== false) {
      // parse application/x-www-form-urlencoded
      router.use(bodyParser.urlencoded({extended: false}));

      // parse application/json
      router.use(bodyParser.json());
    }

    router.get('/config', this.storage.apiHandler(this.storage.config));

    router.get('/dir', this.storage.apiHandler(this.storage.dir));

    router.get('/search', this.storage.apiHandler(this.storage.search));

    router.get('/info', this.storage.apiHandler(this.storage.info));

    router.post('/upload', this.storage.apiHandler(this.storage.upload));

    return router;
  }

  handleStatic() {
    const {options} = this;

    return serveStatic(options.staticFolder);
  }

  initRouter() {
    const {options} = this;

    const router = express.Router();

    //static
    router.use(options.staticPath, this.handleStatic());

    //api
    router.use(options.apiPath, this.handleAPI());

    return router;

  }

  handler() {
    return this.initRouter();
  }
}
