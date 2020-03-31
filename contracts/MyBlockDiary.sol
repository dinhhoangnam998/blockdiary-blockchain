pragma solidity ^0.6.0;

contract MyBlockDiary {
    bytes32[] public cids;
    address private owner;

    modifier onlyOwner {
        require(msg.sender == owner, "Only owner can access");
        _;
    }

    constructor() public {
        owner = msg.sender;
    }

    function addCid(bytes32 cid) external onlyOwner {
        cids.push(cid);
    }

    function getCids() external view returns (bytes32[] memory _cids) {
        return cids;
    }
}
