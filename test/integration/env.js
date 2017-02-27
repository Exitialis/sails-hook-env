const expect = require('chai').expect;

describe('enviroment loader', () => {
    it('should load all variables from .env file to process.env object', () => {    
        expect(process.env.DB_ADAPTER).to.equal('sails-mysql');
        expect(process.env.DB_URL).to.equal('mysql://root:root@localhost:3306/test');
    });

    it('should create default datastore', () => {
        expect(sails.config.datastores.default).to.not.null;
    });

    it('should set adapter to default datastore', () => {
        expect(sails.config.datastores.default.adapter).to.equal('sails-mysql');
    });

    it('should set db url to default datastore', () => {
        expect(sails.config.datastores.default.url).to.equal('mysql://root:root@localhost:3306/test');
    });

});