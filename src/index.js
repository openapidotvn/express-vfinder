import VFinder from 'lib/vfinder';
import StorageBase from 'storage/base';
import DiskStore from 'storage/disk';

export default function vfinderMiddlewareCreator(options) {
  const vfinder = new VFinder(options);

  return vfinder.handler();
};
