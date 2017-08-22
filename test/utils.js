const Lab = require('lab');
const lab = exports.lab = Lab.script();

const describe = lab.describe;
const it = lab.it;
const expect = Lab.expect;

const Utils = require('./../lib/utils');

describe('Utils', () => {

    describe('isType', () => {

        it('should works with built-in types', (done) => {

            expect(Utils.isType(String, '')).to.equal(true);
            expect(Utils.isType(Boolean, true)).to.equal(true);
            expect(Utils.isType(Number, 0)).to.equal(true);
            expect(Utils.isType(Object, {})).to.equal(true);
            expect(Utils.isType(Array, [])).to.equal(true);
            expect(Utils.isType(Function, function () {})).to.equal(true);
            expect(Utils.isType(Function, () => {})).to.equal(true);
            expect(Utils.isType(RegExp, /([A-z])/)).to.equal(true);
            expect(Utils.isType(Date, new Date())).to.equal(true);
            done();
        });

        it('should works with type constructors', (done) => {
            
            expect(Utils.isType(String, new String(''))).to.equal(true);
            expect(Utils.isType(Boolean, new Boolean())).to.equal(true);
            expect(Utils.isType(Number, new Number())).to.equal(true);
            expect(Utils.isType(Object, new Object())).to.equal(true);
            expect(Utils.isType(Array, new Array())).to.equal(true);
            expect(Utils.isType(Function, new Function())).to.equal(true);
            expect(Utils.isType(RegExp, new RegExp(/([A-z])/))).to.equal(true);
            expect(Utils.isType(Date, new Date())).to.equal(true);
            done();
        });

        it('should not coerce', (done) => {
            
            expect(Utils.isType(Boolean, 1)).to.equal(false);
            expect(Utils.isType(Number, '1')).to.equal(false);
            expect(Utils.isType(Number, false)).to.equal(false);
            done();
        });

        it('should not consider primitives to be instance of Object', (done) => {
            
            expect(Utils.isType(Object, false)).to.equal(false);
            expect(Utils.isType(Object, 0)).to.equal(false);
            expect(Utils.isType(Object, '')).to.equal(false);
            done();
        });

        it('should not match any type for null and undefined', (done) => {

            expect(Utils.isType(String, null)).to.equal(false);
            expect(Utils.isType(Boolean, null)).to.equal(false);
            expect(Utils.isType(Number, null)).to.equal(false);
            expect(Utils.isType(Object, null)).to.equal(false);
            expect(Utils.isType(Array, null)).to.equal(false);
            expect(Utils.isType(Function, null)).to.equal(false);
            expect(Utils.isType(RegExp, null)).to.equal(false);
            expect(Utils.isType(Date, null)).to.equal(false);

            expect(Utils.isType(String, undefined)).to.equal(false);
            expect(Utils.isType(Boolean, undefined)).to.equal(false);
            expect(Utils.isType(Number, undefined)).to.equal(false);
            expect(Utils.isType(Object, undefined)).to.equal(false);
            expect(Utils.isType(Array, undefined)).to.equal(false);
            expect(Utils.isType(Function, undefined)).to.equal(false);
            expect(Utils.isType(RegExp, undefined)).to.equal(false);
            expect(Utils.isType(Date, undefined)).to.equal(false);
            done();
        });
    });
});