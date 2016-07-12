var expect = require('chai').expect;
// var request = require('superagent');

describe('RomanNumerals', function() {
  // var baseUrl = 'https://localhost:8080';

  // describe('when requested at /hello', function() {
  //   it('should say hello', function(){
  //     // request.get(baseUrl + '/hello').end(function assert(err, res) {
  //     //   expect(err).to.not.be.ok;
  //     //   expect(res).to.have.property('status', 200);
  //     //   expect(res.text).to.equal('Hello world!');
  //     //   done();
  //     // });
  //     expect(false).to.not.be.ok;
  //   });
  // });
  it('should translate arabic numerics to RomanNumerals', function () {
    var romanNumerals = require('../lib/roman_numerals');
    console.log(romanNumerals);
    expect(romanNumerals.of(1)).to.deep.equal('I');
    expect(romanNumerals.of(2)).to.deep.equal('II');
    expect(romanNumerals.of(3)).to.deep.equal('III');
    expect(romanNumerals.of(4)).to.deep.equal('IV');
    expect(romanNumerals.of(5)).to.deep.equal('V');
    expect(romanNumerals.of(6)).to.deep.equal('VI');
    expect(romanNumerals.of(7)).to.deep.equal('VII');
    expect(romanNumerals.of(8)).to.deep.equal('VIII');
    expect(romanNumerals.of(9)).to.deep.equal('IX');
    expect(romanNumerals.of(10)).to.deep.equal('X');
    expect(romanNumerals.of(11)).to.deep.equal('XI');
    expect(romanNumerals.of(12)).to.deep.equal('XII');
    expect(romanNumerals.of(13)).to.deep.equal('XIII');
    expect(romanNumerals.of(14)).to.deep.equal('XIV');
  });
});