import {expect} from 'chai';

import vfinder from '../src';

describe('middleware', () => {
  describe('request handler creation', function() {
    it('should must is a function', function() {
      expect(vfinder).to.be.a('function');
    });
  });

});
