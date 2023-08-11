import { contractABI } from "./EvidenceManagerContractABI";
import { ethers } from "ethers";
import { Web3Storage } from "web3.storage"

const contractAddress = "0xd521425a7aC6FaDb22ff2755465B80781dbaAc72";

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

export const addCaseFile = async (caseId, signer, files) => {
    const cid = await storeFiles(files);
    const Contract = new ethers.Contract(contractAddress, contractABI, signer)
    
    await Contract.addCaseFile(caseId, cid, {
        gasLimit: 1000000000,
    })
  };