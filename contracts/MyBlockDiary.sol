pragma solidity ^0.6.0;

contract MyBlockDiary {
    string[] public cids;
    address private owner;

    modifier onlyOwner {
        require(msg.sender == owner, "Only owner can access");
        _;
    }

    constructor() public {
        owner = msg.sender;
    }

    function addCid(string memory cid) public onlyOwner {
        cids.push(cid);
    }
}
