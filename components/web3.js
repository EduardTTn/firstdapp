import Web3 from 'web3';

const web3 = new Web3(Web3.givenProvider || "https://testnet.modex.tech/rpc/")

export default web3;