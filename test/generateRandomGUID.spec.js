const fs = require('fs');
const vm = require('vm');
const expect = require('chai').expect;

describe('generateRandomGUID test', () => {
  let path = './src/generateRandomGUID.js';
  vm.runInThisContext(fs.readFileSync(path, 'utf-8'), path);
  it('generateRandomGUID() should return ID in GUID format', () => {
    
    // 1. ARRANGE

    // 2. ACT
    const sessionId = generateRandomGUID();
    console.log('returned sessionId: ' + sessionId);

    // 3. ASSERT
    expect(sessionId).to.match(/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i);

  });
});
