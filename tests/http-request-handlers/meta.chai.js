import * as chai from 'chai';

import server from '../test-helpers/server.mock';
import settings from '../../app/configuration';

const expect = chai.expect;
const version = settings.apiVersion;

describe('Call to GET service metadata at /meta endpoint', () => {
  describe('#200', () => {
    it('should return json', (done) => {
      server
        .get(`${version}/meta`)
        .end((err, res) => {
          expect(res)
            .to
            .have
            .status(200);
          expect(res.type)
            .to
            .eql('application/json');
          done();
        });
    });

    it('should return the API version', (done) => {
      server
        .get(`${version}/meta`)
        .end((err, res) => {
          expect(res)
            .to
            .have
            .status(200);
          expect(res.body.version)
            .to
            .eql(version);
          done();
        });
    });

    it('should return an OK status', (done) => {
      server
        .get(`${version}/meta`)
        .end((err, res) => {
          expect(res)
            .to
            .have
            .status(200);
          expect(res.body.health)
            .to
            .eql('ok');
          done();
        });
    });

    it('should return a description of the service', (done) => {
      server
        .get(`${version}/meta`)
        .end((err, res) => {
          expect(res)
            .to
            .have
            .status(200);
          expect(res.body.description)
            .to
            .eql('This skeletal applicaiton should serve as a template for developing fb messenger application services');
          done();
        });
    });
  });
});
