import { ethers } from "ethers";
import { contractABI } from "./EvidenceManagerContractABI";
import { Web3Storage } from "web3.storage";
require('dotenv').config();

const contractAddress = "0x7F8B14183615BA9C8a61472aeD45c47C20409C23";

var provider;
var signer;

  const apiToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweEU2YTk4NDRCNWZGYjg3NzhkRGZEYTc3RkJiQzhmRjI1ODk4MzFFYTUiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2OTE3Njc1MzQ0NDQsIm5hbWUiOiJFdmlkZW5jZSBQcm9qZWN0In0.bKBsM0Aa7Bqa5Ea3HDgMPyMAwHQR7RWvFJequghxxKQ";

  // const client = new Web3Storage({ token: apiToken });

  async function storeFiles (files) {
    const client = new Web3Storage({ token: apiToken });
    const cid = await client.put(files);
    console.log('stored files with cid:', cid)
    return cid
  }

export const connectWallet = async() => {
    provider = new ethers.providers.Web3Provider(window.ethereum)

    await provider.send("eth_requestAccounts", []);

    signer = provider.getSigner();

    console.log(signer);
}

export const createFolder = async(name, details) => {

    const Contract = new ethers.Contract(contractAddress, contractABI, signer);

    Contract.createCaseFolder(name, details);
}

export const getCasefolders = async() => {
    const Contract = new ethers.Contract(contractAddress, contractABI, provider);

    const folders = await Contract.getCaseFolders();
    return folders;
}

export const getCaseFiles = async(caseId) => {
    const Contract = new ethers.Contract(contractAddress, contractABI, provider);

    const fileCids = await Contract.getFiles(caseId);
    return fileCids;
}

export const addFile = async(files) => {
    const Contract = new ethers.Contract(contractAddress, contractABI, signer);

    const cid = await storeFiles(files);

    Contract.addCaseFile(1, cid);

}

export const displayFile = async (cid) => {
    const prefix = 'https://';
    const suffix = '.ipfs.w3s.link';
    return `${prefix}${cid}${suffix}`;
  };
