import DCFinder from 'lib/dcfinder';
import StorageBase from 'storage/base';
import DiskStore from 'storage/disk';

export default function dcfinder(options) {
  const dcfinder = new DCFinder(options);

  return dcfinder.handler();
};
