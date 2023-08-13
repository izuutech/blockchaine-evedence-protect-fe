import { ethers } from "ethers";
import { contractABI } from "./EvidenceManagerContractABI";
import { Web3Storage } from "web3.storage";

const contractAddress = "0xd521425a7aC6FaDb22ff2755465B80781dbaAc72";

var provider;
var signer;

function getAccessToken () {
    return process.env.WEB3STORAGE_TOKEN
  }
  
  function makeStorageClient () {
    return new Web3Storage({ token: getAccessToken() })
  }

  async function storeFiles (files) {
    const client = makeStorageClient()
    const cid = await client.put(files)
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

export const addFile = async(caseId, files) => {
    const Contract = new ethers.Contract(contractAddress, contractABI, signer);

    const cid = await storeFiles(files);

    Contract.addCaseFile(caseId, cid);
}

export const displayFile = async (cid) => {
    const prefix = 'https://';
    const suffix = '.ipfs.w3s.link';
    return `${prefix}${cid}${suffix}`;
  };
