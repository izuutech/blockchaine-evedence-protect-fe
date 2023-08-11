import { contractABI } from "./EvidenceManagerContractABI";
import { ethers } from "ethers";

const contractAddress = "0xd521425a7aC6FaDb22ff2755465B80781dbaAc72";

export const getFolders = async (signer) => {
    const Contract = new ethers.Contract(contractAddress, contractABI, signer)
    
    const folders = await Contract.getCaseFolders();

    return folders;
};