import { contractABI } from "./EvidenceManagerContractABI";
import { ethers } from "ethers";

const contractAddress = "0xd521425a7aC6FaDb22ff2755465B80781dbaAc72";

export const createCaseFolder = async (signer) => {
    const Contract = new ethers.Contract(contractAddress, contractABI, signer)
    
    await Contract.createCaseFolder(caseName, caseDetails, {
        gasLimit: 1000000000,
    })
};