import { ethers } from "ethers";
import { contractABI } from "./EvidenceManagerContractABI";
import { Web3Storage } from "web3.storage";
require("dotenv").config();

const contractAddress = "0xABCf6f5A203D85F4e8bd6b3094A77A6de6dd8Ff5";

var provider;
var signer;

const apiToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweEU2YTk4NDRCNWZGYjg3NzhkRGZEYTc3RkJiQzhmRjI1ODk4MzFFYTUiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2OTE3Njc1MzQ0NDQsIm5hbWUiOiJFdmlkZW5jZSBQcm9qZWN0In0.bKBsM0Aa7Bqa5Ea3HDgMPyMAwHQR7RWvFJequghxxKQ";

// const client = new Web3Storage({ token: apiToken });

async function storeFiles(files) {
  const client = new Web3Storage({ token: apiToken });
  const cid = await client.put(files);
  console.log("stored files with cid:", cid);
  return cid;
}

export const connectWallet = async () => {
  provider = new ethers.providers.Web3Provider(window.ethereum);

  await provider.send("eth_requestAccounts", []);

  signer = provider.getSigner();

  console.log(signer);
};

export const createFolder = async (name, details) => {
  const Contract = new ethers.Contract(contractAddress, contractABI, signer);

  Contract.createCaseFolder(name, details);
};


export const getCasefolders = async () => {
  const Contract = new ethers.Contract(contractAddress, contractABI, signer);
  const counter = await Contract.getCounter();
  var obj = new Object();
  const allFolders = [];
  for (let i = 0; i < counter; i++) {
    const element = await Contract.getCaseFolders(i);
    const id = parseInt(element[0], 16);
    obj.id = id;
    obj.name  = element[1];
    obj.details = element[2];
    var jsonString = JSON.stringify(obj);
    allFolders.push(jsonString);
  }
  var foldersJson = JSON.stringify(allFolders)
  return foldersJson;
};

export const getCaseFiles = async (caseId) => {
  const Contract = new ethers.Contract(contractAddress, contractABI, provider);

  const fileCids = await Contract.getFiles(caseId);
  return fileCids;
};

export const addFile = async (files) => {
  const Contract = new ethers.Contract(contractAddress, contractABI, signer);

  const cid = await storeFiles(files);

  Contract.addCaseFile(1, cid);
};

export const displayFile = async (cid) => {
  const prefix = "https://";
  const suffix = ".ipfs.w3s.link";
  return `${prefix}${cid}${suffix}`;
};
