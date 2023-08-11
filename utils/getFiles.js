import { id } from "ethers/lib/utils.js";
import { contractABI } from "./EvidenceManagerContractABI";
import { ethers } from "ethers";

const contractAddress = "0xd521425a7aC6FaDb22ff2755465B80781dbaAc72";

export const getFiles = async (signer, caseId) => {
    const Contract = new ethers.Contract(contractAddress, contractABI, signer)
    
    const fileCIDS = await Contract.getFiles(id);

    return fileCIDS;    
};