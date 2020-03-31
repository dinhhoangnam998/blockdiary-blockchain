const MyBlockDiary = artifacts.require('MyBlockDiary');

contract('MyBlockDiary', async addresses => {
  it('should equal:', async () => {
    const instance = await MyBlockDiary.deployed();
    const fakeCid = web3.utils.sha3('hello world!');
    const result = await instance.addCid(fakeCid);
    console.log(result);
    const cid = await instance.cids(0);
    assert.equal(fakeCid, cid);
  })
})