import path from 'path';

import Promise from 'bluebird';
import _ from 'lodash';
import mime from 'mime';

import {normalizePath} from 'utils';
import StorageBase from 'storage/base';

const fs = Promise.promisifyAll(require('fs'));

export default class DiskStore extends StorageBase {
  constructor(options) {
    super(options);
  }

  _getBaseInfo(filePath) {
    const {options} = this;
    const absolutePath = path.join(options.staticFolder, filePath);

    return fs.statAsync(absolutePath).then(stats => {
      const isFolder = stats.isDirectory();
      const isFile = stats.isFile();

      if (isFile || isFolder) {
        const pathInfo = path.parse(filePath);
        const relativeUrl = normalizePath(path.join(options.staticPath, filePath));

        let baseInfo = {
          createdAt: stats.birthtime,
          updatedAt: stats.ctime,
          name: pathInfo.name,
          pwd: normalizePath(pathInfo.dir),
          path: normalizePath(path.join(pathInfo.dir, pathInfo.base)),
          isFolder,
          mime: mime.lookup(pathInfo.ext)
        }

        if (isFile) {
          baseInfo = _.merge({}, baseInfo, {
            relativeUrl: relativeUrl,
            url: options.baseUrl + relativeUrl,
            size: stats.size || 0,
            type: 'file',
            fileName: pathInfo.base
          });
        } else {
          baseInfo = _.merge({}, baseInfo, {type: 'folder'});
        }
        return baseInfo;
      }

      return null;
    });
  }

  _getInfo(filePath) {
    return this._getBaseInfo(filePath).then(baseInfo => {
      return baseInfo;
    }).catch((err) => {
      console.log(err);
      return null;
    });
  }

  _listDir(dirPath) {
    const {options} = this;

    const folderPath = path.normalize(options.staticFolder + dirPath);

    return Promise.resolve().then(() => {
      //check folder exist
      return fs.statAsync(folderPath).then(stats => {
        if (stats.isDirectory()) {
          return stats;
        }
        return Promise.reject(new Error({code: 400, message: 'Not found'}));
      }).catch(() => {
        return Promise.reject(new Error({code: 400, message: 'Not found'}));
      });
    }).then(() => {
      //read dir
      return fs.readdirAsync(folderPath);
    }).then(fileNames => {
      const promises = fileNames.map(fileName => {
        const filePath = path.join(dirPath, fileName);
        //get file exist & file info
        return this._getInfo(filePath);
      });
      return Promise.all(promises);
    }).then(files => {
      //filter null
      return files.filter(item => {
        return item !== null;
      });
    });
  };

  dir(req, res) {
    const {options} = this;

    return this._listDir(req.query.path || '/');
  }
}
