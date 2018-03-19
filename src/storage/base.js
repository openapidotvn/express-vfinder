export default class StorageBase {
  constructor(options) {
    this.options = options;
  }

  apiHandler(func) {
    if ('function' !== typeof func) {
      throw new Error('API must be a function');
    }

    return (req, res) => {
      func.call(this, req, res).then(data => {
        res.json(data);
      }).catch(err => {
        console.log(err)
        res.json({code: err.code, message: err.message});
      })
    };
  }

  upload(req, res) {
    return Promise.resolve({});
  }

  dir(req, res) {
    return Promise.resolve({});
  }

  info(req, res) {
    return Promise.resolve({});
  }

  config(req, res) {
    const {options} = this;

    return Promise.resolve({
      baseUrl: options.baseUrl,
      accepted: options.accepted || [],
      apiPath: options.apiPath
    });
  }

  search(req, res) {
    return Promise.resolve({});
  }
}
