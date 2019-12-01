"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CryptoJS = require("crypto-js");
class Block {
    constructor(index, hash, previousHash, data, timestamp) {
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestamp = timestamp;
    }
}
Block.calculateBlockHash = (index, previousHash, data, timestamp) => CryptoJS.SHA256(index + previousHash + timestamp + data).toString();
Block.validateStructure = (aBlock) => typeof aBlock.index === "number" &&
    typeof aBlock.hash === "string" &&
    typeof aBlock.previousHash === "string" &&
    typeof aBlock.data === "string" &&
    typeof aBlock.timestamp === "number";
const genesisBlock = new Block(0, "2020202020", "", "hello", 123456);
let blockchain = [genesisBlock];
const getBlockchain = () => blockchain;
const getLatestBlock = () => blockchain[blockchain.length - 1];
const getNewTimesStamp = () => Math.round(new Date().getTime() / 1000);
const createNewBlock = (data) => {
    const previousBlock = getLatestBlock();
    const newIndex = previousBlock.index + 1;
    const nextTimestamp = getNewTimesStamp();
    const nextHash = Block.calculateBlockHash(newIndex, previousBlock.hash, data, nextTimestamp);
    const newBlock = new Block(newIndex, nextHash, previousBlock.hash, data, nextTimestamp);
    return newBlock;
};
const getHashforBlock = (aBlock) => Block.calculateBlockHash(aBlock.index, aBlock.previousHash, aBlock.data, aBlock.timestamp);
const isBlockValid = (candidateBlock, previousBlock) => {
    if (!Block.validateStructure(candidateBlock)) { //candidateBlock 이 유효하지 않으면 False
        return false;
    }
    else if (previousBlock.index + 1 !== candidateBlock.index) { //previousBlock의 인덱스+1랑 candidateBlock블록의 인덱스가 다르면 False
        return false;
    }
    else if (previousBlock.hash !== candidateBlock.previousHash) { //previousBlock의 해쉬와 candidateBlock블록의 previousHash가 다르면 False
        return false;
    }
    else if (getHashforBlock(candidateBlock) !== candidateBlock.hash) { //따로 해쉬를 계산해서 블록의 해쉬가 유효한지 체크
        return false;
    }
    else {
        return true;
    }
};
const addBlock = (candidateBlock) => {
    if (isBlockValid(candidateBlock, getLatestBlock())) {
        blockchain.push(candidateBlock);
    }
};
console.log(createNewBlock("hello"));
console.log(createNewBlock("bye bye"));
//# sourceMappingURL=index.js.map