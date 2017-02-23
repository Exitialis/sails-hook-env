const expect = require('chai').expect;

describe('enviroment loader', () => {
    it('should load all variables from .env file to process.env object', () => {    
        expect(process.env.DB_NAME).to.equal('test');
        expect(process.env.DB_USER).to.equal('root');
    })

    it('should create additional connection with name in  DB_CONNECTION variable', () => {
        expect(sails.config.connections.mysql).to.not.null;
    })

    it('should change connection name for sails model configrutaion', () => {
        expect(sails.config.models.connection).to.equal('mysql');
    });

    it('should set connection adapter from')
});