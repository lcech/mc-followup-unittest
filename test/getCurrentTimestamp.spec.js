const fs = require('fs');
const vm = require('vm');
const expect = require('chai').expect;

describe('getCurrentTimestamp test', () => {
  let path = './src/getCurrentTimestamp.js';
  vm.runInThisContext(fs.readFileSync(path, 'utf-8'), path);
  it('getCurrentTimestamp() should return timestamp in ISO format', () => {
    
    // 1. ARRANGE

    // 2. ACT
    const currentTimestamp = getCurrentTimestamp();
    console.log('returned timestamp: ' + currentTimestamp);

    // 3. ASSERT
    expect(currentTimestamp).to.match(/\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/);

  });
});
